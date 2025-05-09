import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  height: 100vh;
	width: 100vw;
`;

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f0f0f0;
	padding: 20px;
	border-radius: 20px;
	gap: 20px;

	h1 {
		margin: 0;
		padding: 0;
	}
`;


export const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	h1 {
		font-family: Arial, sans-serif;
	}
`;