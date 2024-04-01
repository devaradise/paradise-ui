import { ToastProps } from './type';
import { Alert } from '@paradise-ui/alert';
import '@paradise-ui/alert/dist/style.css';
import './style.scss';
import { ReactNode, useEffect, useState } from 'react';

export const Toast = (props: ToastProps) => {
	const {
		id,
		position = 'topCenter',
		variant = 'subtle',
		type = 'info',
		icon,
		title,
		description,
		autoDismiss = 0,
		customComponent,
		onClose
	} = props;

	if (autoDismiss) {
		setTimeout(() => {
			onClose && onClose();
		}, autoDismiss);
	}
	return (
		<div className={`pui-toast pui-toast-${position}`} id={id}>
			{customComponent ? (
				customComponent
			) : (
				<Alert
					type={type}
					variant={variant}
					icon={icon}
					closeable={true}
					onClose={() => {
						onClose && onClose();
					}}>
					{title ? <h3>{title}</h3> : ''}
					{description ? <p>{description}</p> : ''}
				</Alert>
			)}
		</div>
	);
};
