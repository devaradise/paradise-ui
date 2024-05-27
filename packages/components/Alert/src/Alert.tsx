import { PropsWithChildren, ReactNode, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { AlertElementClass, AlertElementClassProps, AlertProps } from './type';
import { CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './Icons';
import { ElementClassManager, ParadiseUIContext } from '@paradise-ui/common';
import { defaultAlertElementClass, tailwindAlertElementClass } from './elementClass';

export const Alert = (props: PropsWithChildren<AlertProps & ElementClassManager<AlertElementClassProps, AlertElementClass>>) => {
	const { variant = 'subtle', type = 'info', icon, closeable = false, onClose, elementClass, extraElementClass, children } = props;
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
	const [isFadingIn, setIsFadingIn] = useState(true);
	const [isClosed, setIsClosed] = useState(false);

	const elementClassProps = { variant, type, closeable, ...props, isFadingIn, isFadingOut };

	const puiContext = useContext(ParadiseUIContext);
	const [alertElementClass, setAlertElementClass] = useState<AlertElementClass>(defaultAlertElementClass(elementClassProps));
	useEffect(() => {
		// console.log(elementClassProps);
		let newElementClass = defaultAlertElementClass(elementClassProps);
		if (puiContext) {
			if (puiContext.elementClassLibrary === 'tailwind') {
				newElementClass = tailwindAlertElementClass(elementClassProps);
			}
			newElementClass = {
				...newElementClass,
				...((puiContext.componentElementClasses?.alert && puiContext.componentElementClasses?.alert(elementClassProps)) || {})
			};
		}
		if (elementClass) {
			newElementClass = { ...newElementClass, ...elementClass(elementClassProps) };
		}
		setAlertElementClass(newElementClass);
	}, [props, isFadingIn, isFadingOut]);

	useEffect(() => {
		setTimeout(() => {
			setIsFadingIn(false);
			// delay 0.3 second for css transition
		}, 300);
	}, []);

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
		<div className={clsx(alertElementClass.root, extraElementClass?.root)}>
			<div className={clsx(alertElementClass.icon, extraElementClass?.icon)}>{renderedIcon}</div>
			<div className={clsx(alertElementClass.content, extraElementClass?.content)}>{children}</div>
			{closeable ? (
				<button
					type='button'
					aria-label='Close'
					className={clsx(alertElementClass.closeIcon, extraElementClass?.closeIcon)}
					onClick={handleAlertClose}>
					<CloseIcon />
				</button>
			) : (
				''
			)}
		</div>
	);
};
