import { Dispatch, SetStateAction } from 'react';

export type ComponentSize = 'sm' | 'md' | 'lg';
export type ThemeMode = 'light' | 'dark';
export type ThemeModeControl = ThemeMode | 'system';
export type SemanticColorType = 'info' | 'success' | 'warning' | 'error';
export type ElementClassGenerator<P, R> = (props: P) => R;
export type ElementClassLibrary = 'pui' | 'tailwind';
export interface ComponentElementClasses {
	alert?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	button?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	textField?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	[key: string]: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }> | undefined;
}
export interface ElementClassManager<P, R> {
	elementClass?: ElementClassGenerator<P, R>;
	extraElementClass?: R;
}

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

export interface ParadiseUIContextProps {
	themeModeControl: ThemeModeControl;
	setThemeModeControl: Dispatch<SetStateAction<ThemeModeControl>>;
	themeMode: ThemeMode;
	setThemeMode: Dispatch<SetStateAction<ThemeMode>>;
	elementClassLibrary: ElementClassLibrary;
	componentElementClasses: ComponentElementClasses;
}
