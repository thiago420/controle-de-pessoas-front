import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container, Header, HeaderLeft, HeaderRight, Content,
  Filters, Table, Thead, Tbody, Th, Td, FotoButton
} from './styles'; // usa o styles.ts acima

type Registro = {
  id: string;
  nome: string;
  dtEntrada: string;
  dtSaida: string;
  acesso: string;
};

const registrosMock: Registro[] = [
  { id: "01", nome: "MARIA DE SOUZA PINTO GERMANO", dtEntrada: "2025-05-12 07:40", dtSaida: "2025-05-12 18:30", acesso: "PERMITIDO" },
  { id: "04", nome: "ARISTÓTALES DE PLATÃO", dtEntrada: "2025-05-12 07:40", dtSaida: "2025-05-12 18:30", acesso: "PERMITIDO" },
  { id: "12", nome: "REMI TESSARI", dtEntrada: "2025-05-12 07:40", dtSaida: "2025-05-12 18:30", acesso: "PERMITIDO" },
  { id: "02", nome: "USUÁRIO NÃO IDENTIFICADO", dtEntrada: "2025-05-12 08:20", dtSaida: "", acesso: "NEGADO" },
  { id: "70", nome: "AUGUSTO FERREIRA", dtEntrada: "2025-05-12 07:40", dtSaida: "2025-05-12 18:30", acesso: "PERMITIDO" },
  { id: "08", nome: "FERNANDINHO MATADO", dtEntrada: "2025-05-12 11:20", dtSaida: "", acesso: "NEGADO" }
];

const RelatorioDetalhado: React.FC = () => {
  const navigate = useNavigate();

  const [nomeFiltro, setNomeFiltro] = useState("");
  const [acessoFiltro, setAcessoFiltro] = useState("");

  const registrosFiltrados = registrosMock.filter((registro) => {
    const nomeMatch = registro.nome.toLowerCase().includes(nomeFiltro.toLowerCase());
    const acessoMatch = acessoFiltro === "" || registro.acesso === acessoFiltro;
    return nomeMatch && acessoMatch;
  });

  return (
    <Container>
      <Header>
        <HeaderLeft>Relatório Detalhado</HeaderLeft>
        <HeaderRight>
          <button onClick={() => navigate('/menu-administrador')}>← Menu</button>
          <span>Administrador</span>
        </HeaderRight>
      </Header>

      <Content>
        <h2>Dia: 2025-04-25</h2>

        <Filters>
          <input
            type="text"
            placeholder="Filtrar por nome"
            value={nomeFiltro}
            onChange={(e) => setNomeFiltro(e.target.value)}
          />
          <select value={acessoFiltro} onChange={(e) => setAcessoFiltro(e.target.value)}>
            <option value="">Todos</option>
            <option value="PERMITIDO">Permitido</option>
            <option value="NEGADO">Negado</option>
          </select>
        </Filters>

        <Table>
          <Thead>
            <tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Dt Entrada</Th>
              <Th>Dt Saída</Th>
              <Th>Acesso</Th>
              <Th>Ver Foto</Th>
            </tr>
          </Thead>
          <Tbody>
            {registrosFiltrados.map((registro, index) => (
              <tr key={index}>
                <Td>{registro.id}</Td>
                <Td>{registro.nome}</Td>
                <Td>{registro.dtEntrada}</Td>
                <Td>{registro.dtSaida}</Td>
                <Td>{registro.acesso}</Td>
                <Td><FotoButton>Foto</FotoButton></Td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default RelatorioDetalhado;
