// Index.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderActions,
  Button,
  Content,
  Filters,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableButton,
  UserLabel,
} from "./styles";

type Alerta = {
  id: string;
  tipo: string;
  mensagem: string;
  data: string;
};

const alertasMock: Alerta[] = [
  { id: '0010', tipo: 'CHEGADA TARDIA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
  { id: '0009', tipo: 'USUÁRIO ANÔNIMO', mensagem: 'USUÁRIO ANÔNIMO ID: 47, NÃO IDENTIFICADO', data: '2025-05-12 09:30' },
  { id: '0008', tipo: 'TENTATIVA ACESSO NEGADA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
  { id: '0007', tipo: 'TENTATIVA ACESSO NEGADA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
  { id: '0006', tipo: 'TENTATIVA ACESSO NEGADA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
  { id: '0005', tipo: 'TENTATIVA ACESSO NEGADA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
  { id: '0004', tipo: 'TENTATIVA ACESSO NEGADA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
  { id: '0003', tipo: 'TENTATIVA ACESSO NEGADA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
  { id: '0002', tipo: 'TENTATIVA ACESSO NEGADA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
  { id: '0001', tipo: 'TENTATIVA ACESSO NEGADA', mensagem: 'USUÁRIO ID: 10, CHEGADA TARDIA, ACESSO NEGADO', data: '2025-05-12 09:30' },
];

const Alertas: React.FC = () => {
  const navigate = useNavigate();
  const [filtrosAtivos, setFiltrosAtivos] = useState(false);

  return (
    <Container>
      <Header>
        <HeaderTitle>Alertas</HeaderTitle>
        <HeaderActions>
          <Button onClick={() => navigate('/menu-administrador')}>← Voltar</Button>
          <UserLabel>Administrador</UserLabel>
        </HeaderActions>
      </Header>

      <Content>
        <Filters>
          <Button onClick={() => setFiltrosAtivos(!filtrosAtivos)}>
            {filtrosAtivos ? 'Ocultar Filtros' : 'Filtros'}
          </Button>
        </Filters>

        <Table>
          <thead>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>TIPO ALERTA</TableHead>
              <TableHead>MENSAGEM</TableHead>
              <TableHead>DATA ALERTA</TableHead>
              <TableHead>AÇÃO</TableHead>
            </TableRow>
          </thead>
          <TableBody>
            {alertasMock.map((alerta) => (
              <TableRow key={alerta.id}>
                <TableCell>{alerta.id}</TableCell>
                <TableCell>{alerta.tipo}</TableCell>
                <TableCell>{alerta.mensagem}</TableCell>
                <TableCell>{alerta.data}</TableCell>
                <TableCell>
                  <TableButton title="Ver detalhes">＋</TableButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Content>
    </Container>
  );
};

export default Alertas;
