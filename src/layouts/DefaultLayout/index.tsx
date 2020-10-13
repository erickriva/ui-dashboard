import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { Container, ContentWithSidebar, Content } from "./styles";

const DefaultLayout: React.FC = ({ children }) => {
	return (
		<Container>
			<Header />
			<ContentWithSidebar>
				<Sidebar />
				<Content>{children}</Content>
			</ContentWithSidebar>
		</Container>
	);
};

export default DefaultLayout;
