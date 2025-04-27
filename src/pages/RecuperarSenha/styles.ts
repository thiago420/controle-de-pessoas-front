// src/pages/RecuperarSenha/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/background.png'); // Substitua pelo seu fundo real
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: #d9d9d9;
  padding: 40px 30px;
  border-radius: 20px;
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  color: #333;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #4181f7;
  color: white;
  padding: 12px 0;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #3166c4;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
