import React, { useRef, useState, useEffect, useCallback } from "react";
import classnames from "classnames";

import {
	StyledDropdownContentContainer,
	StyledDropdownContentMenu,
	StyledDropdownContentTitle,
	StyledDropdownContentSeparator,
	StyledDropdownContentContent,
	StyledDropdownContentDropdown,
	StyledDropdownContent
} from "./styles";
import { DropdownContentProps, MenuPosition } from "./types";
import { useNodeRef } from "../../utils/useNodeRef";
import { useCloseModal } from "../../utils/useCloseModal";

const DropdownContent: React.FC<DropdownContentProps> = ({
	title,
	children,
	verticalAlignment = "bottom",
	horizontalAlignment = "left",
	onChangeVisibility,
	content,
	size = "small"
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [position, setPosition] = useState<MenuPosition>({ top: 0, left: 0 });

	const [contentRef, contentNode, contentRect] = useNodeRef();
	const [menuRef, menuNode, menuRect] = useCloseModal(ev => closeMenu(), contentNode);

	useEffect(() => {
		if (onChangeVisibility) onChangeVisibility(isOpen);
	}, [isOpen]);

	useEffect(() => calculatePosition(), [contentRect, isOpen]);

	const setMenuState = (menuState: boolean) => {
		setIsOpen(menuState);
	};

	const closeMenu = useCallback(() => setIsOpen(false), []);

	const calculatePosition = () => {
		const { width: contentWidth, height: contentHeight } = contentRect ?? {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};

		let position: MenuPosition = {};

		if (verticalAlignment === "top") position.bottom = contentHeight * 1.4;
		if (verticalAlignment === "bottom") position.top = contentHeight * 1.4;

		if (horizontalAlignment === "left") position.left = -(dropdownWidths[size] - contentWidth);
		if (horizontalAlignment === "right") position.right = -(dropdownWidths[size] - contentWidth);

		setPosition(position);
	};

	const dropdownWidths = {
		small: 200,
		medium: 350
	};

	return (
		<StyledDropdownContentContainer>
			<StyledDropdownContentContent ref={contentRef} onClick={ev => setMenuState(!isOpen)}>
				{children}
				{isOpen}
			</StyledDropdownContentContent>

			<StyledDropdownContentMenu
				ref={menuRef}
				style={{
					...position,
					display: isOpen ? "block" : "none",
					width: dropdownWidths[size]
				}}>
				<StyledDropdownContentDropdown>
					{title && (
						<>
							<StyledDropdownContentTitle>{title}</StyledDropdownContentTitle>
							<StyledDropdownContentSeparator />
						</>
					)}
					<StyledDropdownContent>{content(closeMenu)}</StyledDropdownContent>
				</StyledDropdownContentDropdown>
			</StyledDropdownContentMenu>
		</StyledDropdownContentContainer>
	);
};

export default DropdownContent;
