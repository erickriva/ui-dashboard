import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: 70px auto;
	grid-template-rows: 70px auto;
	grid-template-areas:
		"HE HE"
		"SI CO"
		"SI CO";
	height: 100vh;
	overflow: hidden;
`;
