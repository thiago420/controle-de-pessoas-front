import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import React from 'react';

const ForgotPassword = () => {
  return (
    <Container>
        <Input label="Email" placeholder="Digite seu email" />
        <Button text="Enviar Link" />
    </Container>
  )
}

export default ForgotPassword;