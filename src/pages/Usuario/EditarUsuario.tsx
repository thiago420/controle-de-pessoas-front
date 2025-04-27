import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Main, ImageUser, Input, Button, ButtonGroup } from './styles';

export default function EditarUsuario() {
  const navigate = useNavigate();

  const handleSalvar = () => {
    alert('Conta atualizada com sucesso!');
    navigate(-1);
  };

  const handleExcluirConta = () => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir a conta?');
    if (confirmacao) {
      alert('Conta excluída com sucesso!');
      navigate('/');
    }
  };

  return (
    <Container>
      <Header>
        <h2>Editar Usuário</h2>
      </Header>

      <Main>
        <ImageUser src="https://via.placeholder.com/100" alt="Foto do usuário" />

        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Número celular" />
        <Input placeholder="CPF" />

        <Button onClick={() => navigate('/editar-endereco')}>
          Alterar endereço
        </Button>

        <ButtonGroup>
          <Button onClick={handleSalvar}>SALVAR</Button>
          <Button onClick={() => navigate(-1)}>CANCELAR</Button>
        </ButtonGroup>

        <Button danger onClick={handleExcluirConta}>EXCLUIR CONTA</Button>
      </Main>
    </Container>
  );
}
