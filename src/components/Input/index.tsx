import React, { InputHTMLAttributes } from 'react';
import { Container, InputStyled, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({label, ...rest}) => {
	return (
		<Container>
			<div style={{ width: '100%', margin: '10px 0' }}>
				<Label>{label}</Label>
			</div>
			<InputStyled
				type="text"
				placeholder="Digite o nome do arquivo"
				{...rest}			
			/>
		</Container>
	)
}

export default Input;