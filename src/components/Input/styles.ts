import styled from "styled-components";

export const Container = styled.div`
	width: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Label = styled.label`
	font-family: 'Arial', sans-serif;
	font-weight: bold;
	font-size: 16px;
	color: #000;
`;

export const InputStyled = styled.input`
  width: 100%;
	height: 40px;
	border-radius: 15px;
	border: 1px solid #ccc;
	padding: 10px;
	font-size: 16px;
	color: #333;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
