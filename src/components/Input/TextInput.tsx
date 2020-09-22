import React from "react";
import classnames from "classnames";

import {
	StyledTextInputContainer,
	StyledTextInputInput,
	StyledTextInputIcon,
	StyledTextInputPrefix,
	StyledTextInputSuffix
} from "./styles";
import { TextInputProps } from "./types";
import { keyPress } from "./helpers";

const TextInput: React.FC<TextInputProps> = ({ onKeyPress, type, icon, disabled, prefix, suffix, ...props }) => {
	const inputClassnames = classnames({
		hasOnlyIcon: icon && !prefix,
		hasIconAndPrefix: icon && prefix,
		hasOnlyPrefix: !icon && prefix,
		hasSuffix: suffix
	});

	const containerClassNames = classnames({
		disabled
	});

	const prefixClassNames = classnames({
		hasIcon: icon
	});

	return (
		<StyledTextInputContainer className={containerClassNames}>
			{icon && <StyledTextInputIcon>{icon}</StyledTextInputIcon>}
			{prefix && <StyledTextInputPrefix className={prefixClassNames}>{prefix}</StyledTextInputPrefix>}
			<StyledTextInputInput
				className={inputClassnames}
				type={type !== "onlyPositiveNumbers" ? type : "text"}
				disabled={disabled}
				onKeyPress={ev => (!!onKeyPress ? onKeyPress(ev) : keyPress(ev, type))}
				{...props}
			/>
			{suffix && <StyledTextInputSuffix>{suffix}</StyledTextInputSuffix>}
		</StyledTextInputContainer>
	);
};

export default TextInput;
