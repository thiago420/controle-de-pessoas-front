import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/background.png') no-repeat center center; /* Troque para sua imagem */
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 50px; /* Espaço para a logo no canto */
  position: relative;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 30px;
  left: 30px;
`;

export const FormWrapper = styled.div`
  background: #f2f2f2;
  padding: 40px 30px;
  border-radius: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
