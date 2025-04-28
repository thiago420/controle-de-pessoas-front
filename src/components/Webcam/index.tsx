import { useState, useRef } from "react";
import { WebcamContainer, WebcamVideo, WebcamCanvas, PreviewImg, WebcamButton, WebcamInput } from "./styles";
import axios from "axios";
import React from 'react';

const Webcam = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const idUsuarioRef = useRef<HTMLInputElement>(null);
  const senhaEmpRef = useRef<HTMLInputElement>(null);

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
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
    if (!idUsuarioRef.current?.value) {
      alert("Por favor, insira o ID do usuário/empresa.");
      return;
    }

    const formData = new FormData();
    formData.append('usuario_id', idUsuarioRef.current?.value);
    capturedImages.forEach((image, index) => {
      const blob = dataURLToBlob(image);
      const file = new File([blob], `frame_${index}.jpg`, { type: 'image/jpeg' });
      formData.append('frames', file);
    });

    if (isRegister) {
      try {
        setIsRegister(true);
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
        setIsRegister(false);
        setIsUploading(true);

        if (!senhaEmpRef.current?.value) {
          alert("Por favor, insira a senha da empresa.");
          return;
        }

        formData.append('senha_empresa', senhaEmpRef.current?.value);

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
          <span>Nome do arquivo: frame_{imageIndex}.jpg</span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <WebcamButton onClick={() => setImageIndex(prev => ((prev + capturedImages.length - 1) % capturedImages.length))}>Anterior</WebcamButton>
            <WebcamButton onClick={() => setImageIndex(prev => ((prev + 1) % capturedImages.length))}>Próximo</WebcamButton>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px'}}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0' }}>
              <span>ID Usuário/Empresa</span>
              <WebcamInput
                type="number"
                maxLength={4}
                max={9999}
                min={1}
                ref={idUsuarioRef}
                placeholder="ID"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0' }}>
              <span>Senha</span>
              <WebcamInput
                type="password"
                placeholder="Senha"
                ref={senhaEmpRef}
                style={{ width: '150px' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <WebcamButton onClick={() => { uploadImages(true); }} disabled={isUploading}>
              {isUploading && isRegister ? "Enviando..." : "Registrar Face"}
            </WebcamButton>
            <WebcamButton onClick={() => { uploadImages(false); }} disabled={isUploading}>
              {isUploading && !isRegister ? "Enviando..." : "Validar Face"}
            </WebcamButton>
            <WebcamButton onClick={resetState}>Resetar</WebcamButton>
          </div>
        </>
      ) : (
        <>
          <WebcamVideo ref={videoRef} autoPlay muted />
          <WebcamCanvas ref={canvasRef} />
          {!mediaStream ? (
            <WebcamButton onClick={startWebcam}>Iniciar Camera</WebcamButton>
          ) : (
            <WebcamButton onClick={captureMultipleImages}>Capturar Imagem</WebcamButton>
          )}
        </>
      )}
    </WebcamContainer>
  );
};

export default Webcam;