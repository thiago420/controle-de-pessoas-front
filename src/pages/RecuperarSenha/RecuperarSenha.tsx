import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Title, Description, Form, Input, Button, ButtonGroup } from './styles';

const RecuperarSenha: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email para recuperação:', email);
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
