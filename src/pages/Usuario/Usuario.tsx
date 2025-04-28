import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Main, Section, Title, Info, ImageUser, Button, ButtonGroup, ButtonHeader } from './styles';

export default function Usuario() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <h2>Usuário</h2>
        <ButtonHeader onClick={() => navigate(-1)}>Voltar</ButtonHeader>
      </Header>

      <Main>
        <Section>
          <Title>Seus dados pessoais</Title>
          <Info>Nome: Deide Costa</Info>
          <Info>E-mail: deidecosta@gmail.com</Info>
          <Info>CPF: 123.456.789-00</Info>
          <Info>Telefone: +55 (48) 1234-5678</Info>
          <ImageUser src="https://via.placeholder.com/150" alt="Foto do usuário" />
        </Section>

        <ButtonGroup>
          <Button onClick={() => navigate('/editar-usuario')}>
            Alterar dados
          </Button>
          <Button onClick={() => navigate('/fazer-parte-empresa')}>
            Fazer parte de uma empresa
          </Button>
          <Button onClick={() => navigate('/ver-empresas')}>
            Ver empresas
          </Button>
        </ButtonGroup>
      </Main>
    </Container>
  );
}
