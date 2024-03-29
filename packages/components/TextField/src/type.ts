import { InputHTMLAttributes, ReactNode } from 'react';
import { ComponentSize } from '@paradise-ui/common';

export type TextFieldVariant = 'box' | 'line' | 'filled';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix' | 'size'> {
	label?: ReactNode;
	secondaryLabel?: ReactNode;
	variant?: TextFieldVariant;
	size?: ComponentSize;
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
