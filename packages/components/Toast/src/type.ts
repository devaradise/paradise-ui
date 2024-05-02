import { ElementClassLibrary, SemanticColorType } from '@paradise-ui/common';
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
	elementClassLibrary: ElementClassLibrary;
}

export interface ToastElementClass {
	topLeftContainer?: string;
	topCenterContainer?: string;
	topRightContainer?: string;
	bottomLeftContainer?: string;
	bottomCenterContainer?: string;
	bottomRightContainer?: string;
	toast?: string;
}

export interface ToastElementClassProps {
	topLeftToasts: ToastProps[];
	topCenterToasts: ToastProps[];
	topRightToasts: ToastProps[];
	bottomLeftToasts: ToastProps[];
	bottomCenterToasts: ToastProps[];
	bottomRightToasts: ToastProps[];
}
