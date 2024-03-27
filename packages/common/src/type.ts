export type ComponentSize = 'sm' | 'md' | 'lg';
export type ThemeMode = 'light' | 'dark';
export type ThemeModeControl = ThemeMode & 'system';

export interface Colors {
	primary?: string;
	secondary?: string;
	success?: string;
	info?: string;
	warning?: string;
	error?: string;
	text?: string;
	textInDark?: string;
	textSecondary?: string;
	textSecondaryInDark?: string;
	themeBackground?: string;
	themeBackgroundDark?: string;
	componentSurface?: string;
	componentSurfaceDark?: string;
	inputFiller?: string;
	inputFillerDark?: string;
	border?: string;
	borderInDark?: string;
	softBorder?: string;
	softBorderInDark?: string;
	[key: string]: string | undefined;
}
