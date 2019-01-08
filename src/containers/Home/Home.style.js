import styled from 'styled-components';

export const Image = styled.image`
	width: 100%;
`;

export const HeroImage = styled.div`
	height: 100vh;
	background-image: ${require('../../assets/hero.jpg')}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;

	text-align: center;
	color: white;

	font-size: 2em;

	h1 {
		margin-bottom: 0;
	}
`;

export const revealP = styled.p``
