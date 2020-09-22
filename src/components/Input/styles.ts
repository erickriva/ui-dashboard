import styled from "styled-components";

export const StyledTextInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	font-size: 1.4rem;
	background-color: ${props => props.theme.colors.accent};

	&.disabled {
		background-color: #dadada;
	}
`;

export const StyledTextInputTextArea = styled.textarea`
	z-index: 2;
	padding: 16px;
	min-height: 100px;
	border-radius: 4px;
	background: transparent;
	border: 2px solid ${props => props.theme.colors.border};
	color: ${props => props.theme.colors.textDark};

	&:focus {
		border-color: ${props => props.theme.colors.default};
	}

	&::placeholder {
		color: #888888;
	}

	&.hasSuffix {
		padding-right: 45px;
	}
	&.hasOnlyIcon {
		padding-left: 45px;
	}
	&.hasIconAndPrefix {
		padding-left: 90px;
	}
	&.hasOnlyPrefix {
		padding-left: 45px;
	}
`;

export const StyledTextInputInput = styled.input`
	z-index: 2;
	padding: 16px;
	height: 45px;
	border-radius: 4px;
	background: transparent;
	border: 2px solid ${props => props.theme.colors.border};
	color: ${props => props.theme.colors.textDark};

	&:focus {
		border-color: ${props => props.theme.colors.default};
	}

	&::placeholder {
		color: #888888;
	}

	&.hasSuffix {
		padding-right: 45px;
	}
	&.hasOnlyIcon {
		padding-left: 45px;
	}
	&.hasIconAndPrefix {
		padding-left: 90px;
	}
	&.hasOnlyPrefix {
		padding-left: 45px;
	}

	/* Firefox */
	-moz-appearance: textfield;
	/* Chrome, Safari, Edge, Opera */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&::-webkit-calendar-picker-indicator {
		background: transparent;
		bottom: 0;
		color: transparent;
		cursor: pointer;
		height: auto;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: auto;
	}
`;

export const StyledTextInputIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 1;
	width: 45px;
	height: 45px;

	& svg {
		color: ${props => props.theme.colors.textDark};
	}
`;

export const StyledTextInputPrefix = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 45px;
	height: 45px;
	z-index: 1;
	left: 0;
	font-weight: bold;

	&.hasIcon {
		left: 45px;
	}
`;
export const StyledTextInputSuffix = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 45px;
	height: 45px;
	z-index: 1;
	right: 0;
	font-weight: bold;
`;
