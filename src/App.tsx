import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Camera from './pages/Camera';
import Login from './pages/Login';
import Register from './pages/Register';
import GerenciarUsuario from './pages/Administrador/GerenciarUsuario';
import RecuperarSenha from './pages/RecuperarSenha/NovaSenha';
import EmailEnviado from './pages/RecuperarSenha/EmailEnviado';
import Relatorios from './pages/Administrador/Relatorio';
import Home from './pages/Home';
import RelatorioDetalhado from './pages/Administrador/RelatorioDetalhado';
import MenuAdministrador from './pages/Administrador/MenuAdministrador';
import Alertas from './pages/Administrador/Alertas/Index';
import Usuario from './pages/Usuario/Usuario';
import EditarUsuario from './pages/Usuario/EditarUsuario';
import EditarEndereco from './pages/Usuario/EditarEndereco';
import NovaSenha from './pages/RecuperarSenha/NovaSenha';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Controle de Entrada de Pessoas</h1>} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gerenciar-usuarios" element={<GerenciarUsuario/>} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/email-enviado" element={<EmailEnviado />} />
        <Route path="/nova-senha" element={<NovaSenha />} />
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