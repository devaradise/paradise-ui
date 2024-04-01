import { ToastProps } from './type';
import { Alert } from '@paradise-ui/alert';
import '@paradise-ui/alert/dist/style.css';

export const Toast = (props: ToastProps) => {
	const {
		id,
		position = 'topCenter',
		variant = 'subtle',
		type = 'info',
		icon,
		title,
		description,
		autoDismiss = 3000,
		customComponent,
		onClose
	} = props;

	if (autoDismiss) {
		setTimeout(() => {
			document
				.getElementById(id || '')
				?.getElementsByClassName('pui-alert')[0]
				?.classList.add('pui-alert-fade-out');
			setTimeout(() => {
				onClose && onClose();
			}, 300);
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
