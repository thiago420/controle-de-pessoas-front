import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditarEndereco() {
  const navigate = useNavigate();

  const handleSalvar = () => {
    alert('Endereço atualizado com sucesso!');
    navigate(-1); // Volta para a tela anterior
  };

  return (
    <div>
      <header>
        <h2>Editar Endereço</h2>
      </header>

      <main>
        <img src="https://via.placeholder.com/100" alt="Foto do usuário" />

        <input placeholder="CEP" />
        <input placeholder="Rua / Avenida" />
        <input placeholder="Número" />
        <input placeholder="Bairro" />
        <input placeholder="Cidade" />
        <input placeholder="Estado" />
        <input placeholder="Complemento" />

        <div>
          <button onClick={handleSalvar}>SALVAR</button>
          <button onClick={() => navigate(-1)}>CANCELAR</button>
        </div>
      </main>
    </div>
  );
}
