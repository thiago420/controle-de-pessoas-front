import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
     <header style={{ background: '#0b0e1b', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Alertas</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/menu-administrador')}>← Voltar para Menu Administrador</button>
          <span>Administrador</span>
        </div>
      </header>

      <div>
        <button onClick={() => setFiltrosAtivos(!filtrosAtivos)}>
          {filtrosAtivos ? 'Ocultar Filtros' : 'Filtros'}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TIPO ALERTA</th>
            <th>MENSAGEM</th>
            <th>DATA ALERTA</th>
            <th>AÇÃO</th>
          </tr>
        </thead>
        <tbody>
          {alertasMock.map((alerta) => (
            <tr key={alerta.id}>
              <td>{alerta.id}</td>
              <td>{alerta.tipo}</td>
              <td>{alerta.mensagem}</td>
              <td>{alerta.data}</td>
              <td><button>＋</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alertas;
