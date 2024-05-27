import { Dispatch, SetStateAction } from 'react';

export type ComponentSize = 'sm' | 'md' | 'lg';
export type ThemeMode = 'light' | 'dark';
export type ThemeModeControl = ThemeMode | 'system';
export type SemanticColorType = 'info' | 'success' | 'warning' | 'error';
export type ElementClassGenerator<P, R> = (props: P) => R;
export type ElementClassLibrary = 'pui' | 'tailwind';
export interface ComponentElementClasses {
	alert?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	avatar?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	accordion?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	autocomplete?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	badge?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	breadcrumb?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	button?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	checkbox?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	chip?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	collapsible?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	confirmDialog?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	dataIterator?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	datepicker?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	dropdown?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	fileUpload?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	infiniteScroller?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	loader?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	menu?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	modal?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	pagination?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	radio?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	rating?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	select?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	skeleton?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	switch?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	tabs?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	table?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	textArea?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	textField?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
	tooltip?: ElementClassGenerator<{ [key: string]: unknown }, { [key: string]: string | undefined }>;
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
	inputPlaceholder?: string;
	inputPlaceholderDark?: string;
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
