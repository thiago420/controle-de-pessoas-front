import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Camera from './pages/Camera';
import Login from './pages/Login';
import Register from './pages/Register';
import UserManagement from './pages/Administrador/UserManagement';
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha';
import EmailEnviado from './pages/RecuperarSenha/EmailEnviado';
import Relatorios from './pages/Administrador/relatorio';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Controle de Entrada de Pessoas</h1>} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/email-enviado" element={<EmailEnviado />} />
        <Route path="/relatorio" element={<Relatorios />} />
        <Route path="/relatorio-detalhado" element={<Relatorios />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App