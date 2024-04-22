import { InputHTMLAttributes, ReactNode } from 'react';
import { ComponentSize } from '@paradise-ui/common';

export type TextFieldVariant = 'outlined' | 'line' | 'filled';
export type TextFieldType = 'text' | 'number' | 'email' | 'url' | 'password' | 'search' | 'tel';

export interface TextFieldElementClass {
	root: string;
	labelBlock: string;
	label: string;
	secondaryLabel: string;
	inputBlock: string;
	inputPrefix: string;
	input: string;
	inputSuffix: string;
	messageBlock: string;
	helperText: string;
	errorMessage: string;
}

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix' | 'size' | 'type'> {
	label?: ReactNode;
	secondaryLabel?: ReactNode;
	variant?: TextFieldVariant;
	size?: ComponentSize;
	name?: string;
	className?: string;
	type?: TextFieldType;
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
