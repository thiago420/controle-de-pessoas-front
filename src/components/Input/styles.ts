import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Label = styled.label`
	font-family: 'Arial', sans-serif;
	font-weight: bold;
	font-size: 0.9rem;
	color: #000;
	margin-bottom: 10px;
`;

export const InputStyled = styled.input`
  width: 100%;
	border-radius: 8px;
	border: 1px solid #ccc;
	padding: 15px 20px;
	font-size: 16px;
	color: #333;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
