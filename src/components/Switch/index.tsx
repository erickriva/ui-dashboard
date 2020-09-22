import React from "react";
import { Input, Label, Button } from "./styles";
import { v4 as uuid } from "uuid";

interface Props {
	value: boolean;
	onChange: (checked: boolean) => void;
	removeClickListener?: boolean;
}

const Switch: React.FC<Props> = ({ value, onChange, removeClickListener }) => {
	const myUuid = uuid();

	const handleCheckboxClick = (e: any) => {
		if (removeClickListener) e.stopPropagation();
	};

	return (
		<>
			<Input
				id={myUuid}
				type="checkbox"
				checked={value}
				onChange={ev => onChange && onChange(ev.target.checked)}
			/>
			<Label htmlFor={myUuid} onClick={e => handleCheckboxClick(e)} value={value}>
				<Button />
			</Label>
		</>
	);
};

export default Switch;
