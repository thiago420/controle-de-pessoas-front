import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  Title,
  HeaderActions,
  BackButton,
  UserLabel,
  Content,
  DayTitle,
  Filters,
  FilterButton,
  FilterBox,
  Label,
  Input,
  Table,
  TableHead,
  TableRow,
  TableCell,
  PlusButton,
  EmptyMessage,
} from './styles'; // Ajuste o caminho conforme seu projeto

interface Relatorio {
  id: string;
  dataInicio: string;
  dataFim: string;
  tentativas: number;
  sucessos: number;
  naoIdentificados: number;
}

export default function Relatorios() {
  const navigate = useNavigate();

  const todosRelatorios: Relatorio[] = [
    { id: '00365', dataInicio: '2025-04-25', dataFim: '2025-04-25', tentativas: 1873, sucessos: 1800, naoIdentificados: 73 },
    { id: '00364', dataInicio: '2025-04-24', dataFim: '2025-04-24', tentativas: 1200, sucessos: 1150, naoIdentificados: 50 },
    { id: '00363', dataInicio: '2025-04-23', dataFim: '2025-04-23', tentativas: 980, sucessos: 930, naoIdentificados: 50 },
  ];

  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [buscaId, setBuscaId] = useState('');

  const relatoriosFiltrados = todosRelatorios.filter((r) =>
    r.id.includes(buscaId)
  );

  return (
    <Container>
      <Header>
        <Title>Relatórios</Title>
        <HeaderActions>
          <BackButton onClick={() => navigate('/menu-administrador')}>← Voltar</BackButton>
          <UserLabel>Administrador</UserLabel>
        </HeaderActions>
      </Header>

      <Content>
        <DayTitle>Dia: 2025-04-25</DayTitle>

        <Filters>
          <FilterButton onClick={() => setMostrarFiltros(!mostrarFiltros)}>
            {mostrarFiltros ? 'Ocultar Filtros' : 'Filtros'}
          </FilterButton>
        </Filters>

        {mostrarFiltros && (
          <FilterBox>
            <Label>Buscar por ID</Label>
            <Input
              type="text"
              value={buscaId}
              onChange={(e) => setBuscaId(e.target.value)}
              placeholder="Ex: 00365"
            />
          </FilterBox>
        )}

        <Table>
          <thead>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>DATA INICIO</TableHead>
              <TableHead>DATA FIM</TableHead>
              <TableHead>TENTATIVAS</TableHead>
              <TableHead>SUCESSOS</TableHead>
              <TableHead>USUÁRIOS NÃO IDENTIFICADOS</TableHead>
              <TableHead>+</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {relatoriosFiltrados.length > 0 ? (
              relatoriosFiltrados.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.id}</TableCell>
                  <TableCell>{r.dataInicio}</TableCell>
                  <TableCell>{r.dataFim}</TableCell>
                  <TableCell>{r.tentativas}</TableCell>
                  <TableCell>{r.sucessos}</TableCell>
                  <TableCell>{r.naoIdentificados}</TableCell>
                  <PlusButton>＋</PlusButton>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <EmptyMessage colSpan={7}>
                  Nenhum resultado encontrado.
                </EmptyMessage>
              </TableRow>
            )}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
