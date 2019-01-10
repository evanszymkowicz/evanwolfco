import styled from 'styled-components';

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
