/* eslint-disable @typescript-eslint/no-explicit-any */
// Index.tsx
import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Alertas: React.FC = () => {
  const navigate = useNavigate();
  const [filtrosAtivos, setFiltrosAtivos] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [alertas, setAlertas] = useState<any>(null);

 useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(`http://127.0.0.1:porta/api/alertas/empresa/?empresa_id=${localStorage.getItem('idEmpresa')}/`);
    setAlertas(response.data);
  }
  fetchData();
 }, [])
 

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
            {alertas.map((alerta: any) => (
              <TableRow key={alerta.id}>
                <TableCell>{alerta.id}</TableCell>
                <TableCell>{alerta.tp_alerta}</TableCell>
                <TableCell>{alerta.js_mensagem}</TableCell>
                <TableCell>{alerta.dt_criado}</TableCell>
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
