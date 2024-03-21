import { InputHTMLAttributes, ReactNode } from 'react';

export type TextFieldVariant = 'box' | 'line' | 'filled';
export type TextFieldSize = 'sm' | 'md' | 'lg';
export type ThemeMode = 'light' | 'dark';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix' | 'size'> {
	label?: ReactNode;
	secondaryLabel?: ReactNode;
	variant?: TextFieldVariant;
	size?: TextFieldSize;
	themeMode?: ThemeMode;
	name?: string;
	className?: string;
	// overridingClass?: { [key:string]: string }
	placeholder?: string;
	invalid?: boolean;
	disabled?: boolean;
	value?: string;
	prefix?: ReactNode;
	suffix?: ReactNode;
	helperText?: ReactNode;
	errorMessage?: ReactNode;
	onChange?: (value: string) => void;
}
