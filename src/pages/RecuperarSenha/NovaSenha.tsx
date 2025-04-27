import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Title, Form, Input, Button } from './styles';

const NovaSenha: React.FC = () => {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Senha atualizada:', senha);
    alert('Senha alterada com sucesso!');
    navigate('/');
  };

  return (
    <Container>
      <Card>
        <Title>Recupere sua senha</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="password"
            placeholder="Crie uma nova senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
          <Button type="submit">Voltar para o login</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default NovaSenha;
