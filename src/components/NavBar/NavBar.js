import React, { Component } from 'react';
import { NavContainer, NavItem } from './NavBar.style';
import { hashHistory } from 'react-router';

class <NavBar extends Component {
	render() {
		return (
			<NavContainer>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/projects" Projects</NavItem>
				<NavItem> About Me</NavItem>
			</NavContainer>
		);
	}
}

export default NavBar;
