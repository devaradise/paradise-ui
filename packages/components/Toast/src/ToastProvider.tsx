import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { ToastContextProps, ToastProps } from './type';
import { Toast } from '.';

export const ToastContext = createContext({} as ToastContextProps);

export const ToastProvider = (props: PropsWithChildren<object>) => {
	const [toasts, setToasts] = useState<ToastProps[]>([]);

	if (toasts === undefined || setToasts === undefined) {
		throw new Error('useToast must be used within a ToastProvider, did you forget to wrap with ToastProvider?');
	}

	const removeToast = (id: string) => {
		console.log(id, toasts);
		setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
	};

	return (
		<ToastContext.Provider value={{ toasts, setToasts }}>
			{toasts?.map((toastProps) => {
				return <Toast key={toastProps.id} id={toastProps.id} {...toastProps} onClose={() => removeToast(toastProps.id || '')} />;
			})}
			{props.children}
		</ToastContext.Provider>
	);
};
