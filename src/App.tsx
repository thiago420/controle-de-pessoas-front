import { Routes, Route } from 'react-router-dom';
import Camera from './pages/Camera';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Controle de Entrada de Pessoas</h1>} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </>
  )
}

export default App