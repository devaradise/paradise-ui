import { ReactNode } from 'react';
import { AlertVariant, SemanticColorType } from '../../../common/src';

export interface AlertProps {
	variant?: AlertVariant;
	type?: SemanticColorType;
	icon?: ReactNode | 'none';
	closeable?: boolean;
	onClose?: () => void;
	className?: string;
}
