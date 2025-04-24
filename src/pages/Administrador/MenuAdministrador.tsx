import React from "react";
import { useNavigate } from "react-router-dom"; 

type MenuItem = {
  titulo: string;
  subtitulo: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { titulo: "Gerenciar Usuários", subtitulo: "Listar e modificar usuários", path: "/user-management" },
  { titulo: "Relatórios Detalhados", subtitulo: "Listar relatórios detalhados", path: "/relatorio-detalhado" },
  { titulo: "Relatórios", subtitulo: "Listar relatórios", path: "/relatorio" },
  { titulo: "Alertas", subtitulo: "Listar alertas", path: "/alerta" },
];

const MenuPrincipal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <button>☰</button>
        <div>Administrador</div>
      </header>

      <main>
        {menuItems.map((item, index) => (
          <button key={index} onClick={() => navigate(item.path)}>
            <div>
              <strong>{item.titulo}</strong>
              <div>{item.subtitulo}</div>
            </div>
          </button>
        ))}
      </main>
    </div>
  );
};

export default MenuPrincipal;
