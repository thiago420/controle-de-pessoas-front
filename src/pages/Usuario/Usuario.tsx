import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Main, Section, Title, Info, ImageUser, Button } from './styles';

export default function Usuario() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <h2>Usuário</h2>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </Header>

      <Main>
        <Section>
          <Title>Seus dados pessoais</Title>
          <Info>Nome: Delia Costa</Info>
          <Info>E-mail: deliacosta@gmail.com</Info>
          <Info>CPF: 123.456.789-00</Info>
          <Info>Telefone: +55 (48) 1234-5678</Info>
          <Info>Sua foto:</Info>
          <ImageUser src="https://via.placeholder.com/100" alt="Foto do usuário" />
        </Section>

        <Button onClick={() => navigate('/editar-usuario')}>
          Alterar dados
        </Button>
      </Main>
    </Container>
  );
}
