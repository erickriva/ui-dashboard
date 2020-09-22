import React from "react";
import TextInput from "./TextInput";
import { DateInputProps } from "./types";
import { formatToDateInput } from "../../utils/date";

const DateInput: React.FC<DateInputProps> = ({ minDate, maxDate, date = new Date(), ...props }) => {
	return (
		<TextInput
			{...props}
			onKeyPress={ev => {
				ev.preventDefault();
				return false;
			}}
			value={formatToDateInput(date)}
			max={formatToDateInput(maxDate)}
			min={formatToDateInput(minDate)}
			type="date"
		/>
	);
};

export default DateInput;
