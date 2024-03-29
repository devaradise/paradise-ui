import { AlertVariant, SemanticColorType } from '@paradise-ui/common';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type ToastPosition = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
export interface ToastProps {
	id?: string;
	className?: string;
	position?: ToastPosition;
	duration?: number;
	variant?: AlertVariant;
	type?: SemanticColorType;
	customIcon?: ReactNode;
	title?: string;
	description?: string;
	autoDismiss?: boolean;
	customComponent?: ReactNode;
}

export interface ToastContextProps {
	toasts: ToastProps[];
	setToasts: Dispatch<SetStateAction<ToastProps[]>>;
}
