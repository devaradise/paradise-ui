import { PropsWithChildren, createContext, useState } from 'react';
import { ToastContextProps, ToastProps } from './type';
import { Alert } from '../../Alert/src';

export const ToastContext = createContext({} as ToastContextProps);

export const ToastProvider = (props: PropsWithChildren<object>) => {
	const [toasts, setToasts] = useState<ToastProps[]>([]);

	if (toasts === undefined || setToasts === undefined) {
		throw new Error('useToast must be used within a ToastProvider, did you forget to wrap with ToastProvider?');
	}

	return (
		<ToastContext.Provider value={{ toasts, setToasts }}>
			{toasts?.map((toastProps) => (
				<Alert key={toastProps.id} {...toastProps}>
					<h3>{toastProps.title}</h3>
					<p>{toastProps.description}</p>
				</Alert>
			))}
			{props.children}
		</ToastContext.Provider>
	);
};
