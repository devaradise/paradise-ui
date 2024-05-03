import { ReactNode } from 'react';
import { SemanticColorType } from '@paradise-ui/common';
export type AlertVariant = 'subtle' | 'solid' | 'outlined' | 'left-bordered';

export interface AlertProps {
	variant?: AlertVariant;
	type?: SemanticColorType;
	icon?: ReactNode | 'none';
	closeable?: boolean;
	onClose?: () => void;
	className?: string;
}

export interface AlertElementClassProps extends Omit<AlertProps, 'onClose'> {
	isFadingIn?: boolean;
	isFadingOut?: boolean;
	[key: string]: unknown;
}

export interface AlertElementClass {
	root?: string;
	icon?: string;
	content?: string;
	closeIcon?: string;
	[key: string]: string | undefined;
}
