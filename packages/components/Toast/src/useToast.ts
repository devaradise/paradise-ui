import { useContext } from 'react';
import { ToastProps } from './type';
import { ToastContext } from './ToastProvider';

export const useToast = () => {
	const { toasts, setToasts } = useContext(ToastContext);

	const add = (props: ToastProps) => {
		const toastId = `pui-${Math.random().toString(36).substring(3)}`;
		console.log([...toasts, { id: toastId, ...props }]);
		setToasts([...toasts, { id: toastId, ...props }]);
	};

	const remove = (toastId: string) => {
		setToasts(toasts.filter((toast) => toast.id !== toastId));
	};

	return {
		add,
		remove
	};
};
