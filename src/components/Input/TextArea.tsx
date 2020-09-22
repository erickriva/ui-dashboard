import React from "react";
import classnames from "classnames";

import {
	StyledTextInputContainer,
	StyledTextInputTextArea,
	StyledTextInputIcon,
	StyledTextInputPrefix,
	StyledTextInputSuffix
} from "./styles";
import { TextAreaProps } from "./types";

const TextArea: React.FC<TextAreaProps> = ({ icon, disabled, prefix, suffix, ...props }) => {
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
			<StyledTextInputTextArea className={inputClassnames} disabled={disabled} {...props} />
			{suffix && <StyledTextInputSuffix>{suffix}</StyledTextInputSuffix>}
		</StyledTextInputContainer>
	);
};

export default TextArea;
