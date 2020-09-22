import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.9);
	padding: 32px;

	@media (max-width: 768px) {
		padding: 0;
	}
`;

export const Content = styled.div`
	min-width: 30%;

	@media (max-width: 768px) {
		flex: 1;
		width: 100%;
		height: 100%;
	}
`;
