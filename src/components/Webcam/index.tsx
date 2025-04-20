import { useState, useRef } from "react";
import { WebcamContainer, WebcamVideo, WebcamCanvas, PreviewImg, WebcamButton } from "./styles";
import axios from "axios";

const Webcam = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
    const [capturedImages, setCapturedImages] = useState<string[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
  
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setMediaStream(stream);
      } catch (error) {
        alert(`Webcam access denied. Please allow access to use the webcam. ${error}`);
      }
    };
  
    const stopWebcam = () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
        setMediaStream(null);
      }
    };
  
    const captureMultipleImages = () => {
      setImageIndex(0);
  
      if (videoRef.current && canvasRef.current) {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
  
        if (context && video.videoWidth && video.videoHeight) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
  
          const images: string[] = [];
          let count = 0;
          const maxImages = 30;
          const intervalTime = 50;
  
          const intervalId = setInterval(() => {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageDataUrl = canvas.toDataURL("image/jpeg");
            images.push(imageDataUrl);
            count++;
  
            if (count >= maxImages) {
              clearInterval(intervalId);
              setCapturedImages(images);
              stopWebcam();
            }
          }, intervalTime);
        }
      }
    };
  
    const uploadImages = async () => {
      if (capturedImages.length === 0) return;
  
      const formData = new FormData();
      capturedImages.forEach((image, index) => {
        const blob = dataURLToBlob(image);
        // Use uma chave única para cada imagem
        formData.append(`images[${index}]`, blob, `image_${index}.jpg`);
      });
  
      try {
        setIsUploading(true);
        // Se quiser testar utilize ou uma API local ou o site Pipedream
        await axios.post("https://your-api-url.com/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Images uploaded successfully!");
      } catch (error) {
        alert(`Failed to upload images: ${error}`);
      } finally {
        setIsUploading(false);
      }
    };
  
    const dataURLToBlob = (dataURL: string): Blob => {
      const byteString = atob(dataURL.split(",")[1]);
      const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
      const arrayBuffer = new Uint8Array(byteString.length);
  
      for (let i = 0; i < byteString.length; i++) {
        arrayBuffer[i] = byteString.charCodeAt(i);
      }
  
      return new Blob([arrayBuffer], { type: mimeString });
    };
  
    const resetState = () => {
      stopWebcam();
      setCapturedImages([]);
    };
  
    return (
      <WebcamContainer>
        {capturedImages.length > 0 ? (
          <>
            {capturedImages.length > 0 ? (
              <PreviewImg
                key={imageIndex}
                src={capturedImages[imageIndex]}
                alt={`Captured ${imageIndex}`}
              />
            ) : null}
            <span>Nome do arquivo: image_{imageIndex}.jpg</span>
            <br />
            <WebcamButton onClick={() => setImageIndex(prev => ((prev + capturedImages.length - 1) % capturedImages.length))}>Anterior</WebcamButton>
            <WebcamButton onClick={() => setImageIndex(prev => ((prev + 1) % capturedImages.length))}>Próximo</WebcamButton>
            <br />
            <WebcamButton onClick={uploadImages} disabled={isUploading}>
              {isUploading ? "Uploading..." : "Upload Images"}
            </WebcamButton>
            <WebcamButton onClick={resetState}>Reset</WebcamButton>
          </>
        ) : (
          <>
            <WebcamVideo ref={videoRef} autoPlay muted />
            <WebcamCanvas ref={canvasRef} />
            {!mediaStream ? (
              <WebcamButton onClick={startWebcam}>Start Webcam</WebcamButton>
            ) : (
              <WebcamButton onClick={captureMultipleImages}>Capture Images</WebcamButton>
            )}
          </>
        )}
      </WebcamContainer>
    );
  };
  
  export default Webcam;