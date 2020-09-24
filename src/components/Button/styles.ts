import styled from "styled-components";
import { ButtonProps } from "./types";
import { hex2rgba, lightenOrDarkenColor } from "../../utils/colors";

export const LoadingIcon = styled.div``;
export const Content = styled.div``;
export const Label = styled.div``;

export const Container = styled.button<Omit<ButtonProps, "children">>`
	background-color: ${props =>
		props.visualType ? props.theme.colors[props.visualType] : props.theme.colors.default};
	color: #ffffff;
	cursor: pointer;
	font-weight: bold;

	border: 2px solid transparent;
	box-shadow: 0px 0px 10px -1px ${props => hex2rgba(props.theme.colors.border, 0.2)};

	padding: 0 22px;
	height: 40px;

	border-radius: 4px;
	transition: all 0.2s;
	position: relative;

	&:hover {
		background-color: ${props =>
			lightenOrDarkenColor(props.visualType ? props.theme.colors[props.visualType] : props.theme.colors.default)};
	}

	&.outline {
		color: ${props => (props.visualType ? props.theme.colors[props.visualType] : props.theme.colors.default)};
		background-color: transparent;
		border-color: ${props =>
			lightenOrDarkenColor(props.visualType ? props.theme.colors[props.visualType] : props.theme.colors.default)};

		&:hover {
			color: ${props =>
				lightenOrDarkenColor(
					props.visualType ? props.theme.colors[props.visualType] : props.theme.colors.default
				)};
		}
	}

	&.onlyIcon {
		width: 40px;
		border-radius: 50%;
		padding: 0px;

		& ${Content} {
			& svg {
				width: 18px;
				height: 18px;
			}
		}
	}

	& ${Content} {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2px;
		text-transform: uppercase;

		& svg {
			width: 24px;
			height: 24px;
		}

		visibility: ${props => (props.isLoading ? "hidden" : "visible")};
	}

	& ${LoadingIcon} {
		position: absolute;

		display: flex;
		justify-content: center;
		align-items: center;
		visibility: ${props => (props.isLoading ? "visible" : "hidden")};

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 40px;

		& > svg {
			width: 30px;
			height: 30px;
			animation: spin 4s infinite linear;
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
`;
