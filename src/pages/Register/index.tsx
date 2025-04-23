import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import NavLink from '../../components/NavLink';
import React from 'react';

const Register = () => {
  return (
    <Container>
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Usuário" placeholder="Digite seu nome de usuário" />
      <Input label="Senha" type="password" placeholder="Digite sua senha" />
      <Input label="Repetir Senha" type="password" placeholder="Digite sua senha" />
      <Button text="Criar Conta" />
      <NavLink text='Já possui uma conta?' to="/login" />
    </Container>
  )
}

export default Register;