import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Main, Section, Title, Info, Button, ButtonGroup, ButtonHeader } from './styles';
import axios from 'axios';

export default function Usuario() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/ususarios/${localStorage.getItem('idUsuario')}/`);

      setUser(response.data);
    } 

    fetchData();
  }, [])
  

  return (
    <Container>
      <Header>
        <h2>Usuário</h2>
        {localStorage.getItem('permissao') === 'admin' && <ButtonHeader onClick={() => navigate('/menu-administrador')}>Acessar Admin</ButtonHeader>}
        <ButtonHeader onClick={() => navigate('/login')}>Voltar</ButtonHeader>
      </Header>

      <Main>
        <Section>
          <Title>Seus dados pessoais</Title>
          <Info>Nome: {user.nm_nome}</Info>
          <Info>E-mail: {user. ds_email}</Info>
          <Info>CPF: {user.nu_cpf}</Info>
          <Info>Telefone: {user.nu_telefone}</Info>
        </Section>

        <ButtonGroup>
          <Button onClick={() => navigate('/ver-empresas')}>
            Ver empresas
          </Button>
        </ButtonGroup>
      </Main>
    </Container>
  );
}
