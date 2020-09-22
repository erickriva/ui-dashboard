import React from "react";
import classnames from "classnames";
import { MenuItem as MenuItemStyled, MenuItemName } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

interface MenuItemProps {
	name: string;
	icon: JSX.Element;
	path: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, icon, path }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = () => {
		const firstPartPath = location.pathname.split("/")[1];
		return `/${firstPartPath}` === path;
	};

	const className = classnames({ active: isActive() });
	return (
		<MenuItemStyled className={className} onClick={() => navigate(path)}>
			{icon}
			{/* <MenuItemName>{name}</MenuItemName> */}
		</MenuItemStyled>
	);
};

export default MenuItem;
