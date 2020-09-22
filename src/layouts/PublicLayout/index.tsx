import React from "react";
import Content from "./Content";

const PublicLayout: React.FC = ({ children }) => {
	return <Content>{children}</Content>;
};

export default PublicLayout;
