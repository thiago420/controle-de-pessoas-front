import React, { InputHTMLAttributes } from 'react';
import { Container, InputStyled, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({label, ...rest}) => {
	return (
		<Container>
			<Label>{label}</Label>
			<InputStyled
				type="text"
				placeholder="Digite o nome do arquivo"
				{...rest}			
			/>
		</Container>
	)
}

export default Input;