import styled from "styled-components";

export const MenuItemName = styled.div`
	margin-top: 2px;
	font-size: 1.4rem;
	color: ${props => props.theme.colors.default};
	display: none;
`;

export const Container = styled.div`
	grid-area: SI;

	background-color: ${props => props.theme.colors.accent};
	z-index: 1;
`;

export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px 0;
`;

export const MenuGroup = styled.div`
	padding: 8px 0;
	display: flex;
	flex-direction: column;
	width: 100%;
`;

interface MenuItemProps {
	active?: boolean;
}
export const MenuItem = styled.div<MenuItemProps>`
	display: flex;
	flex-direction: column;

	width: 100%;
	padding: 16px 0;
	cursor: pointer;
	border-right: 2px solid transparent;
	text-transform: lowercase;

	&:hover {
		& > svg {
			color: ${props => props.theme.colors.default};
		}
	}

	&.active {
		border-right-color: ${props => props.theme.colors.default};
		background-color: rgba(33, 101, 199, 0.07);

		& > svg {
			color: ${props => props.theme.colors.default};
		}

		& ${MenuItemName} {
			display: block;
		}
	}

	justify-content: center;
	align-items: center;

	& > svg {
		color: #999999;
		width: 20px;
		height: 20px;
	}
`;
