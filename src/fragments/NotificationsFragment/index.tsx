import React from "react";
import { v4 as uuid } from "uuid";

import Flex from "../../components/Flex";

import { Container, ListItem, Picture, Notification, NotificationContent, NotificationDate } from "./styles";

const NotificationsFragment: React.FC = () => {
	const list = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z"
	];

	return (
		<Flex flexDirection="column" gap={0} height="50vh" style={{ overflowY: "auto", overflowX: "hidden" }}>
			<Container>
				{list.map(item => (
					<ListItem key={uuid()}>
						<Picture>ER</Picture>
						<Notification>
							<NotificationContent>
								<strong>{item}</strong> sent you a message saying: <br /> "And i've lost it all, dead
								and broken, my back's against the wall".
							</NotificationContent>
							<NotificationDate>{new Date().toLocaleString()}</NotificationDate>
						</Notification>
					</ListItem>
				))}
			</Container>
		</Flex>
	);
};

export default NotificationsFragment;
