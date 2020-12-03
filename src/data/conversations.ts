interface TextMessage {
	date: Date;
	content: string;
}

interface File {
	name: string;
	size: string;
}

interface AttachmentMessage {
	date: Date;
	content: File;
}

export type FakeConversationMessage = (TextMessage | AttachmentMessage) & {
	mine?: boolean;
};

export interface FakeConversation {
	id: number;
	user: { initials: string; name: string };
	messages: FakeConversationMessage[];
}

export const fakeConversations: FakeConversation[] = [
	{
		id: 1,
		user: { initials: "JM", name: "Julia Miglar" },
		messages: [
			{
				content:
					"I bought the product yesterday, but having problems to turn it on. The blue lights are on but nothing happens when the machine is activated",
				date: new Date()
			},
			{
				content: "Hello Julia",
				date: new Date()
			},
			{ content: "OK, can you send me a picture?", date: new Date(), mine: true },
			{
				content: {
					name: "image-broken.jpg",
					size: "1.4MB"
				},
				date: new Date()
			},
			{ content: "Thank you, let me send it to our Technician.", date: new Date(), mine: true }
		]
	},
	{
		id: 2,
		user: { initials: "ER", name: "Erick Riva" },
		messages: []
	}
];
