import { ButtonProps } from './type';
import './style.scss';
import { PropsWithChildren, forwardRef } from 'react';
import { Spinner } from './Spinner';

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, PropsWithChildren<ButtonProps>>((props, ref) => {
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
		...rest
	} = props;

	const classNames = [
		'pui-button',
		`pui-button-${color}`,
		`pui-button-${variant}`,
		`pui-button-${size}`,
		disabled ? `pui-button-disabled` : '',
		loading ? `pui-button-loading` : '',
		rounded ? `pui-button-rounded` : '',
		className
	]
		.filter((cn) => !!cn)
		.join(' ');

	const renderedChildren = (
		<>
			{loading && (loaderPosition === 'overlay' || loaderPosition === 'left') ? (
				<div className={`pui-button-loader pui-button-loader-${loaderPosition}`}>{loader}</div>
			) : (
				leftIcon
			)}
			<span className='pui-button-label'>{children}</span>
			{loading && loaderPosition === 'right' ? (
				<div className={`pui-button-loader pui-button-loader-${loaderPosition}`}>{loader}</div>
			) : (
				rightIcon
			)}
		</>
	);

	return (
		<>
			{as === 'link' ? (
				<a ref={ref} href={href} target={target} className={classNames} {...rest}>
					{renderedChildren}
				</a>
			) : (
				<button ref={ref} type={type} className={classNames} disabled={disabled} {...rest}>
					{renderedChildren}
				</button>
			)}
		</>
	);
});
