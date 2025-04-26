import styled from "styled-components";

export const WebcamContainer = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  font-family: 'Inter';
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

export const WebcamInput = styled.input`
  all: unset;
  display: flex;
  text-align: center;
  width: 90px;
  height: 50px;
  font-size: 1.5rem;
  font-family: 'Inter';
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`