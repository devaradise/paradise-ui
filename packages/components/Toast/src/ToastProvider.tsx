import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { ElementClassLibrary, ParadiseUIContext } from '@paradise-ui/common';
import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { ToastContextProps, ToastElementClass, ToastProps } from './type';
import { Toast } from './Toast';
import { defaultToastElementClass, tailwindToastElementClass } from './elementClass';

export const ToastContext = createContext({} as ToastContextProps);

export const ToastProvider = (props: PropsWithChildren<{ elementClassLibrary?: ElementClassLibrary }>) => {
	const [toasts, setToasts] = useState<ToastProps[]>([]);

	const removeToast = (id: string) => {
		setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
	};

	const topLeftToasts = toasts?.filter((toast) => toast.position === 'topLeft');
	const topCenterToasts = toasts?.filter((toast) => toast.position === 'topCenter');
	const topRightToasts = toasts?.filter((toast) => toast.position === 'topRight');
	const bottomLeftToasts = toasts?.filter((toast) => toast.position === 'bottomLeft');
	const bottomCenterToasts = toasts?.filter((toast) => toast.position === 'bottomCenter');
	const bottomRightToasts = toasts?.filter((toast) => toast.position === 'bottomRight');

	const elementClassProps = { topLeftToasts, topCenterToasts, topRightToasts, bottomLeftToasts, bottomCenterToasts, bottomRightToasts };
	const puiContext = useContext(ParadiseUIContext);
	const [toastElementClass, setToastElementClass] = useState<ToastElementClass>(defaultToastElementClass(elementClassProps));

	useEffect(() => {
		let newElementClass = defaultToastElementClass(elementClassProps);
		if (puiContext.elementClassLibrary === 'tailwind') {
			newElementClass = tailwindToastElementClass(elementClassProps);
		}
		if (props.elementClassLibrary) {
			if (props.elementClassLibrary === 'tailwind') {
				newElementClass = tailwindToastElementClass(elementClassProps);
			} else {
				newElementClass = defaultToastElementClass(elementClassProps);
			}
		}
		setToastElementClass(newElementClass);
	}, [toasts]);

	const toastContainers = (
		<>
			{topLeftToasts.length > 0 ? (
				<div className={clsx(toastElementClass.topLeftContainer)}>
					{topLeftToasts?.map((toastProps) => {
						return (
							<Toast
								className={clsx(toastElementClass.toast)}
								key={toastProps.id}
								{...toastProps}
								onClose={() => removeToast(toastProps.id || '')}
							/>
						);
					})}
				</div>
			) : (
				''
			)}
			{topCenterToasts.length > 0 ? (
				<div className={clsx(toastElementClass.topCenterContainer)}>
					{topCenterToasts?.map((toastProps) => {
						return (
							<Toast
								className={clsx(toastElementClass.toast)}
								key={toastProps.id}
								{...toastProps}
								onClose={() => removeToast(toastProps.id || '')}
							/>
						);
					})}
				</div>
			) : (
				''
			)}
			{topRightToasts.length > 0 ? (
				<div className={clsx(toastElementClass.topRightContainer)}>
					{topRightToasts?.map((toastProps) => {
						return (
							<Toast
								className={clsx(toastElementClass.toast)}
								key={toastProps.id}
								{...toastProps}
								onClose={() => removeToast(toastProps.id || '')}
							/>
						);
					})}
				</div>
			) : (
				''
			)}
			{bottomLeftToasts.length > 0 ? (
				<div className={clsx(toastElementClass.bottomLeftContainer)}>
					{bottomLeftToasts?.map((toastProps) => {
						return (
							<Toast
								className={clsx(toastElementClass.toast)}
								key={toastProps.id}
								{...toastProps}
								onClose={() => removeToast(toastProps.id || '')}
							/>
						);
					})}
				</div>
			) : (
				''
			)}
			{bottomCenterToasts.length > 0 ? (
				<div className={clsx(toastElementClass.bottomCenterContainer)}>
					{bottomCenterToasts?.map((toastProps) => {
						return (
							<Toast
								className={clsx(toastElementClass.toast)}
								key={toastProps.id}
								{...toastProps}
								onClose={() => removeToast(toastProps.id || '')}
							/>
						);
					})}
				</div>
			) : (
				''
			)}
			{bottomRightToasts.length > 0 ? (
				<div className={clsx(toastElementClass.bottomRightContainer)}>
					{bottomRightToasts?.map((toastProps) => {
						return (
							<Toast
								className={clsx(toastElementClass.toast)}
								key={toastProps.id}
								{...toastProps}
								onClose={() => removeToast(toastProps.id || '')}
							/>
						);
					})}
				</div>
			) : (
				''
			)}
		</>
	);

	return (
		<ToastContext.Provider
			value={{ toasts, setToasts, elementClassLibrary: props.elementClassLibrary || puiContext?.elementClassLibrary || 'pui' }}>
			{typeof window !== 'undefined' && createPortal(toastContainers, document.body)}
			{props.children}
		</ToastContext.Provider>
	);
};
