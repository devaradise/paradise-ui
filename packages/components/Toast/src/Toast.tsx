import { ToastProps } from './type';
import { Alert, defaultAlertElementClass, tailwindAlertElementClass } from '@paradise-ui/alert';
import '@paradise-ui/alert/style';
import { useContext } from 'react';
import { ToastContext } from './ToastProvider';

export const Toast = (props: ToastProps) => {
	const {
		id,
		variant = 'subtle',
		type = 'info',
		icon,
		title,
		description,
		autoDismiss = 3000,
		customComponent,
		onClose,
		className
	} = props;

	const { elementClassLibrary } = useContext(ToastContext);

	if (autoDismiss) {
		setTimeout(() => {
			// @ts-ignore
			document.getElementById(id)?.querySelector('button[aria-label="Close"]')?.click();
		}, autoDismiss);
	}
	return (
		<div className={className} id={id}>
			{customComponent ? (
				<div className='pui-toast-component'>{customComponent}</div>
			) : (
				<Alert
					className='pui-toast-component'
					type={type}
					variant={variant}
					icon={icon}
					closeable={true}
					elementClass={elementClassLibrary === 'tailwind' ? tailwindAlertElementClass : defaultAlertElementClass}
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
