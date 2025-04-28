import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

export const Header = styled.header`
  background-color: #0d1117;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
`;

export const AdminLabel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Sidebar = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: #111827;
  color: #ffffff;
  padding: 2rem 1rem;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1000;
`;

export const SidebarItem = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  text-align: left;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-left: 0;
`;

export const MenuCard = styled.button`
  background-color: #e5e7eb;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  text-align: left;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  &:hover {
    background-color: #d1d5db;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const CardSubtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;
