import styled from "styled-components";
import Flex from "../../../components/Flex";
import { lightenOrDarkenColor } from "../../../utils/colors";

export const Container = styled(Flex)`
	padding: 16px;
`;

export const TitleContainer = styled.div``;

export const Title = styled.div`
	font-size: 2rem;
`;

export const Subtitle = styled.div`
	color: #888888;
	font-size: 1.3rem;
	text-transform: uppercase;
`;

export const OptionsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Option = styled.div`
	display: flex;
	flex: 1;
	gap: 32px;
	justify-content: space-between;
	padding: 12px 16px;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s;
	margin: 0 -12px;

	&:hover {
		background-color: ${props => lightenOrDarkenColor(props.theme.colors.accent)};
	}
`;

export const OptionDescription = styled.div`
	display: flex;
	align-items: center;

	font-size: 1.4rem;
	text-transform: uppercase;
`;
