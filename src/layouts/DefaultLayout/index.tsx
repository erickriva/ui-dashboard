import React from "react";
import Content from "./Content";
import Grid from "./Grid";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DefaultLayout: React.FC = ({ children }) => {
	return (
		<Grid>
			<Header />
			<Sidebar />
			<Content>{children}</Content>
		</Grid>
	);
};

export default DefaultLayout;
