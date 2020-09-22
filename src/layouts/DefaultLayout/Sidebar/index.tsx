import React from "react";
import { Chat, ChatLeft, Gear, House, LifePreserver, Person } from "react-bootstrap-icons";

import { useNavigate, useLocation } from "react-router-dom";

import { Container, MenuContainer, MenuGroup, MenuItemName } from "./styles";
import MenuItem from "./MenuItem";

const Sidebar: React.FC = () => {
	return (
		<Container>
			<MenuContainer>
				<MenuGroup>
					<MenuItem name="home" icon={<House />} path="/" />
					<MenuItem name="chats" icon={<ChatLeft />} path="/chats" />
					<MenuItem name="profile" icon={<Person />} path="/profile" />
				</MenuGroup>

				<MenuGroup>
					<MenuItem name="settings" icon={<Gear />} path="/settings" />
				</MenuGroup>

				<MenuGroup>
					<MenuItem name="support" icon={<LifePreserver />} path="/support" />
				</MenuGroup>
			</MenuContainer>
		</Container>
	);
};

export default Sidebar;
