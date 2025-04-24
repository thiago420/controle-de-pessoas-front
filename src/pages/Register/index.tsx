import React from 'react';
import Input from '../../components/Input';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';
import Button from '../../components/Button';

const Register = () => {
  return (
    <Container>
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Usuário" placeholder="Digite seu nome de usuário" />
      <Input label="Nome do Pai" placeholder="Digite o nome do pai" />
      <Input label="Nome da Mãe" placeholder="Digite o nome da mãe" />
      <Input label="CPF" placeholder="Digite seu CPF" />
      <Input label="CEP" placeholder="Digite seu CEP" />
      <Input label="Estado (UF)" placeholder="Digite a sigla do estado (Ex: SP)" />
      <Input label="Bairro" placeholder="Digite seu bairro" />
      <Input label="Rua" placeholder="Digite o nome da rua" />
      <Input label="Número da Casa" placeholder="Digite o número da casa" />
      <Input label="Complemento" placeholder="Digite o complemento (opcional)" />
      <Input label="Senha" type="password" placeholder="Digite sua senha" />
      <Input label="Repitir Senha" type="password" placeholder="Digite sua senha" />
      <Button text="Criar Conta" />
      <NavLink to="/login">Já possui uma conta?</NavLink>
    </Container>
  )
}

export default Register;