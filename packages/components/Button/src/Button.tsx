import { ButtonElementClass, ButtonElementClassProps, ButtonProps } from './type';
import { PropsWithChildren, forwardRef, useContext, useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { ElementClassManager, ParadiseUIContext } from '@paradise-ui/common';
import { defaultButtonElementClass, tailwindButtonElementClass } from './elementClass';
import { clsx } from 'clsx';

export const Button = forwardRef<
	HTMLButtonElement & HTMLAnchorElement,
	PropsWithChildren<ButtonProps & ElementClassManager<ButtonElementClassProps, ButtonElementClass>>
>((props, ref) => {
	const {
		color = 'primary',
		variant = 'solid',
		size = 'md',
		leftIcon,
		rightIcon,
		disabled = false,
		loading = false,
		rounded = false,
		loader = <Spinner />,
		loaderPosition = 'overlay',
		as = 'button',
		type = 'button',
		href,
		target,
		className,
		children,
		elementClass,
		extraElementClass,
		...rest
	} = props;
	const elementClassProps = { color, variant, size, disabled, loading, rounded, loaderPosition, as, type, ...props };

	const puiContext = useContext(ParadiseUIContext);
	const [buttonElementClass, setButtonElementClass] = useState<ButtonElementClass>(defaultButtonElementClass(elementClassProps));

	useEffect(() => {
		let newElementClass = defaultButtonElementClass(elementClassProps);
		if (puiContext) {
			if (puiContext.elementClassLibrary === 'tailwind') {
				newElementClass = tailwindButtonElementClass(elementClassProps);
			}
			newElementClass = {
				...newElementClass,
				...((puiContext.componentElementClasses?.button && puiContext.componentElementClasses?.button(elementClassProps)) || {})
			};
		}
		if (elementClass) {
			newElementClass = { ...newElementClass, ...elementClass(elementClassProps) };
		}
		setButtonElementClass(newElementClass);
	}, [props]);

	const renderedChildren = (
		<>
			{loading && loaderPosition === 'overlay' ? (
				<div className={clsx(buttonElementClass.loader, extraElementClass?.loader)}>{loader}</div>
			) : (
				''
			)}
			{loading && loaderPosition === 'left' ? (
				<div className={clsx(buttonElementClass.loader, extraElementClass?.loader)}>{loader}</div>
			) : (
				leftIcon && <div className={clsx(buttonElementClass.icon, extraElementClass?.icon)}>{leftIcon}</div>
			)}
			<span className={clsx(buttonElementClass.label, extraElementClass?.label)}>{children}</span>
			{loading && loaderPosition === 'right' ? (
				<div className={clsx(buttonElementClass.loader, extraElementClass?.loader)}>{loader}</div>
			) : (
				rightIcon && <div className={clsx(buttonElementClass.icon, extraElementClass?.icon)}>{rightIcon}</div>
			)}
		</>
	);

	return (
		<>
			{as === 'link' ? (
				<a ref={ref} href={href} target={target} className={clsx(buttonElementClass.root, extraElementClass?.root)} {...rest}>
					{renderedChildren}
				</a>
			) : (
				<button
					ref={ref}
					type={type}
					className={clsx(buttonElementClass.root, className, extraElementClass?.root)}
					disabled={disabled}
					{...rest}>
					{renderedChildren}
				</button>
			)}
		</>
	);
});
