import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditarUsuario() {
  const navigate = useNavigate();

  const handleSalvar = () => {
    alert('Conta atualizada com sucesso!');
    navigate(-1);
  };

  const handleExcluirConta = () => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir a conta?');
    if (confirmacao) {
      alert('Conta excluída com sucesso!');
      navigate('/');
    }
  };

  return (
    <div>
      <header>
        <h2>Editar Usuário</h2>
      </header>

      <main>
        <img src="https://via.placeholder.com/100" alt="Foto do usuário" />

        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input placeholder="Número celular" />
        <input placeholder="CPF" />

        <button onClick={() => navigate('/editar-endereco')}>
          Alterar endereço
        </button>

        <div>
          <button onClick={handleSalvar}>SALVAR</button>
          <button onClick={() => navigate(-1)}>CANCELAR</button>
        </div>

        <button onClick={handleExcluirConta}>EXCLUIR CONTA</button>
      </main>
    </div>
  );
}
