export const keyPress = (ev: React.KeyboardEvent<HTMLInputElement>, type?: string) => {
	if (type !== "onlyPositiveNumbers") return true;

	const charCode = ev.which ? ev.which : ev.keyCode;
	if (charCode === 46 || (charCode > 31 && (charCode < 48 || charCode > 57))) {
		ev.preventDefault();
		return false;
	}
	return true;
};
