import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton, Index, ImageContainer, Title } from './Projects.style';
import { Container, Relative } from './theme/grid';
import { A } from './theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
	render() {
		return(
			<Container>
				<Relative marginTop="100px" marginBottom="100px">
					<Index>
						<Title>JavaScript Projects</Title>
						<Relative marginBottom="50px" marginTop="">
					</Index>
						<h1>npm install --save force-directive chart <a href=""></a></h1>
				</Relative>
				<Flex justify={'center'} marginBottom="4em">
					<Zoomy
							imageUrl={require('.assets/sports4.jpg')} //Zoomy functionality
							renderThumbnail={({ showImage }) =>
						<ImageButton onClick={showImage}>
							<img
							src={require('./assets/sports4_thumbnail.png')}
							alt="sports"/>
						</ImageButton>
						style: {
							width: '100wv',
							height: 'auto'
							}
						}}
					/>
				<Flex>
			</Container>
		);
	}
}

export default Projects;
