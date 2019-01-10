import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import { ImageButton } from './Projects.style';
import { Container } from './theme/grid';
import { A } from './theme/types';

class Projects extends Component {
	render() {
		return(
			<Container>
				<h1>npm install --save force-directive chart <a href=""></a></h1>
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
			</Container>
		);
	}
}

export default Projects;
