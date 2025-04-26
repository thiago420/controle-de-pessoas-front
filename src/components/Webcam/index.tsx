import { useState, useRef } from "react";
import { WebcamContainer, WebcamVideo, WebcamCanvas, PreviewImg, WebcamButton } from "./styles";
import axios from "axios";
import React from 'react';

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
        const maxImages = 10;
        const intervalTime = 100;

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

  const uploadImages = async (isRegister: boolean) => {
    if (capturedImages.length === 0) return;

    const formData = new FormData();
    formData.append('usuario_id', '1');
    capturedImages.forEach((image, index) => {
      const blob = dataURLToBlob(image);
      const file = new File([blob], `frame_${index}.jpg`, { type: 'image/jpeg' });
      formData.append('frames', file);
    });

    if (isRegister) {
      try {
        setIsUploading(true);
        await axios.post("http://127.0.0.1:8000/api/faces/register/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Face registered successfully!");
      } catch (error) {
        alert(`Error registering face: ${error}`);
      } finally {
        setIsUploading(false);
      }

    } else {
      try {
        setIsUploading(true);

        const response = await axios.post("http://127.0.0.1:8000/api/faces/validar/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data.success) {
          alert("Face validated successfully!");
        } else {
          alert(response.data.message);
        }

      } catch (error) {
        alert(`Error validating face: ${error}`);
      } finally {
        setIsUploading(false);
      }
    }
  }

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
          <div>
            <WebcamButton onClick={() => setImageIndex(prev => ((prev + capturedImages.length - 1) % capturedImages.length))}>Anterior</WebcamButton>
            <WebcamButton onClick={() => setImageIndex(prev => ((prev + 1) % capturedImages.length))}>Próximo</WebcamButton>
          </div>
          <div>
            <WebcamButton onClick={() => {uploadImages(true);}} disabled={isUploading}>
              {isUploading ? "Uploading..." : "Register Face"}
            </WebcamButton>
            <WebcamButton onClick={() => {uploadImages(false);}} disabled={isUploading}>
              {isUploading ? "Uploading..." : "Validar Face"}
            </WebcamButton>
            <WebcamButton onClick={resetState}>Reset</WebcamButton>
          </div>
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