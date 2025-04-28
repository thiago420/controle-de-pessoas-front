import styled from "styled-components";

export const Header = styled.header`
  display: flex;
	flex-direction: row;
  justify-content: space-between;
	align-items: center;
	padding: 30px 35px;
	width: 100%;
	background-color: #0B1321;
	font-family: 'Inter';

	button {
		color: #fff;
		border: none;
		border-radius: 5px;
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
	}

	button.login {
		background-color: #808080;
	}

	button.register {
		background-color: #454545;
	}

	span {
		color: #fff;
		font-size: 1.4rem;
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	padding: 20px 100px;
	font-family: 'Inter';
	color: #ffffff;
	background-color:rgb(0, 44, 88);
`;

export const Grid1 = styled.div`	
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 200px 0;
  
  gap: 8px;
    
	.div1 {
		display: flex;
		flex-direction: column;
		grid-column: span 2 / span 2;

		h1 {
			font-size: 5rem;
		}

		span {
			font-size: 2rem;
			width: 60%;
		}
	}

	.div2 {
	  grid-row: span 2 / span 2;
	  grid-column-start: 3;
	}
`;

export const Grid2 = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 30px;

	.div2, .div3, .div4, .div5 {
		display: flex;
		flex-direction: column;
		width: 70%;
	}

	.div1 {
		grid-column: span 2 / span 2;
	}

	.div2 {
		grid-row-start: 2;
	}

	.div3 {
		grid-row-start: 2;
	}

	.div4 {
		grid-row-start: 3;
	}

	.div5 {
		grid-row-start: 3;
	}
`;

export const Grid3 = styled.div`
	display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
	margin: 0 10vw;

	.card {
		display: flex;
		flex-direction: column;
		color: #000000;
		background-color:rgb(255, 255, 255);
		border-radius: 15px;
		gap: 30px;
		padding: 15px;

		div {
			display: flex;
			flex-direction: row;
		}

		div.links {
			display: flex;
			flex-direction: row;
			gap: 10px;

			a {
				all: unset;
				cursor: pointer;
			}
		}

		div.pessoa {
			display: flex;
			gap: 20px;
			
			img {
				border-radius: 50%;
				height: 50px;
			}
		}

		div.nome {
			display: flex;
			flex-direction: column;
		}
	}     
`;

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
  	gap: 20px;
	padding: 30px 100px;
	width: 100%;
	background-color: #413838;
	color: #fff;
	font-family: 'Inter';

	div {
		display: flex;
		flex-direction: column;
	}
`;