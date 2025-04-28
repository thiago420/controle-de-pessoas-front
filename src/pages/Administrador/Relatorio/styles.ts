// styles.ts
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

export const Title = styled.h2`
  font-size: 1.5rem;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #58a6ff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #1f6feb;
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

export const DayTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const FilterButton = styled.button`
  background-color: #e2e8f0;
  color: #111827;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cbd5e1;
  }
`;

export const FilterBox = styled.div`
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
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

export const PlusButton = styled.td`
  text-align: center;
  font-size: 1.5rem;
  color: #0d6efd;
  cursor: pointer;

  &:hover {
    color: #084298;
  }
`;

export const EmptyMessage = styled.td`
  text-align: center;
  padding: 2rem;
  color: #9ca3af;
  font-size: 1rem;
`;
