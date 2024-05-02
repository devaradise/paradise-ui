import clsx from 'clsx';
import { AlertElementClass, AlertElementClassProps } from './type';

export const defaultAlertElementClass = (props: AlertElementClassProps): AlertElementClass => {
	return {
		root: clsx([
			'pui-alert',
			`pui-alert-${props.variant}`,
			`pui-alert-${props.type}`,
			props.isFadingOut || props.isFadingIn ? 'pui-alert-hidden' : '',
			props.className
		]),
		icon: 'pui-alert-icon',
		content: 'pui-alert-content',
		closeIcon: 'pui-alert-close-icon'
	};
};

export const tailwindAlertElementClass = (props: AlertElementClassProps): AlertElementClass => {
	const variants = {
		subtle: clsx(
			props.type === 'info' && [
				'bg-[var(--pui-info-lighten,#d9eef9)] text-[var(--pui-info-darken,#001521)]',
				'dark:bg-[var(--pui-info-darken,#001521)] dark:text-[var(--pui-info-lighten,#d9eef9)]',
				'[&_.pui-alert-icon_svg]:fill-[var(--pui-info,#008DDA)] [&_.pui-alert-close-icon_svg]:fill-[var(--pui-info-darken,#001521)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-info-lighten,#d9eef9)]'
			],
			props.type === 'success' && [
				'bg-[var(--pui-success-lighten,#e2f4e5)] text-[var(--pui-success-darken,#0a1b0c)]',
				'dark:bg-[var(--pui-success-darken,#0a1b0c)] dark:text-[var(--pui-success-lighten,#e2f4e5)]',
				'[&_.pui-alert-icon_svg]:fill-[var(--pui-success,#40b64f)] [&_.pui-alert-close-icon_svg]:fill-[var(--pui-success-darken,#0a1b0c)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-success-lighten,#e2f4e5)]'
			],
			props.type === 'warning' && [
				'bg-[var(--pui-warning-lighten,#fef2e1)] text-[var(--pui-warning-darken,#261908)]',
				'dark:bg-[var(--pui-warning-darken,#261908)] dark:text-[var(--pui-warning-lighten,#fef2e1)]',
				'[&_.pui-alert-icon_svg]:fill-[var(--pui-warning,#FBA834)] [&_.pui-alert-close-icon_svg]:fill-[var(--pui-warning-darken,#261908)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-warning-lighten,#fef2e1)]'
			],
			props.type === 'error' && [
				'bg-[var(--pui-error-lighten,#fbe3e3)] text-[var(--pui-error-darken,#230b0b)]',
				'dark:bg-[var(--pui-error-darken,#230b0b)] dark:text-[var(--pui-error-lighten,#fbe3e3)]',
				'[&_.pui-alert-icon_svg]:fill-[var(--pui-error,#e74747)] [&_.pui-alert-close-icon_svg]:fill-[var(--pui-error-darken,#230b0b)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-error-lighten,#fbe3e3)]'
			]
		),
		solid: clsx(
			'[&_svg]:fill-[#fff]',
			props.type === 'info' && [
				'bg-[var(--pui-info,#008DDA)]',
				'dark:[&_svg]:fill-[var(--pui-info-darken,#001521)] dark:text-[var(--pui-info-darken,#001521)]'
			],
			props.type === 'success' && [
				'bg-[var(--pui-success,#40b64f)]',
				'dark:[&_svg]:fill-[var(--pui-success-darken,#0a1b0c)] dark:text-[var(--pui-success-darken,#0a1b0c)]'
			],
			props.type === 'warning' && [
				'bg-[var(--pui-warning,#FBA834)]',
				'dark:[&_svg]:fill-[var(--pui-warning-darken,#261908)] dark:text-[var(--pui-warning-darken,#261908)]'
			],
			props.type === 'error' && [
				'bg-[var(--pui-error,#e74747)]',
				'dark:[&_svg]:fill-[var(--pui-error-darken,#230b0b)] dark:text-[var(--pui-error-darken,#230b0b)]'
			]
		),
		outlined: clsx(
			'border',
			props.type === 'info' && [
				'[&_svg]:fill-[var(--pui-info,#008DDA)] border-[var(--pui-info,#008DDA)] text-[var(--pui-info-darken,#001521)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-info-lighten,#d9eef9)] dark:text-[var(--pui-info-lighten,#d9eef9)]'
			],
			props.type === 'success' && [
				'[&_svg]:fill-[var(--pui-success,#40b64f)] border-[var(--pui-success,#40b64f)] text-[var(--pui-success-darken,#0a1b0c)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-success-lighten,#e2f4e5)] dark:text-[var(--pui-success-lighten,#e2f4e5)]'
			],
			props.type === 'warning' && [
				'[&_svg]:fill-[var(--pui-warning,#FBA834)] border-[var(--pui-warning,#FBA834)] text-[var(--pui-warning-darken,#261908)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-warning-lighten,#fef2e1)] dark:text-[var(--pui-warning-lighten,#fef2e1)]'
			],
			props.type === 'error' && [
				'[&_svg]:fill-[var(--pui-error,#e74747)] border-[var(--pui-error,#e74747)] text-[var(--pui-error-darken,#230b0b)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-error-lighten,#fbe3e3)] dark:text-[var(--pui-error-lighten,#fbe3e3)]'
			]
		),
		'left-bordered': clsx(
			'border-l-[5px]',
			props.type === 'info' && [
				'border-[var(--pui-info,#008DDA)] bg-[var(--pui-info-lighten,#d9eef9)] text-[var(--pui-info-darken,#001521)]',
				'dark:bg-[var(--pui-info-darken,#001521)] dark:text-[var(--pui-info-lighten,#d9eef9)]',
				'[&_.pui-alert-icon_svg]:fill-[var(--pui-info,#008DDA)] [&_.pui-alert-close-icon_svg]:fill-[var(--pui-info-darken,#001521)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-info-lighten,#d9eef9)]'
			],
			props.type === 'success' && [
				'border-[var(--pui-success,#40b64f)] bg-[var(--pui-success-lighten,#e2f4e5)] text-[var(--pui-success-darken,#0a1b0c)]',
				'dark:bg-[var(--pui-success-darken,#0a1b0c)] dark:text-[var(--pui-success-lighten,#e2f4e5)]',
				'[&_.pui-alert-icon_svg]:fill-[var(--pui-success,#40b64f)] [&_.pui-alert-close-icon_svg]:fill-[var(--pui-success-darken,#0a1b0c)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-success-lighten,#e2f4e5)]'
			],
			props.type === 'warning' && [
				'border-[var(--pui-warning,#FBA834)] bg-[var(--pui-warning-lighten,#fef2e1)] text-[var(--pui-warning-darken,#261908)]',
				'dark:bg-[var(--pui-warning-darken,#261908)] dark:text-[var(--pui-warning-lighten,#fef2e1)]',
				'[&_.pui-alert-icon_svg]:fill-[var(--pui-warning,#FBA834)] [&_.pui-alert-close-icon_svg]:fill-[var(--pui-warning-darken,#261908)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-warning-lighten,#fef2e1)]'
			],
			props.type === 'error' && [
				'border-[var(--pui-error,#e74747)] bg-[var(--pui-error-lighten,#fbe3e3)] text-[var(--pui-error-darken,#230b0b)]',
				'dark:bg-[var(--pui-error-darken,#230b0b)] dark:text-[var(--pui-error-lighten,#fbe3e3)]',
				'[&_.pui-alert-icon_svg]:fill-[var(--pui-error,#e74747)] [&_.pui-alert-close-icon_svg]:fill-[var(--pui-error-darken,#230b0b)]',
				'dark:[&_.pui-alert-close-icon_svg]:fill-[var(--pui-error-lighten,#fbe3e3)]'
			]
		)
	};

	return {
		root: clsx([
			'w-full text-[1rem] p-[.875rem] rounded-[5px] border-box',
			'flex gap-[.625rem] overflow-hidden max-h-full transition-all ease-out duration-300',
			variants[props.variant || 'subtle'],
			props.variant === 'solid' ? 'text-[#fff]' : 'text-[var(--pui-text,#31333e)]',
			(props.isFadingOut || props.isFadingIn) && 'opacity-0 pt-0 pb-0 max-h-0',
			props.className
		]),
		icon: 'pui-alert-icon shrink-0 h-[1.5rem] w-[1.5rem] [&_svg]:w-full [&_svg]:h-full',
		content: 'text-[.875rem] leading-[1.625] grow',
		closeIcon: clsx(
			'pui-alert-close-icon',
			'shrink-0 h-[1.5rem] w-[1.5rem] p-[.2rem] cursor-pointer flex justify-center items-center rounded-[100%]',
			'[&_svg]:w-full [&_svg]:h-full hover:bg-[rgba(100,100,100,.075)] dark:hover:bg-[rgba(255,255,255,.075)]'
		)
	};
};
