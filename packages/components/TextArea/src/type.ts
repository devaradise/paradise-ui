import { ReactNode, TextareaHTMLAttributes } from 'react';
import { ComponentSize } from '@paradise-ui/common';

export type TextAreaVariant = 'outlined' | 'line' | 'filled';

export interface TextAreaElementClass {
	root?: string;
	labelBlock?: string;
	label?: string;
	secondaryLabel?: string;
	textarea?: string;
	messageBlock?: string;
	helperText?: string;
	errorMessage?: string;
	[key: string]: string | undefined;
}

export interface TextAreaElementClassProps extends TextAreaProps {
	focus?: boolean;
	[key: string]: unknown;
}

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'size'> {
	label?: ReactNode;
	secondaryLabel?: ReactNode;
	variant?: TextAreaVariant;
	size?: ComponentSize;
	autoResize?: boolean;
	name?: string;
	className?: string;
	placeholder?: string;
	invalid?: boolean;
	disabled?: boolean;
	value?: string;
	helperText?: ReactNode;
	errorMessage?: ReactNode;
	onChange?: (value: string) => void;
}
