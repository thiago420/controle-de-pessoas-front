import React from 'react';
import Input from '../../components/Input';
import { NavLink } from 'react-router-dom';
import { Card, Container } from './styles';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Container>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '25px' }}>
          <h3>Bem-Vindo à FacePass</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <span>Não tem conta?</span>
            <span>Cadastre-se</span>
          </div>
        </div>
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <h1>Login</h1>
        </div>
        <Input label="Insira seu e-mail" placeholder="exemplo@exemplo" />
        <Input label="Insira sua senha" type="password" placeholder="senha" />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse', }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <NavLink to="/recuperar-senha">Esqueci minha senha</NavLink>
          </div>
        </div>
        <Button text="Entrar" />
      </Card>
    </Container>
  )
}

export default Login;