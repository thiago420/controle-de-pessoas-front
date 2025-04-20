import React, { ButtonHTMLAttributes } from 'react';
import { Container, ButtonStyled } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonProps> = ({text, ...rest}) => {
	return (
		<Container>
			<ButtonStyled
				type="button"
				{...rest}			
			>{text}</ButtonStyled>
		</Container>
	)
}

export default Button;