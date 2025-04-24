import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailEnviado: React.FC = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Recupere sua senha</h2>
      <p>Enviamos um e-mail com instruções para redefinir sua senha.</p>
      <button onClick={handleVoltar}>Voltar para login</button>
    </div>
  );
};

export default EmailEnviado;
