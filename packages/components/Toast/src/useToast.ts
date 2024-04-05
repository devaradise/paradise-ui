import { useContext } from 'react';
import { ToastProps } from './type';
import { ToastContext } from './ToastProvider';

export const useToast = () => {
	const { toasts, setToasts } = useContext(ToastContext);

	if (toasts === undefined || setToasts === undefined) {
		throw new Error('useToast must be used within a ToastProvider, did you forget to wrap with ToastProvider?');
	}

	const add = (props: ToastProps) => {
		const toastId = `pui-${Math.random().toString(36).substring(3)}`;
		const defaultNewToast: ToastProps = {
			id: toastId,
			position: 'topCenter',
			variant: 'subtle',
			type: 'info',
			autoDismiss: 3000
		};
		setToasts([...toasts, { ...defaultNewToast, ...props }]);
	};

	const remove = (toastId: string) => {
		setToasts(toasts.filter((toast) => toast.id !== toastId));
	};

	return {
		add,
		remove
	};
};
