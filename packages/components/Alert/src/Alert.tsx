import { PropsWithChildren, ReactNode, useState } from 'react';
import { AlertProps } from './type';
import './style.scss';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './Icons';

export const Alert = (props: PropsWithChildren<AlertProps>) => {
	const { variant = 'subtle', type = 'info', icon, closeable = false, onClose, className, children } = props;
	let renderedIcon: ReactNode = <></>;
	switch (type) {
		case 'info':
			renderedIcon = <InfoIcon />;
			break;
		case 'success':
			renderedIcon = <SuccessIcon />;
			break;
		case 'warning':
			renderedIcon = <WarningIcon />;
			break;
		case 'error':
			renderedIcon = <ErrorIcon />;
	}
	if (icon) {
		if (icon === 'none') {
			renderedIcon = <></>;
		} else {
			renderedIcon = icon;
		}
	}
	const [isFadingOut, setIsFadingOut] = useState(false);
	const [isClosed, setIsClosed] = useState(false);
	const handleAlertClose = () => {
		setIsFadingOut(true);
		setTimeout(() => {
			setIsClosed(true);
			onClose && onClose();
			// delay 0.3 second for css transition
		}, 300);
	};

	if (isClosed) return null;
	return (
		<div
			className={['pui-alert', `pui-alert-${variant}`, `pui-alert-${type}`, isFadingOut ? 'pui-alert-fade-out' : '', className].join(' ')}>
			<div className='pui-alert-icon'>{renderedIcon}</div>
			<div className='pui-alert-content'>{children}</div>
			{closeable ? (
				<div className='pui-alert-close-icon' onClick={handleAlertClose}>
					<CloseIcon />
				</div>
			) : (
				''
			)}
		</div>
	);
};
