import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Title, Description, Form, Input, Button, ButtonGroup } from './styles';

const EmailEnviado: React.FC = () => {
  const [codigo, setCodigo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Código inserido:', codigo);
    navigate('/nova-senha');
  };

  return (
    <Container>
      <Card>
        <Title>Recupere sua senha</Title>
        <Description>Enviamos um código para seu e-mail, confirme o código no campo abaixo.</Description>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Insira o código enviado"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />
          <ButtonGroup>
            <Button type="button" onClick={() => navigate('/login')}>Voltar</Button>
            <Button type="submit" primary>Continuar</Button>
          </ButtonGroup>
        </Form>
      </Card>
    </Container>
  );
};

export default EmailEnviado;
