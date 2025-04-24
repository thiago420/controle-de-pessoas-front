import React, { useState } from 'react';

interface Relatorio {
  id: string;
  dataInicio: string;
  dataFim: string;
  tentativas: number;
  sucessos: number;
  naoIdentificados: number;
}

export default function Relatorios() {
  const todosRelatorios: Relatorio[] = [
    { id: '00365', dataInicio: '2025-04-25', dataFim: '2025-04-25', tentativas: 1873, sucessos: 1800, naoIdentificados: 73 },
    { id: '00364', dataInicio: '2025-04-24', dataFim: '2025-04-24', tentativas: 1200, sucessos: 1150, naoIdentificados: 50 },
    { id: '00363', dataInicio: '2025-04-23', dataFim: '2025-04-23', tentativas: 980, sucessos: 930, naoIdentificados: 50 },
    // Adicione mais relatórios conforme necessário
  ];

  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [buscaId, setBuscaId] = useState('');

  const relatoriosFiltrados = todosRelatorios.filter((r) =>
    r.id.includes(buscaId)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cabeçalho */}
      <div className="bg-black text-white p-4 flex justify-between items-center">
        <div className="text-xl font-semibold">Relatórios</div>
        <div className="text-sm">Administrador</div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <h1 className="text-lg font-semibold mb-4">Dia: 2025-04-25</h1>

        {/* Botão de filtro */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setMostrarFiltros(!mostrarFiltros)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            {mostrarFiltros ? 'Ocultar Filtros' : 'Filtrar'}
          </button>
        </div>

        {/* Seção de filtros */}
        {mostrarFiltros && (
          <div className="mb-4 bg-white p-4 rounded shadow">
            <label className="block text-sm font-medium mb-1">
              Buscar por ID
            </label>
            <input
              type="text"
              value={buscaId}
              onChange={(e) => setBuscaId(e.target.value)}
              className="border px-3 py-2 rounded w-full"
              placeholder="Ex: 00365"
            />
          </div>
        )}

        {/* Tabela */}
        <table className="w-full table-auto border-collapse bg-white shadow-md">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">DATA INICIO</th>
              <th className="p-2">DATA FIM</th>
              <th className="p-2">TENTATIVAS</th>
              <th className="p-2">SUCESSOS</th>
              <th className="p-2">NÃO IDENTIFICADOS</th>
              <th className="p-2">+</th>
            </tr>
          </thead>
          <tbody>
            {relatoriosFiltrados.length > 0 ? (
              relatoriosFiltrados.map((r) => (
                <tr key={r.id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{r.id}</td>
                  <td className="p-2">{r.dataInicio}</td>
                  <td className="p-2">{r.dataFim}</td>
                  <td className="p-2">{r.tentativas}</td>
                  <td className="p-2">{r.sucessos}</td>
                  <td className="p-2">{r.naoIdentificados}</td>
                  <td className="p-2 text-center">+</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center p-4 text-gray-500">
                  Nenhum resultado encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
