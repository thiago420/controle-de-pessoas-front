import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Title, Description, Form, Input, Button, ButtonGroup } from './styles';
import axios from 'axios';

const RecuperarSenha: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/usuarios/esqueci-senha/', formData);
      if (response.data.status !== 200) return alert("Algo deu errado!");
    } catch {
      return alert("Algo deu errado!");
    }
    localStorage.setItem('emailChangeSenha', email);
    navigate('/email-enviado');
  };

  return (
    <Container>
      <Card>
        <Title>Recupere sua senha</Title>
        <Description>Digite seu e-mail para enviarmos um código de recuperação.</Description>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <ButtonGroup>
            <Button type="submit">Enviar</Button>
            <Button type="button" onClick={() => navigate('/login')}>Voltar</Button>
          </ButtonGroup>
        </Form>
      </Card>
    </Container>
  );
};

export default RecuperarSenha;
