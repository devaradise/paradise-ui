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
