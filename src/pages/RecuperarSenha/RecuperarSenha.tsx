import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecuperarSenha: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você faria a chamada à API
    console.log('Email para recuperação:', email);
    navigate('/email-enviado');
  };

  return (
    <div>
      <h2>Recupere sua senha</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RecuperarSenha;
