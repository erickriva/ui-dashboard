import React from "react";
import { v4 as uuid } from "uuid";

import DropdownContent from "./DropdownContent";
import DropdownMenuOption from "./DropdownMenuOption";
import { DropdownMenuProps } from "./types";

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, closeOnOptionClick = true, ...props }) => {
	return (
		<DropdownContent
			{...props}
			content={closeMenu => (
				<div style={{ marginBottom: 16 }}>
					{options?.map(option => {
						return (
							<DropdownMenuOption
								key={uuid()}
								option={option}
								closeOnOptionClick={closeOnOptionClick}
								closeMenu={closeMenu}
							/>
						);
					})}
				</div>
			)}
		/>
	);
};

export default DropdownMenu;
