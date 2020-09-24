import React from "react";
import { Chat, ChatLeft, Gear, House, LifePreserver, Person } from "react-bootstrap-icons";

import { useNavigate, useLocation } from "react-router-dom";

import { Container, MenuContainer, MenuGroup, MenuItemName } from "./styles";
import MenuItem from "./MenuItem";
import { routes } from "../../../routes";

const Sidebar: React.FC = () => {
	return (
		<Container>
			<MenuContainer>
				<MenuGroup>
					<MenuItem name="home" icon={<House />} path={routes.Home} />
					<MenuItem name="chats" icon={<ChatLeft />} path={routes.Chats} />
					<MenuItem name="profile" icon={<Person />} path={routes.Profile} />
				</MenuGroup>

				<MenuGroup>
					<MenuItem name="settings" icon={<Gear />} path={routes.Settings} />
				</MenuGroup>

				<MenuGroup>
					<MenuItem name="support" icon={<LifePreserver />} path={routes.Support} />
				</MenuGroup>
			</MenuContainer>
		</Container>
	);
};

export default Sidebar;
