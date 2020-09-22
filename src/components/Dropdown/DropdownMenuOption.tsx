import React, { useState } from "react";

import { MenuOption } from "./styles";
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
		const onClick = (ev: any) => {
			setChecked(!checked);
			option.onChange(!checked);

			if (closeOnOptionClick) closeMenu();
		};

		return (
			<MenuOption onClick={onClick}>
				{option.text}
				<Switch
					// removeClickListener={true}
					value={checked ?? false}
					onChange={checked => option.onChange(checked)}
				/>
			</MenuOption>
		);
	}

	return (
		<MenuOption
			onClick={() => {
				if (closeOnOptionClick) closeMenu();
				option.onClick();
			}}>
			{option.text}
		</MenuOption>
	);
};

export default DropdownMenuOption;
