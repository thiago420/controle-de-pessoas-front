import Webcam from "./components/Webcam"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Controle de Entrada de Pessoas</h1>} />
        <Route path="/webcam" element={<Webcam />} />
      </Routes>
    </>
  )
}

export default App