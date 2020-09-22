import styled from "styled-components";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { lightenOrDarkenColor } from "../../utils/colors";

export const ProfileData = styled.div`
	display: flex;
	gap: 16px;
	flex-grow: 1;
	flex-shrink: 0;
	padding: 42px;
	position: relative;
	z-index: 0;
	margin-bottom: 30px;
	justify-content: space-between;
	background-color: #111111;
`;

export const ProfileImageAndNameContainer = styled.div`
	display: flex;
	gap: 16px;
`;

export const ProfileDataBackgroundImage = styled.img`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	z-index: -1;
	height: 100%;
	object-fit: cover;
	border-radius: 4px;

	filter: brightness(40%);
`;

export const ProfileImage = styled.img`
	width: 100px;
	height: auto;
	border-radius: 50%;
	background-color: #888888;
	border: 1px solid #888888;
	align-self: center;
`;

export const ProfileNameContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

export const ProfileName = styled.h2`
	color: #ffffff;
	font-weight: normal;
`;

export const ProfileOccupation = styled.div`
	color: #ffffff;
	font-size: 1.3rem;
	text-transform: uppercase;
`;

export const Separator = styled.div`
	border-bottom: 1px solid #888888;
	margin: 8px 0;
`;

export const Number = styled.h3`
	color: #ffffff;
`;

export const Description = styled.div`
	color: #888888;
	font-size: 1.5rem;
`;

export const ProfileButtonsContainer = styled.div`
	right: 42px;
	bottom: 26px;
	position: absolute;
	display: flex;
	gap: 16px;
`;

export const AddFriendButton = styled(Button)`
	background-color: rgba(255, 255, 255, 0.2);

	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
	}
`;

export const FriendsListContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 16px;
	border-radius: 4px;
	padding: 16px;
	background-color: ${props => props.theme.colors.accent};
`;

export const FriendsTitleContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const FriendsTitle = styled.div`
	color: ${props => props.theme.colors.textDark};
`;

export const FriendsSeeMore = styled.a`
	display: flex;
	gap: 6px;
	align-items: center;
	cursor: pointer;
	color: ${props => lightenOrDarkenColor(props.theme.colors.default, 30)};
	justify-self: flex-end;
`;

export const FriendsList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

export const Friend = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 1px solid #888888;
	margin-top: 8px;
`;

export const MoreFriends = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 1px solid #888888;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.colors.textDark};
	margin-top: 8px;
`;

export const BiographyItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	margin-top: 4px;
	color: ${props => props.theme.colors.textDark};
`;

export const BiographyTitle = styled.div`
	text-transform: uppercase;
	font-size: 1.4rem;
`;

export const BiographyContent = styled.div``;

export const BiographyLink = styled.a`
	color: ${props => lightenOrDarkenColor(props.theme.colors.default, 30)};
	text-decoration: none;
`;

export const BiographyBadgesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

export const BiographyBadge = styled.div`
	font-size: 1.2rem;
	text-transform: uppercase;
	background-color: ${props => props.theme.colors.default};
	padding: 4px 12px;
	border-radius: 22px;
	color: #ffffff;
`;

export const Posts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const PostsTitle = styled.div`
	color: ${props => props.theme.colors.textDark};
	font-size: 2.4rem;
`;

export const PostsList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

export const PostCard = styled(Card)`
	flex: 1 0 48%;
`;

export const Post = styled.div`
	display: flex;
	gap: 16px;
`;

export const PostUserPicture = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	flex-shrink: 0;
	border: 1px solid #888888;
`;

export const PostContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const PostContent = styled.div`
	color: ${props => props.theme.colors.textDark};
`;

export const PostDate = styled.div`
	color: #888888;
`;
