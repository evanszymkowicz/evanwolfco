import React, { Component } from 'react';
import { Container } from './theme/grid';
import { Title } from './AboutMe.style';
import { H2 } from './theme/grid';

class AboutMe extends Component {
	render() {
		return (
			<Container>
				<Title>About Me:</Title>
				<H2 align="right"> I used to write stories, now I write code. </H2>
				<Flex>
				<P align="center"> I
				</Flex>
			</Container>
		);
	}
}

export default AboutMe;
