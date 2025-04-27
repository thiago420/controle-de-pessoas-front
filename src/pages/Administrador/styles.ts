import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f7fa;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const Header = styled.header`
  background: #0b0e1b;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const HeaderTitle = styled.h2`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: #e0e0e0;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d5d5d5;
  }
`;

export const Content = styled.main`
  padding: 2rem;
`;

export const Filters = styled.div`
  margin-bottom: 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

export const TableHead = styled.th`
  padding: 1rem;
  text-align: left;
  color: #555;
  font-weight: 600;
  font-size: 0.9rem;
  border-bottom: 2px solid #ccc;
  background-color: #ffffff;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  color: #333;
  font-size: 0.95rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const TableBody = styled.tbody``;

export const TableButton = styled.button`
  background-color: #0b0e1b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background-color: #1f253d;
  }
`;

export const UserLabel = styled.span`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
`;
