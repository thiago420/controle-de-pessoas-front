import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 



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
  const navigate = useNavigate(); // ⬅️ Inicializa o hook

  const [nomeFiltro, setNomeFiltro] = useState("");
  const [acessoFiltro, setAcessoFiltro] = useState("");

  const registrosFiltrados = registrosMock.filter((registro) => {
    const nomeMatch = registro.nome.toLowerCase().includes(nomeFiltro.toLowerCase());
    const acessoMatch = acessoFiltro === "" || registro.acesso === acessoFiltro;
    return nomeMatch && acessoMatch;
  });

  return (
    <div>
      <header style={{ background: '#0b0e1b', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Relatório Detalhado</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/menu-administrador')}>← Voltar para Menu Administrador</button>
          <span>Administrador</span>
        </div>
      </header>

      <section>
        <h2>Dia: 2025-04-25</h2>

        <div>
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
        </div>
      </section>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Dt Entrada</th>
            <th>Dt Saída</th>
            <th>Acesso</th>
            <th>Ver Foto</th>
          </tr>
        </thead>
        <tbody>
          {registrosFiltrados.map((registro, index) => (
            <tr key={index}>
              <td>{registro.id}</td>
              <td>{registro.nome}</td>
              <td>{registro.dtEntrada}</td>
              <td>{registro.dtSaida}</td>
              <td>{registro.acesso}</td>
              <td><button>Foto</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RelatorioDetalhado;
