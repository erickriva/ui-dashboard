export const getDaysRemaining = (endTime: Date | undefined): number | undefined => {
	if (!endTime) return undefined;

	const t = endTime.getTime() - Date.now();
	const days = Math.floor(t / (1000 * 60 * 60 * 24));

	return days;
};

export const getTimeSince = (startTime: Date) => {
	const t = Date.now() - startTime.getTime();
	const days = Math.floor(t / (1000 * 60 * 60 * 24));
	const weeks = Math.floor(days / 7);
	const daysOfWeek = days % 7;
	return {
		weeks: weeks,
		days: daysOfWeek
	};
};

export const formatToDateInput = (date?: Date) => {
	if (!date) return "";

	let day = `${date.getDate()}`;
	let month = `${date.getMonth() + 1}`;
	const year = date.getFullYear();

	if (parseInt(month) < 10) month = `0${month}`;
	if (parseInt(day) < 10) day = `0${day}`;

	const formattedValue = `${year}-${month}-${day}`;
	console.log(formattedValue);
	return formattedValue;
};

export const getPercentage = (startTime: Date | undefined, endTime: Date | undefined): number => {
	if (!startTime || !endTime) return 0;

	const startDate = startTime.getTime();
	const endDate = endTime.getTime();

	const diff = endDate - startDate;
	const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

	const progressDiff = Date.now() - startDate;
	const progressDays = Math.floor(progressDiff / (1000 * 60 * 60 * 24));

	const decimal = progressDays / totalDays;

	// const percentage = Math.floor(decimal * 100);
	const percentage = decimal * 100;

	if (percentage > 100) return 100;

	return percentage;
};
