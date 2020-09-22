import styled from "styled-components";

export const Container = styled.div`
	grid-area: CO;

	background-color: ${props => props.theme.colors.background};
	padding: 30px 60px;

	display: flex;
	flex-direction: column;

	overflow-y: auto;
	overflow-x: hidden;
`;
