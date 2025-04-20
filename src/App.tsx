import { Routes, Route } from 'react-router-dom';
import Camera from './pages/Camera';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Controle de Entrada de Pessoas</h1>} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App