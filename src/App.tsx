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
import RelatorioDetalhado from './pages/Administrador/RelatorioDetalhado';
import MenuAdministrador from './pages/Administrador/MenuAdministrador';
import Alertas from './pages/Administrador/Alertas';
import Usuario from './pages/Usuario/Usuario';
import EditarUsuario from './pages/Usuario/EditarUsuario';
import EditarEndereco from './pages/Usuario/EditarEndereco';
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
        <Route path="/relatorio-detalhado" element={<RelatorioDetalhado />} />
        <Route path="/alerta" element={<Alertas />} />
        <Route path="/menu-administrador" element={<MenuAdministrador />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/editar-usuario" element={<EditarUsuario />} />
        <Route path="/editar-endereco" element={<EditarEndereco />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App