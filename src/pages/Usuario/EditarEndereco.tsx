import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Main, ImageUser, Input, Button, ButtonGroup } from './styles';

export default function EditarEndereco() {
  const navigate = useNavigate();

  const handleSalvar = () => {
    alert('Endereço atualizado com sucesso!');
    navigate(-1); // Volta para a tela anterior
  };

  return (
    <Container>
      <Header>
        <h2>Editar Endereço</h2>
      </Header>

      <Main>
        <ImageUser src="https://via.placeholder.com/100" alt="Foto do usuário" />

        <Input placeholder="CEP" />
        <Input placeholder="Rua / Avenida" />
        <Input placeholder="Número" />
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="Estado" />
        <Input placeholder="Complemento" />

        <ButtonGroup>
          <Button onClick={handleSalvar}>SALVAR</Button>
          <Button onClick={() => navigate(-1)}>CANCELAR</Button>
        </ButtonGroup>
      </Main>
    </Container>
  );
}
