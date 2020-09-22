import React from "react";
import { v4 as uuid } from "uuid";
import { DateInput, TextArea, TextInput } from "../Input";

import { Container, Label } from "./styles";
import { LabeledInputProps } from "./types";

const LabeledInput: React.FC<LabeledInputProps> = ({ label, children }) => {
	const fieldId = uuid();

	const getChildren = () => {
		const childrenAny = children as React.ReactElement<any>;

		if (childrenAny.type !== TextInput && childrenAny.type !== DateInput && childrenAny.type !== TextArea) {
			if (typeof childrenAny.type !== "string") {
				console.warn(
					`LabeledInput has a children other than TextInput, DateInput or TextArea: ${childrenAny.type.name}, with label "${label}"`
				);
			}
			return null;
		}
		return childrenAny;
	};

	const allowedChildren = getChildren();
	if (!allowedChildren) return null;
	// if (
	// 	children.type.name !== TextInput.name &&
	// 	children.type.name !== DateInput.name &&
	// 	children.type.name !== TextArea.name
	// )
	// 	return null;

	return (
		<Container>
			<Label htmlFor={fieldId}>{label}</Label>
			{React.cloneElement(allowedChildren, { id: fieldId })}
		</Container>
	);
};

export default LabeledInput;
