export type ComponentSize = 'sm' | 'md' | 'lg';
export type ThemeMode = 'light' | 'dark';

export interface Colors {
	/**
	 * Default: blue
	 */
	primary?: string;
	/**
	 * Default: orange
	 */
	secondary?: string;
	success?: string;
	info?: string;
	warning?: string;
	error?: string;
	text?: string;
	textDark?: string;
	textSecondary?: string;
	textSecondaryDark?: string;
	background?: string;
	backgroundDark?: string;
	border?: string;
	borderDark?: string;
}
