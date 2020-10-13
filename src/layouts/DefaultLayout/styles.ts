import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const ContentWithSidebar = styled.div`
	display: flex;
	flex: 1;
	margin-top: 70px;
`;

export const Content = styled.div`
	margin-left: 70px;
	flex: 1;
	background-color: ${props => props.theme.colors.background};
	padding: 30px 60px;

	display: flex;
	flex-direction: column;

	overflow-y: auto;
	overflow-x: hidden;
`;
