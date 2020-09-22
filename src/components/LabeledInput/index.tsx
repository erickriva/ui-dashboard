import React from "react";
import { v4 as uuid } from "uuid";

import { Container, Label } from "./styles";
import { LabeledInputProps } from "./types";

const LabeledInput: React.FC<LabeledInputProps> = ({ label, children }) => {
	const fieldId = uuid();

	return (
		<Container>
			<Label htmlFor={fieldId}>{label}</Label>
			{React.cloneElement(children, { id: fieldId })}
		</Container>
	);
};

export default LabeledInput;
