import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- IMPORTANTE
import Input from "../../components/Input";
import {
  Container,
  FormWrapper,
  ButtonsContainer,
  Logo,
  Title,
  Subtitle,
  StyledNavLink,
} from "./styles";
import Button from "../../components/Button";
import axios from "axios";

const Register = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // <-- PARA REDIRECIONAR

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const [idEndereco, setIdEndereco] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [pais, setPais] = useState("");

  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const formDataEndereco = new FormData();
    formDataEndereco.append('nu_cep', cep);
    formDataEndereco.append('nm_logradouro', logradouro);
    formDataEndereco.append('nu_numero', numero);
    formDataEndereco.append('ds_complemento', complemento);
    formDataEndereco.append('nm_bairro', bairro);
    formDataEndereco.append('nm_cidade', cidade);
    formDataEndereco.append('sg_estado', estado);
    formDataEndereco.append('nm_pais', pais);

    try {
      const resultado = await axios.post('http://127.0.0.1:8000/api/enderecos/', formDataEndereco);
      if (resultado.data.status !== 200) return alert("Erro ao cadastrar endereço!");
      setIdEndereco(parseInt(resultado.data.id));
    } catch {
      return alert("Erro ao cadastrar endereço!");
    }

    const formDataUser = new FormData();
    formDataUser.append('nm_nome', name);
    formDataUser.append('ds_email', email);
    formDataUser.append('nu_cpf', cpf);
    formDataUser.append('nu_telefone', phone);
    formDataUser.append('ds_senha_hash', password);
    formDataUser.append('id_endereco', `${idEndereco}`);

    try {
      const resultado = await axios.post('http://127.0.0.1:8000/api/usuarios/', formDataUser);
      if (resultado.data.status !== 200) return alert("Erro ao cadastrar usuario!");
      setIdEndereco(0);
    } catch {
      return alert("Erro ao cadastrar usuario!");
    }

    alert("Conta criada com sucesso!");
    navigate("/login");
  };

  return (
    <Container>
      <Logo src="/logo.png" alt="Logo" />
      <FormWrapper>
        <Title>Cadastro</Title>
        <Subtitle>Bem vindo à FacePass</Subtitle>

        {step === 1 && (
          <>
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="CPF"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <Input
              label="Telefone"
              placeholder="Digite seu telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
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
            <Input
              label="CEP"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <Input
              label="Longradouro"
              placeholder="Digite seu longradouro"
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
            />
            <Input
              label="Numero"
              placeholder="Digite seu numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <Input
              label="Complemento"
              placeholder="Digite seu complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            <Input
              label="Bairro"
              placeholder="Digite seu bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
            <Input
              label="Cidade"
              placeholder="Digite sua cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <Input
              label="Estado"
              placeholder="Digite seu estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
            <Input
              label="País"
              placeholder="Digite seu país"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
            <ButtonsContainer>
              <Button text="Voltar" onClick={prevStep} />
              <Button text="Continuar" onClick={nextStep} />
            </ButtonsContainer>
          </>
        )}

        {step === 3 && (
          <>
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonsContainer>
              <Button text="Voltar" onClick={prevStep} />
              <Button text="Criar Conta" onClick={handleRegister} />{" "}
              {/* <-- BOTÃO FINAL */}
            </ButtonsContainer>
          </>
        )}
      </FormWrapper>
    </Container>
  );
};

export default Register;
