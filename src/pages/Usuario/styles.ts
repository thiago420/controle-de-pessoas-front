import styled from 'styled-components';

export const Container = styled.div`
  background: url('/background.png') no-repeat center center;
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

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

export const ButtonHeader = styled.button`
  background-color: #c0c0c0;
  color: #0b1d3c;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a9a9a9;
  }
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
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Info = styled.p`
  margin: 5px 0;
  font-size: 0.95rem;
`;

export const ImageUser = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px 0;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ccc;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Button = styled.button<{ danger?: boolean }>`
  background-color: ${({ danger }) => (danger ? '#dc3545' : '#3d78e9')};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 8px 0;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ danger }) => (danger ? '#a71d2a' : '#0056b3')};
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;
