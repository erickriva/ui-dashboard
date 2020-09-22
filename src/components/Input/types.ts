export interface DateInputProps extends TextInputProps {
	minDate?: Date;
	maxDate?: Date;
	date?: Date;
}

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element;
	prefix?: string;
	suffix?: string;
}

export interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	icon?: JSX.Element;
	prefix?: string;
	suffix?: string;
}
