export const convertArrayToObject = <T = any>(
	array: any[],
	key: string | number,
	valueKey?: string,
	defaultValue?: any
) => {
	const initialValue = {};
	return array.reduce((obj, item) => {
		const newValue = !valueKey ? item : (item[valueKey] as T);
		return {
			...obj,
			[item[key]]: newValue ?? defaultValue
		};
	}, initialValue);
};
