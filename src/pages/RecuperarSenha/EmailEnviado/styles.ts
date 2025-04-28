import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #1d2b36; /* Cor extraída da imagem que você mandou */
  overflow: hidden;
`;

export const Card = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #000;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #1a73e8;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button<{ primary?: boolean }>`
  background: ${({ primary }) => (primary ? '#1a73e8' : '#64b5f6')};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  min-width: 120px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;

  &:hover {
    background: ${({ primary }) => (primary ? '#1558b0' : '#42a5f5')};
  }
`;
