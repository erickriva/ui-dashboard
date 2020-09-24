import styled from "styled-components";

export const Container = styled.div`
	grid-area: HE;

	background-color: ${props => props.theme.colors.accent};
	box-shadow: 0px 6px 6px 0px rgba(50, 50, 50, 0.08);
	z-index: 2;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
`;

export const Contact = styled.div`
	display: flex;
	align-items: center;
`;

export const ContactNameAbbr = styled.div`
	padding: 8px;
	background-color: rgba(33, 101, 199, 0.15);
	border-radius: 6px;
	color: ${props => props.theme.colors.default};
`;

export const ContactName = styled.div`
	margin-left: 12px;
	color: ${props => props.theme.commonColors.gray};
`;

export const UserOptions = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
`;

export const IconsContainer = styled.div`
	/* border-left: 2px solid ${props => props.theme.colors.border}; */
	border-right: 2px solid ${props => props.theme.colors.border};

	margin: 0 16px;

	display: flex;
	flex-direction: row;
	height: 100%;

	align-items: center;
	padding: 0 12px;
`;

export const NotificationBubble = styled.div``;

export const MenuItem = styled.div`
	padding: 0 12px;
	cursor: pointer;
	position: relative;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

	& ${NotificationBubble} {
		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		width: 14px;
		height: 14px;
		top: 4px;
		right: 8px;
		border-radius: 50%;
		background: red;
		color: white;

		font-size: 1.1rem;
		font-weight: bold;
	}

	&:hover {
		& > svg {
			color: ${props => props.theme.colors.textDark};
		}
	}

	& > svg {
		width: 20px;
		height: 20px;
		color: ${props => props.theme.commonColors.gray};
	}
`;

export const UserData = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	& > svg {
		color: ${props => props.theme.commonColors.gray};
		width: 12px;
		height: 12px;
	}
`;

export const UserPicture = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	border: 2px solid ${props => props.theme.commonColors.gray};
`;

export const UserName = styled.div`
	margin: 0 8px;
	color: ${props => props.theme.commonColors.gray};
`;
