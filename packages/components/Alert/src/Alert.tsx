import { PropsWithChildren, useState } from 'react';
import { AlertProps } from './type';
import './style.scss';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './Icons';

export const Alert = (props: PropsWithChildren<AlertProps>) => {
	const { variant = 'subtle', type = 'info', customIcon, closeable = false, onClose, className, children } = props;
	let defaultIcon = <></>;
	switch (type) {
		case 'info':
			defaultIcon = <InfoIcon />;
			break;
		case 'success':
			defaultIcon = <SuccessIcon />;
			break;
		case 'warning':
			defaultIcon = <WarningIcon />;
			break;
		case 'error':
			defaultIcon = <ErrorIcon />;
	}
	const [isClosed, setIsClosed] = useState(false);
	return (
		<div className={['pui-alert', `pui-alert-${variant}`, `pui-alert-${type}`, isClosed ? 'pui-alert-closed' : '', className].join(' ')}>
			<div className='pui-alert-icon'>{customIcon ? customIcon : defaultIcon}</div>
			<div className='pui-alert-content'>{children}</div>
			{closeable ? (
				<div
					className='pui-alert-close-icon'
					onClick={() => {
						setIsClosed(true);
						onClose && onClose();
					}}>
					<CloseIcon />
				</div>
			) : (
				''
			)}
		</div>
	);
};
