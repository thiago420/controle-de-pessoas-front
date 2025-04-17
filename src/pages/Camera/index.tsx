import React from 'react'

import Webcam from '../../components/Webcam'

import { Container, Body } from './styles';

const Camera = () => {
	return (
		<>
			<Container>
				<Body>
					<h1>Camera</h1>
					<Webcam />
				</Body>
			</Container>
		</>
	)
}

export default Camera