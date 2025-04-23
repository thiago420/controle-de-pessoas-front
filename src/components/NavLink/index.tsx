import { Container } from './styles';
import { NavLinkProps } from 'react-router-dom';
import { NavLinkStyled } from './styles';
import React from 'react';

interface NavLinkProps2 extends NavLinkProps {
  text: string;
}

const NavLink: React.FC<NavLinkProps2> = ({text, ...rest}) => {
	return (
		<Container>
			<NavLinkStyled
				{...rest}
			>{text}</NavLinkStyled>
		</Container>
	)
}

export default NavLink;