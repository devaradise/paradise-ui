import { PropsWithChildren, createContext, useState } from 'react';
import { ToastContextProps, ToastProps } from './type';
import { Toast } from '.';
import './style.scss';
import { createPortal } from 'react-dom';

export const ToastContext = createContext({} as ToastContextProps);

export const ToastProvider = (props: PropsWithChildren<object>) => {
	const [toasts, setToasts] = useState<ToastProps[]>([]);

	if (toasts === undefined || setToasts === undefined) {
		throw new Error('useToast must be used within a ToastProvider, did you forget to wrap with ToastProvider?');
	}

	const removeToast = (id: string) => {
		setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
	};

	const topLeftToasts = toasts?.filter((toast) => toast.position === 'topLeft');
	const topCenterToasts = toasts?.filter((toast) => toast.position === 'topCenter');
	const topRightToasts = toasts?.filter((toast) => toast.position === 'topRight');
	const bottonLeftToasts = toasts?.filter((toast) => toast.position === 'bottomLeft');
	const bottomCenterToasts = toasts?.filter((toast) => toast.position === 'bottomCenter');
	const bottomRightToasts = toasts?.filter((toast) => toast.position === 'bottomRight');

	const toastContainers = (
		<>
			{topLeftToasts.length > 0 ? (
				<div className='pui-toast-container pui-top-left-toast-container'>
					{topLeftToasts?.map((toastProps) => {
						return <Toast key={toastProps.id} id={toastProps.id} {...toastProps} onClose={() => removeToast(toastProps.id || '')} />;
					})}
				</div>
			) : (
				''
			)}
			{topCenterToasts.length > 0 ? (
				<div className='pui-toast-container pui-top-center-toast-container'>
					{topCenterToasts?.map((toastProps) => {
						return <Toast key={toastProps.id} id={toastProps.id} {...toastProps} onClose={() => removeToast(toastProps.id || '')} />;
					})}
				</div>
			) : (
				''
			)}
			{topRightToasts.length > 0 ? (
				<div className='pui-toast-container pui-top-right-toast-container'>
					{topRightToasts?.map((toastProps) => {
						return <Toast key={toastProps.id} id={toastProps.id} {...toastProps} onClose={() => removeToast(toastProps.id || '')} />;
					})}
				</div>
			) : (
				''
			)}
			{bottonLeftToasts.length > 0 ? (
				<div className='pui-toast-container pui-bottom-left-toast-container'>
					{bottonLeftToasts?.map((toastProps) => {
						return <Toast key={toastProps.id} id={toastProps.id} {...toastProps} onClose={() => removeToast(toastProps.id || '')} />;
					})}
				</div>
			) : (
				''
			)}
			{bottomCenterToasts.length > 0 ? (
				<div className='pui-toast-container pui-bottom-center-toast-container'>
					{bottomCenterToasts?.map((toastProps) => {
						return <Toast key={toastProps.id} id={toastProps.id} {...toastProps} onClose={() => removeToast(toastProps.id || '')} />;
					})}
				</div>
			) : (
				''
			)}
			{bottomRightToasts.length > 0 ? (
				<div className='pui-toast-container pui-bottom-right-toast-container'>
					{bottomRightToasts?.map((toastProps) => {
						return <Toast key={toastProps.id} id={toastProps.id} {...toastProps} onClose={() => removeToast(toastProps.id || '')} />;
					})}
				</div>
			) : (
				''
			)}
		</>
	);

	return (
		<ToastContext.Provider value={{ toasts, setToasts }}>
			{createPortal(toastContainers, document.body)}
			{props.children}
		</ToastContext.Provider>
	);
};
