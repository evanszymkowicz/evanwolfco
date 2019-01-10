import styled from 'styled-components';
import { Red } from './theme/variables';

export const ImageButton = styled.div`
	cursor: pointer;
	overflow: hidden;
	display: inline-block;

	transition: transform 3
	&:hover {
		& > img {
			transform: scale(1.3);
		}
	}
`;

export const Index = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	h1 {
		font-size: 3em;
		margin: 0;
		font-weight: bold;
		background-color: ${red};
		opacity: 0.5;
		transform: translateY(20%);

	}
`;
