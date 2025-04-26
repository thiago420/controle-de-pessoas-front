import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- IMPORTANTE
import Input from '../../components/Input';
import { Container, FormWrapper, ButtonsContainer, Logo, Title, Subtitle, StyledNavLink } from './styles';
import Button from '../../components/Button';

const Register = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // <-- PARA REDIRECIONAR

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleRegister = () => {
    // Aqui você pode depois adicionar validações e envio para o backend se quiser
    alert('Conta criada com sucesso!');
    navigate('/login'); // <-- VOLTA PRA LOGIN
  };

  return (
    <Container>
      <Logo src="/logo.png" alt="Logo" />
      <FormWrapper>
        <Title>Cadastro</Title>
        <Subtitle>Bem vindo à FacePass</Subtitle>

        {step === 1 && (
          <>
            <Input label="Nome" placeholder="Digite seu nome" />
            <Input label="CPF" placeholder="Digite seu CPF" />
            <Input label="Telefone" placeholder="Digite seu telefone" />
            <Input label="Foto" type="file" />
            <ButtonsContainer>
              <StyledNavLink to="/login">
                <Button text="Voltar" />
              </StyledNavLink>
              <Button text="Continuar" onClick={nextStep} />
            </ButtonsContainer>
          </>
        )}

        {step === 2 && (
          <>
            <Input label="Email" placeholder="Digite seu email" />
            <Input label="Usuário" placeholder="Digite seu nome de usuário" />
            <Input label="Nome do Pai" placeholder="Digite o nome do pai" />
            <Input label="Nome da Mãe" placeholder="Digite o nome da mãe" />
            <Input label="Senha" type="password" placeholder="Digite sua senha" />
            <Input label="Repetir Senha" type="password" placeholder="Digite sua senha novamente" />
            <ButtonsContainer>
              <Button text="Voltar" onClick={prevStep} />
              <Button text="Criar Conta" onClick={handleRegister} /> {/* <-- BOTÃO FINAL */}
            </ButtonsContainer>
          </>
        )}
      </FormWrapper>
    </Container>
  );
}

export default Register;
