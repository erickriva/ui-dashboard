import styled from "styled-components";

export const Input = styled.input`
	height: 0;
	width: 0;
	visibility: hidden;
`;

interface LabelProps {
	value: boolean;
}
export const Label = styled.label<LabelProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 35px;
	height: 19px;
	background-color: ${props => (props.value ? props.theme.colors.default : "#888888")};
	flex-shrink: 0;
	border-radius: 100px;
	position: relative;
	transition: background-color 0.2s;
`;

export const Button = styled.span`
	content: "";
	position: absolute;
	top: 2px;
	left: 2px;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	transition: all 0.2s;
	background: #fff;
	box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.3);

	${Input}:checked + ${Label} & {
		left: calc(100% - 2px);
		transform: translateX(-100%);
	}
`;
