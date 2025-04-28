import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f6f8;
`;

export const Header = styled.header`
  background-color: #0d1117;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  background-color: #e2e8f0;
  color: #111827;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cbd5e1;
  }
`;

export const UserLabel = styled.span`
  font-weight: bold;
  font-size: 1rem;
`;

export const Content = styled.main`
  padding: 2rem;
  flex: 1;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid #d1d5db;
  width: 250px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const TableHead = styled.th`
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: left;
  font-size: 0.85rem;
  font-weight: bold;
  color: #333333;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.9rem;
  color: #555555;
`;

export const TableBody = styled.tbody``;

export const TableButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: #0d6efd;
  }
`;

export const FormContainer = styled.div`
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
`;

export const FormButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
