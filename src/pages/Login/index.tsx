import React, { useState } from 'react';
import Input from '../../components/Input';
import { useNavigate, NavLink } from 'react-router-dom';
import { Card, Container } from './styles';
import Button from '../../components/Button';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [empresaId, setEmpresaId] = useState('');

  const handleSubmit = async () => {
    const formdata = new FormData();
    formdata.append('email', email);
    formdata.append('senha', senha);
    formdata.append('empresa_id', empresaId);

    let response;

    try {
      response = await axios.post('http://127.0.0.1:8000/api/usuarios/login/', formdata);
      if (response.data.status !== 200) return alert("Erro ao logar usuário!");
    } catch {
      return alert("Erro ao logar usuário!");
    }

    localStorage.setItem("idUsuario", response.data.usuario_id);
    localStorage.setItem("idEmpresa", response.data.empresa_id);
    localStorage.setItem("permissao", response.data.permissão.permissao);

    alert("Logado com sucesso!");
    
    navigate('/usuario');
  }

  return (
    <Container>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '25px', alignItems: 'center' }}>
          <h3>Bem-Vindo à FacePass</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            <span>Não tem conta?</span>
            <NavLink to="/register" style={{ textDecoration: 'none' }}>
              <Button text="Cadastre-se" /> {/* <-- Botão Cadastre-se */}
            </NavLink>
          </div>
        </div>

        <div style={{ width: '100%', marginBottom: '20px' }}>
          <h1>Login</h1>
        </div>

        <Input 
          label="Insira o ID da Empresa" 
          type='text' 
          placeholder="0" 
          value={empresaId} 
          onChange={(e) => setEmpresaId(e.target.value)} 
        />
        <Input 
          label="Insira seu e-mail" 
          type='email' 
          placeholder="exemplo@exemplo" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          label="Insira sua senha" 
          type="password" 
          placeholder="senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
        />

        <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <NavLink to="/recuperar-senha">Esqueci minha senha</NavLink>
          </div>
        </div>

        <Button onClick={handleSubmit} text="Entrar" />
      </Card>
    </Container>
  );
}

export default Login;
