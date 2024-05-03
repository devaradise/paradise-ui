import { ComponentSize, SemanticColorType } from '@paradise-ui/common';
import { ComponentProps, ReactNode } from 'react';

export type ButtonColor = 'primary' | 'secondary' | SemanticColorType;
export type ButtonVariant = 'solid' | 'outlined' | 'text';
export interface ButtonProps
	extends Pick<ComponentProps<'button'>, 'type' | 'children'>,
		Pick<ComponentProps<'a'>, 'href' | 'target' | 'children'> {
	/** Custom class name that wraps whole component */
	className?: string;
	/** The HTML element in which the button is rendered  */
	as?: 'button' | 'link';
	/** The button color */
	color?: ButtonColor;
	/** The button style variant */
	variant?: ButtonVariant;
	/** The button size */
	size?: ComponentSize;
	/** The button icons */
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	/** Does the button has rounded edges? */
	rounded?: boolean;
	/** Indicate if button is in disabled state */
	disabled?: boolean;
	/** Indicate if button is in loading state */
	loading?: boolean;
	/** HTML element or React component for loader */
	loader?: ReactNode;
	/** The loader position inside the button */
	loaderPosition?: 'overlay' | 'left' | 'right';
	/** Function to invoke when button clicked */
	onClick?: () => void;
	/** Function to invoke when button is focused */
	onFocus?: () => void;
}

export interface ButtonElementClassProps extends Omit<ButtonProps, 'onClick' | 'onFocus'> {
	[key: string]: unknown;
}
export interface ButtonElementClass {
	root?: string;
	loader?: string;
	label?: string;
	[key: string]: string | undefined;
}
