// styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f6f8;
`;

export const Header = styled.header`
  background-color: #0d1117;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 1.8rem;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: #2ea043;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #238636;
  }
`;

export const UserLabel = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

export const Filters = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const TableHead = styled.th`
  background-color: #f0f0f0;
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
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
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.9rem;
  color: #555555;
`;

export const TableBody = styled.tbody``;

export const TableButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  color: #0d6efd;
  cursor: pointer;

  &:hover {
    color: #084298;
  }
`;
