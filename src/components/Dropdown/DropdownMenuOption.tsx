import React, { useState } from "react";

import { StyledDropdownContentMenuOption } from "./styles";
import Switch from "../Switch";
import { LinkOption, CheckOption } from "./types";

interface Props {
	option: LinkOption | CheckOption;
	closeOnOptionClick?: boolean;
	closeMenu: () => void;
}

// const isLinkOption = (variableToCheck: any): variableToCheck is LinkOption =>
// 	(variableToCheck as LinkOption).onClick !== undefined;
const isCheckOption = (variableToCheck: any): variableToCheck is CheckOption =>
	(variableToCheck as CheckOption).onChange !== undefined;

const DropdownMenuOption: React.FC<Props> = ({ option, closeOnOptionClick, closeMenu }) => {
	const initialValue = isCheckOption(option) ? option.value : undefined;

	const [checked, setChecked] = useState(initialValue);

	if (isCheckOption(option)) {
		return (
			<StyledDropdownContentMenuOption
				onClick={() => {
					setChecked(!checked);
					option.onChange(!checked);
					if (closeOnOptionClick) closeMenu();
				}}>
				{option.text}
				<Switch
					// removeClickListener
					value={checked}
					onChange={checked => option.onChange(checked)}
				/>
			</StyledDropdownContentMenuOption>
		);
	}

	return (
		<StyledDropdownContentMenuOption
			onClick={() => {
				if (closeOnOptionClick) closeMenu();
				option.onClick();
			}}>
			{option.text}
		</StyledDropdownContentMenuOption>
	);
};

export default DropdownMenuOption;
