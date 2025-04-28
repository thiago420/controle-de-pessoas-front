import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #041a28; /* Fundo escuro */
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #000;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #2c70f5;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1955c8;
  }

  &:nth-child(2) {
    background-color: #65aef5;
    &:hover {
      background-color: #3c8ee6;
    }
  }
`;
