import { useContext } from 'react';
import { ToastProps } from './type';
import { ToastContext } from './ToastProvider';

export const useToast = () => {
	const { toasts, setToasts } = useContext(ToastContext);

	const add = (props: ToastProps) => {
		setToasts([...toasts, props]);
	};

	const remove = (toastId: string) => {
		setToasts(toasts.filter((toast) => toast.id !== toastId));
	};

	return {
		add,
		remove
	};
};
