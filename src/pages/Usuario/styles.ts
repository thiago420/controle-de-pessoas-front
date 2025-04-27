import styled from 'styled-components';

export const Container = styled.div`

  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  background: #0b1d3c;
  width: 100%;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Main = styled.main`
  background: rgba(255, 255, 255, 0.9);
  margin-top: 20px;
  padding: 30px;
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Info = styled.p`
  margin: 5px 0;
`;

export const ImageUser = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px 0;
  border-radius: 50%;
  object-fit: cover;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Button = styled.button<{ danger?: boolean }>`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: ${({ danger }) => (danger ? '#dc3545' : '#3d78e9')};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${({ danger }) => (danger ? '#a71d2a' : '#0056b3')};
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;
