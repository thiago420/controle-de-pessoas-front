import styled from "styled-components";

export const WebcamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const WebcamVideo = styled.video`
  width: 100%;
`;

export const PreviewImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const WebcamCanvas = styled.canvas`
  display: none;
`;

export const WebcamButton = styled.button`
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