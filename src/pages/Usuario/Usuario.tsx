import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Usuario() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h2>Usuário</h2>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </header>

      <main>
        <section>
          <h3>Seus dados pessoais</h3>
          <p>Nome: Delia Costa</p>
          <p>E-mail: deliacosta@gmail.com</p>
          <p>CPF: 123.456.789-00</p>
          <p>Telefone: +55 (48) 1234-5678</p>
          <p>Sua foto:</p>
          <img src="https://via.placeholder.com/100" alt="Foto do usuário" />
        </section>

        <button onClick={() => navigate('/editar-usuario')}>
          Alterar dados
        </button>
      </main>
    </div>
  );
}
