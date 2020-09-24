import React, { useContext } from "react";
import { Bell, CaretDownFill, Chat, ChatLeft, Plus } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { DropdownContent, DropdownMenu } from "../../../components/Dropdown";
import { MyThemeContext } from "../../../contexts/ThemeContext";
import NotificationsFragment from "../../../fragments/NotificationsFragment";
import { routes } from "../../../routes";

import {
	Container,
	Contact,
	ContactNameAbbr,
	ContactName,
	UserOptions,
	IconsContainer,
	MenuItem,
	UserName,
	UserData,
	UserPicture,
	NotificationBubble
} from "./styles";

const Header: React.FC = ({ ...props }) => {
	const navigate = useNavigate();
	const { darkMode, theme, toggleDarkMode } = useContext(MyThemeContext);

	return (
		<Container>
			<Contact>
				<ContactNameAbbr>CA</ContactNameAbbr>
				<ContactName>Customer Admin</ContactName>
			</Contact>

			<UserOptions>
				<IconsContainer>
					<MenuItem>
						<ChatLeft />
					</MenuItem>
					<DropdownContent
						size="medium"
						title="Notifications"
						content={closeMenu => <NotificationsFragment />}>
						<MenuItem>
							<Bell />
							<NotificationBubble>2</NotificationBubble>
						</MenuItem>
					</DropdownContent>
				</IconsContainer>

				<DropdownMenu
					options={[
						{
							text: "Dark mode",
							value: darkMode,
							onChange: newValue => toggleDarkMode()
						},
						{ text: "Logout", onClick: () => navigate(routes.SignIn) }
					]}>
					<UserData>
						<UserPicture src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Wayfarers&hairColor=PastelPink&facialHairType=BeardLight&facialHairColor=Brown&clotheType=Hoodie&clotheColor=PastelYellow&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light" />
						<UserName>Herman Meier</UserName>
						<CaretDownFill />
					</UserData>
				</DropdownMenu>
			</UserOptions>
		</Container>
	);
};

export default Header;
