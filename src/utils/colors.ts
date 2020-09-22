export const lightenOrDarkenColor = (color: string, amount: number = -20) => {
	return (
		"#" +
		color
			.replace(/^#/, "")
			.replace(/../g, color =>
				("0" + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2)
			)
	);
};

export const hex2rgba = (hex: string, alpha = 1) => {
	const hexMatch = hex.match(/\w\w/g);
	if (!hexMatch) return hex;

	const [r, g, b] = hexMatch.map(x => parseInt(x, 16));
	return `rgba(${r},${g},${b},${alpha})`;
};
