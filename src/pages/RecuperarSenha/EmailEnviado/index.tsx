import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Title,
  Description,
  Form,
  Input,
  Button,
  ButtonGroup,
} from "./styles";
import axios from "axios";

const EmailEnviado: React.FC = () => {
  const [senha, setSenha] = useState("");
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = localStorage.getItem('emailChangeSenha');
    const formData = new FormData();
    formData.append('senha', senha);
    formData.append('email', codigo);
    formData.append('email', email ? email : '');
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/usuarios/resetar-senha/', formData);
      if (response.data.status !== 200) return alert("Algo deu errado!");
    } catch {
      return alert("Algo deu errado!");
    }
    localStorage.setItem('emailChangeSenha', '');
    alert("Senha alterada com sucesso!");
  };

  return (
    <Container>
      <Card>
        <Title>Recupere sua senha</Title>
        <Description>
          Enviamos um código para seu e-mail, confirme o código no campo abaixo junto com a nova senha.
        </Description>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Insira o código enviado"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Crie uma nova senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <ButtonGroup>
            <Button type="button" onClick={() => navigate("/login")}>
              Voltar
            </Button>
            <Button type="submit" primary>
              Trocar senha
            </Button>
          </ButtonGroup>
        </Form>
      </Card>
    </Container>
  );
};

export default EmailEnviado;
