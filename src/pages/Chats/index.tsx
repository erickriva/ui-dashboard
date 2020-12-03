import React, { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { Outlet, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";

import Flex from "../../components/Flex";
import TextInput from "../../components/Input/TextInput";
import Title from "../../components/Title";
import { fakeConversations } from "../../data/conversations";
import DefaultLayout from "../../layouts/DefaultLayout";

import {
	Avatar,
	ContactName,
	ContactMessage,
	ConversationCard,
	ConversationCardContent,
	ConversationCards,
	ContactNameAndDateContainer,
	MessageDate,
	AllConversationsHeader
} from "./styles";

const Chats: React.FC = () => {
	const navigate = useNavigate();
	const [conversations] = useState(fakeConversations);

	return (
		<DefaultLayout>
			<Flex height="100%">
				<Flex flexDirection="column" gap={22} flex="0 0 30%" maxHeight="100vh" style={{ overflowY: "hidden" }}>
					<AllConversationsHeader>
						<Title title="All Conversations" />
						<TextInput icon={<Search />} placeholder="Search Conversations" />
					</AllConversationsHeader>
					<ConversationCards>
						{conversations.map(item => (
							<ConversationCard
								key={item.id}
								// isActive={selectedConversationId === item.id}
								onClick={() => navigate(`${item.id}`)}>
								<Avatar>{item.user.initials}</Avatar>
								<ConversationCardContent>
									<ContactNameAndDateContainer>
										<ContactName>{item.user.name}</ContactName>
										<MessageDate>{item.messages.pop()?.date.toString()}</MessageDate>
									</ContactNameAndDateContainer>
									<ContactMessage>{item.messages.pop()?.content}</ContactMessage>
								</ConversationCardContent>
							</ConversationCard>
						))}
					</ConversationCards>
				</Flex>

				<Outlet />
			</Flex>
		</DefaultLayout>
	);
};

export default Chats;
