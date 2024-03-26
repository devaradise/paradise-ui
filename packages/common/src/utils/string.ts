export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const kebabCase = (str: string) => {
	return str.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase();
};

export const camelCase = (str: string) => {
	return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};
