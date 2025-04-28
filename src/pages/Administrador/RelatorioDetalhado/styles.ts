import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #0d1117;
  color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: #2563eb;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #1d4ed8;
    }
  }
`;

export const Content = styled.main`
  padding: 2rem;
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  input, select {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 1rem;
    background-color: #ffffff;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const Thead = styled.thead`
  background-color: #e5e7eb;
  text-align: left;
`;

export const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f3f4f6;
  }
`;

export const Th = styled.th`
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #374151;
`;

export const Td = styled.td`
  padding: 1rem;
  font-size: 0.9rem;
  color: #4b5563;
`;

export const FotoButton = styled.button`
  background: #10b981;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #059669;
  }
`;
