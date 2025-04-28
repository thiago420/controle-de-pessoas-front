import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container, Header, MenuButton, AdminLabel,
  Sidebar, SidebarItem, Main, MenuCard, CardTitle, CardSubtitle
} from './styles'; // import do novo styles.ts acima

type MenuItem = {
  titulo: string;
  subtitulo: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { titulo: "Relatórios Diário", subtitulo: "Listar relatório detalhado do dia", path: "/relatorio-detalhado" },
  { titulo: "Relatórios", subtitulo: "Listar relatórios", path: "/relatorio" },
  { titulo: "Alertas", subtitulo: "Listar alertas", path: "/alerta" },
];

const MenuPrincipal: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Container>
      <Sidebar open={sidebarOpen}>
        {menuItems.map((item, index) => (
          <SidebarItem key={index} onClick={() => navigate(item.path)}>
            {item.titulo}
          </SidebarItem>
        ))}
      </Sidebar>

      <Header>
        <MenuButton onClick={() => setSidebarOpen(!sidebarOpen)}>☰</MenuButton>
        <AdminLabel>Administrador</AdminLabel>
      </Header>

      <Main>
        {menuItems.map((item, index) => (
          <MenuCard key={index} onClick={() => navigate(item.path)}>
            <CardTitle>{item.titulo}</CardTitle>
            <CardSubtitle>{item.subtitulo}</CardSubtitle>
          </MenuCard>
        ))}
      </Main>
    </Container>
  );
};

export default MenuPrincipal;
