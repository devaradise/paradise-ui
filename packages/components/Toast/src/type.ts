import { SemanticColorType } from '@paradise-ui/common';
import { AlertVariant } from '@paradise-ui/alert';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type ToastPosition = 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
export interface ToastProps {
	id?: string;
	className?: string;
	position?: ToastPosition;
	variant?: AlertVariant;
	type?: SemanticColorType;
	icon?: ReactNode;
	title?: string;
	description?: string;
	autoDismiss?: number;
	customComponent?: ReactNode;
	onClose?: () => void;
}

export interface ToastContextProps {
	toasts: ToastProps[];
	setToasts: Dispatch<SetStateAction<ToastProps[]>>;
}
