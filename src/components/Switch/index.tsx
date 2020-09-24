import React from "react";
import { v4 as uuid } from "uuid";
import classnames from "classnames";

import { StyledSwitchInput, StyledSwitchLabel, StyledSwitchButton, StyledSwitchContainer } from "./styles";

interface Props {
	value?: boolean;
	onChange: (checked: boolean) => void;
	removeClickListener?: boolean;
}

const Switch: React.FC<Props> = ({ value, onChange, removeClickListener }) => {
	const myUuid = uuid();

	const StyledSwitchLabelClassnames = classnames({
		active: value
	});

	const handleCheckboxClick = (e: any) => {
		if (removeClickListener) e.stopPropagation();
	};

	return (
		<StyledSwitchContainer>
			<StyledSwitchInput
				id={myUuid}
				type="checkbox"
				checked={value}
				onChange={ev => onChange(ev.target.checked)}
			/>
			<StyledSwitchLabel
				htmlFor={myUuid}
				onClick={e => handleCheckboxClick(e)}
				className={StyledSwitchLabelClassnames}>
				<StyledSwitchButton />
			</StyledSwitchLabel>
		</StyledSwitchContainer>
	);
};

export default Switch;
