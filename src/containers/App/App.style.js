import styled from 'styled-components';
import { red } from './theme/variables';

export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 80wv;
	top: 10vh;
	height: 80vh;
	background-image: url(${require('./assets/body-background.png')});
	background-color: red;
	background-size: 80%;
	background-repeat: no-repeat;
	background-position: center;
	z-index: -100;
`
