import React from "react";
import { Download, Reply, ThreeDots } from "react-bootstrap-icons";
import { FakeConversationMessage } from "../../data/conversations";

import {
	MyMessageContainer,
	MyMessageContent,
	MyMessageDate,
	OtherPersonMessageContainer,
	OtherPersonMessage,
	OtherPersonMessageContent,
	OtherPersonMessageDate,
	OtherPersonIcons,
	SendAttachmentButton,
	FileData,
	FileName,
	FileSize,
	FileDownload
} from "./styles";

interface Props {
	message: FakeConversationMessage;
}

export const MyTextMessage: React.FC<Props> = ({ message }) => {
	return (
		<MyMessageContainer>
			<MyMessageContent>{message.content}</MyMessageContent>
			<MyMessageDate>{message.date.toString()}</MyMessageDate>
		</MyMessageContainer>
	);
};

export const OtherTextMessage: React.FC<Props> = ({ message }) => {
	return (
		<OtherPersonMessageContainer>
			<OtherPersonMessage>
				<OtherPersonMessageContent>{message.content}</OtherPersonMessageContent>
				<OtherPersonMessageDate>{message.date.toString()}</OtherPersonMessageDate>
			</OtherPersonMessage>
			<OtherPersonIcons>
				<SendAttachmentButton>
					<ThreeDots />
				</SendAttachmentButton>
				<SendAttachmentButton>
					<Reply />
				</SendAttachmentButton>
			</OtherPersonIcons>
		</OtherPersonMessageContainer>
	);
};

export const OtherAttachmentMessage: React.FC<Props> = ({ message }) => {
	return (
		<OtherPersonMessageContainer>
			<OtherPersonMessage>
				<OtherPersonMessageContent>
					<FileData>
						<FileName>Photo - Broken.jpg</FileName>
						<FileSize>1,3 MB</FileSize>
					</FileData>
					<FileDownload>
						Download <Download />
					</FileDownload>
				</OtherPersonMessageContent>
				<OtherPersonMessageDate>2 minutes ago</OtherPersonMessageDate>
			</OtherPersonMessage>
			<OtherPersonIcons>
				<SendAttachmentButton>
					<ThreeDots />
				</SendAttachmentButton>
				<SendAttachmentButton>
					<Reply />
				</SendAttachmentButton>
			</OtherPersonIcons>
		</OtherPersonMessageContainer>
	);
};

export const MyAttachmentMessage: React.FC<Props> = ({ message }) => {
	return (
		<MyMessageContainer>
			<MyMessageContent>{message.content}</MyMessageContent>
			<MyMessageDate>{message.date.toString()}</MyMessageDate>
		</MyMessageContainer>
	);
};
