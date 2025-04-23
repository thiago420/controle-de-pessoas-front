import Input from '../../components/Input';
import NavLink from '../../components/NavLink';
import { Container, LinksContainer } from './styles';
import Button from '../../components/Button';
import React from 'react';

const Login = () => {
  return (
    <Container>
      <Input label="Usuário" placeholder="Digite seu nome de usuário" />
      <Input label="Senha" type="password" placeholder="Digite sua senha" />
      <Button text="Entrar" />
      <LinksContainer>
        <NavLink text='Esqueci minha senha' to="/forgot-password" />
        <NavLink text='Não possui uma conta?' to="/register" />
      </LinksContainer>
    </Container>
  )
}

export default Login;