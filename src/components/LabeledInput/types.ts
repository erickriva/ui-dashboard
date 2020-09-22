import { TextInput, TextArea, DateInput } from "../Input";

export interface LabeledInputProps {
	label: string;
	children:
		| React.ReactElement<typeof TextInput>
		| React.ReactElement<typeof TextArea>
		| React.ReactElement<typeof DateInput>;
	// children: TextInput | TextArea | DateInput;
}
