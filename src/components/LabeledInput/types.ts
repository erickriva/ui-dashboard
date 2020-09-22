import { TextInput, TextArea, DateInput } from "../Input";
import { DateInputProps, TextAreaProps, TextInputProps } from "../Input/types";

export interface LabeledInputProps {
	label: string;
	children: React.ReactElement<TextInputProps | TextAreaProps | DateInputProps>;
	// children: TextInput | TextArea | DateInput;
}
