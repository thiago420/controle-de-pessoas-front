import { useState, useRef } from "react";
import styled from "styled-components";

// Styled components
const WebcamContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const WebcamVideo = styled.video`
  width: 100%;
  border-radius: 10px;
`;

const PreviewImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const WebcamCanvas = styled.canvas`
  display: none;
`;

const WebcamButton = styled.button`
  position: relative;
  margin-top: 10px;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Webcam = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

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

  const resetState = () => {
    stopWebcam();
    setCapturedImages([]);
  };

  return (
    <WebcamContainer>
      {capturedImages.length > 0 ? (
        <>
          {capturedImages.map((img, index) => (
            <PreviewImg key={index} src={img} alt={`Captured ${index}`} />
          ))}
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



















































































