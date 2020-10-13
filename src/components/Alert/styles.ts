import styled from "styled-components";
import { hex2rgba, lightenOrDarkenColor } from "../../utils/colors";
import { RequireProps } from "../../utils/utilsType";
import { AlertProps } from "./types";

type StyledAlertProps = RequireProps<Pick<AlertProps, "visualType">, "visualType">;

export const StyledTitle = styled.div`
	font-weight: bold;
	font-size: 1.4rem;
	text-transform: uppercase;
`;

export const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledDescription = styled.div``;

export const StyledPopupAlert = styled.div`
	position: fixed;
	z-index: 9999;
	bottom: 16px;
	right: 16px;
	min-width: 320px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const StyledProgressBarCountdown = styled.div`
	position: absolute;
	bottom: -2px;
	left: -2px;
	right: -2px;
	height: 5px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	transition: width 0.2s;
`;

export const StyledContainer = styled.div<StyledAlertProps>`
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 16px;
	border-radius: 4px;
	position: relative;
	background-color: ${props => lightenOrDarkenColor(props.theme.colors[props.visualType], 100)};
	border: 2px solid ${props => lightenOrDarkenColor(props.theme.colors[props.visualType])};
	color: ${props => lightenOrDarkenColor(props.theme.colors[props.visualType], -200)};

	& svg {
		width: 28px;
		height: 28px;
		color: ${props => lightenOrDarkenColor(props.theme.colors[props.visualType], -120)};
	}

	& ${StyledProgressBarCountdown} {
		background-color: ${props => lightenOrDarkenColor(props.theme.colors[props.visualType], -200)};
	}
`;
