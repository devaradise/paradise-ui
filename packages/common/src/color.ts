import { Colors } from './type';

export const defaultColors: Colors = {
	error: '#ff2b2b'
};
export const lightenColor = (hexColor: string, percent: number): string => {
	const isHex = /^#[0-9A-F]{6}$/i.test(hexColor);
	// const value = valueInPercent / 100;
	if (isHex) {
		hexColor = hexColor.replace(`#`, ``);
		const num = parseInt(hexColor, 16),
			// initial rgb. value is between 0 - 255
			R = num >> 16,
			G = (num >> 8) & 0x00ff,
			B = num & 0x0000ff,
			// percent can be negative value, but has to be positive in calculation
			decimal = percent > 0 ? percent / 100 : (-1 * percent) / 100,
			// if percent is positive value, then lighten, else darken
			newR = percent > 0 ? Math.round(R + (255 - R) * decimal) : Math.round(R - R * decimal),
			newG = percent > 0 ? Math.round(G + (255 - G) * decimal) : Math.round(G - G * decimal),
			newB = percent > 0 ? Math.round(B + (255 - B) * decimal) : Math.round(B - B * decimal);

		return (
			'#' +
			(
				0x1000000 +
				(newR < 255 ? (newR < 1 ? 0 : newR) : 255) * 0x10000 +
				(newG < 255 ? (newG < 1 ? 0 : newG) : 255) * 0x100 +
				(newB < 255 ? (newB < 1 ? 0 : newB) : 255)
			)
				.toString(16)
				.slice(1)
		);
	} else {
		console.warn(`'${hexColor}' is not a valid hex string`);
		return hexColor;
	}
};
