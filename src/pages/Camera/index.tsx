import Webcam from '../../components/Webcam';
import { TbFaceId } from "react-icons/tb";

import { Container, Body, Title } from './styles';

import React from 'react';

const Camera = () => {
	return (
		<>
			<Container>
				<Body>
					<Title>
						<TbFaceId size={40} color="#000" />
						<h1>Indentificação Facial</h1>
					</Title>
					<Webcam />
				</Body>
			</Container>
		</>
	)
}

export default Camera