import { ButtonElementClass, ButtonElementClassProps } from './type';
import clsx from 'clsx';

export const defaultButtonElementClass = (props: ButtonElementClassProps): ButtonElementClass => {
	return {
		root: clsx([
			'pui-button',
			`pui-button-${props.color}`,
			`pui-button-${props.variant}`,
			`pui-button-${props.size}`,
			props.disabled ? `pui-button-disabled` : '',
			props.loading ? `pui-button-loading` : '',
			props.rounded ? `pui-button-rounded` : '',
			props.className
		]),
		loader: clsx(['pui-button-loader', `pui-button-loader-${props.loaderPosition}`]),
		label: 'pui-button-label'
	};
};

export const tailwindButtonElementClass = (props: ButtonElementClassProps): ButtonElementClass => {
	const sizes = {
		sm: 'h-[2rem] text-[.75rem] py-[.375rem] px-[.825rem]',
		md: 'h-[2.5rem] text-[.875rem] py-[.375rem] px-[1rem]',
		lg: 'h-[3rem] text-[1rem] py-[.375rem] px-[1.125rem]'
	};

	const variants = {
		solid: clsx([
			`border hover:text-[#fff] dark:text-[#060606] dark:hover:text-[#000]`,
			!props.disabled && props.color === 'primary' && 'border-[var(--pui-primary,#1BA7F1)] bg-[var(--pui-primary,#1BA7F1)]',
			!props.disabled && props.color === 'secondary' && 'border-[var(--pui-secondary,#4A667b)] bg-[var(--pui-secondary,#4A667b)]',
			!props.disabled && props.color === 'info' && 'border-[var(--pui-info,#008DDA)] bg-[var(--pui-info,#008DDA)]',
			!props.disabled && props.color === 'success' && 'border-[var(--pui-success,#40B64f)] bg-[var(--pui-success,#40B64f)]',
			!props.disabled && props.color === 'warning' && 'border-[var(--pui-warning,#FBA834)] bg-[var(--pui-warning,#FBA834)]',
			!props.disabled && props.color === 'error' && 'border-[var(--pui-error,#E74747)] bg-[var(--pui-error,#E74747)]',
			props.disabled ? `text-[#979797] border-transparent bg-[rgba(151,151,151,0.3)]` : 'text-[#fafafa]',
			!props.disabled && !props.loading && 'hover:before:bg-[rgba(100,100,100,0.1)]'
		]),
		outlined: clsx([
			`bg-transparent border`,
			!props.disabled && props.color === 'primary' && 'border-[var(--pui-primary,#1BA7F1)] text-[var(--pui-primary,#1BA7F1)]',
			!props.disabled && props.color === 'secondary' && 'border-[var(--pui-secondary,#4A667b)] text-[var(--pui-secondary,#4A667b)]',
			!props.disabled && props.color === 'info' && 'border-[var(--pui-info,#008DDA)] text-[var(--pui-info,#008DDA)]',
			!props.disabled && props.color === 'success' && 'border-[var(--pui-success,#40B64f)] text-[var(--pui-success,#40B64f)]',
			!props.disabled && props.color === 'warning' && 'border-[var(--pui-warning,#FBA834)] text-[var(--pui-warning,#FBA834)]',
			!props.disabled && props.color === 'error' && 'border-[var(--pui-error,#E74747)] text-[var(--pui-error,#E74747)]',
			props.disabled && `border-[#979797] text-[#979797]`
		]),
		text: clsx([
			`bg-transparent border border-transparent`,
			!props.disabled && props.color === 'primary' && 'text-[var(--pui-primary,#1BA7F1)]',
			!props.disabled && props.color === 'secondary' && 'text-[var(--pui-secondary,#4A667b)]',
			!props.disabled && props.color === 'info' && 'text-[var(--pui-info,#008DDA)]',
			!props.disabled && props.color === 'success' && 'text-[var(--pui-success,#40B64f)]',
			!props.disabled && props.color === 'warning' && 'text-[var(--pui-warning,#FBA834)]',
			!props.disabled && props.color === 'error' && 'text-[var(--pui-error,#E74747)]',
			props.disabled && `text-[#979797]`
		])
	};

	return {
		root: clsx([
			'font-inherit color-inherit font-semibold leading-none',
			'relative flex border-box w-max gap-2 items-center justify-center overflow-hidden',
			'outline-none shadow-none rounded-[.375rem] cursor-pointer z-[1] transition-all duration-300',
			'before:content-[""] before:transition-all before:duration-300 before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:z-[-1]',
			'[&_svg]:shrink-0 [&_svg]:w-[1.37em] [&_svg]:h-[1.37em]',
			!props.disabled && !props.loading ? 'hover:before:bg-[rgba(200,200,200,.1)] cursor-pointer' : 'opacity-75',
			props.rounded && 'rounded-[100px]',
			props.loading && 'cursor-default',
			props.disabled && 'cursor-not-allowed',
			sizes[props.size || 'md'],
			variants[props.variant || 'solid'],
			props.loading && props.loaderPosition === 'overlay' && '[&_:not(.pui-button-loader-overlay)]:text-transparent',
			props.className
		]),
		loader: clsx([
			props.loading && `flex justify-center items-center`,
			props.loading && props.loaderPosition === 'overlay' && 'absolute left-0 right-0 top-0 bottom-0',
			props.loading &&
				props.variant === 'solid' &&
				!props.disabled &&
				'[&_svg]:stroke-[#fff] dark[&_.svg]:stroke-[#999] text-[#fff] dark:text-[#000]',
			props.loading &&
				props.variant !== 'solid' &&
				!props.disabled &&
				clsx([
					props.color === 'primary' && `[&_svg]:stroke-[var(--pui-primary,#1BA7F1)] text-[var(--pui-primary,#1BA7F1)]`,
					props.color === 'secondary' && `[&_svg]:stroke-[var(--pui-secondary,#4A667b)] text-[var(--pui-secondary,#4A667b)]`,
					props.color === 'info' && `[&_svg]:stroke-[var(--pui-info,#008DDA)] text-[var(--pui-info,#008DDA)]`,
					props.color === 'success' && `[&_svg]:stroke-[var(--pui-success,#40B64f)] text-[var(--pui-success,#40B64f)]`,
					props.color === 'warning' && `[&_svg]:stroke-[var(--pui-warning,#FBA834)] text-[var(--pui-warning,#FBA834)]`,
					props.color === 'error' && `[&_svg]:stroke-[var(--pui-error,#E74747)] text-[var(--pui-error,#E74747)]`
				]),
			props.loading && props.disabled && `[&_svg]:stroke-[#979797] text-[#979797]`
		]),
		label: 'whitespace-nowrap'
	};
};
