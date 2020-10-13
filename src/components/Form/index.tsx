import React from "react";

import { StyledForm } from "./styles";
import { FormProps } from "./types";

const Form: React.FC<FormProps> = ({
	onSubmit = ev => {
		alert("Form sent!");
	},
	...props
}) => {
	return (
		<StyledForm
			{...props}
			onSubmit={ev => {
				ev.preventDefault();
				onSubmit(ev);
			}}
		/>
	);
};

export default Form;
