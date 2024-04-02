import { ButtonProps } from './type';
import './style.scss';
import { PropsWithChildren, forwardRef } from 'react';
import { Spinner } from './Spinner';

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, PropsWithChildren<ButtonProps>>((props, ref) => {
	const {
		color = 'primary',
		variant = 'solid',
		disabled = false,
		loading = false,
		rounded = false,
		loader = (
			<div className='pui-button-default-loader'>
				<Spinner />
			</div>
		),
		as = 'button',
		type = 'button',
		href = 'javascript:void(0)',
		target,
		className,
		children
	} = props;

	const classNames = [
		'pui-button',
		`pui-button-${color}`,
		`pui-button-${variant}`,
		disabled ? `pui-button-disabled` : '',
		loading ? `pui-button-loading` : '',
		rounded ? `pui-button-rounded` : '',
		className
	]
		.filter((cn) => !!cn)
		.join(' ');

	const renderedChildren = loading ? loader : children;

	return (
		<>
			{as === 'link' ? (
				<a ref={ref} href={href} target={target} className={classNames}>
					{renderedChildren}
				</a>
			) : (
				<button ref={ref} type={type} className={classNames} disabled={disabled}>
					{renderedChildren}
				</button>
			)}
		</>
	);
});
