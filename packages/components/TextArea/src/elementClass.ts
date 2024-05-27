import { TextAreaElementClass, TextAreaElementClassProps } from './type';
import { ElementClassGenerator } from '@paradise-ui/common';
import clsx from 'clsx';

export const defaultTextAreaElementClass: ElementClassGenerator<TextAreaElementClassProps, TextAreaElementClass> = (
	props: TextAreaElementClassProps
) => {
	return {
		root: clsx([
			'pui-text-area',
			`pui-text-area--${props.variant}`,
			`pui-text-area--${props.size}`,
			!!props.errorMessage || props.invalid ? `pui-text-area--error` : '',
			props.focus ? 'pui-text-area--focus' : '',
			props.disabled ? `pui-text-area--disabled` : '',
			props.className
		]),
		labelBlock: 'pui-text-area__label-block',
		label: 'pui-text-area__label',
		secondaryLabel: 'pui-text-area__label-secondary',
		textarea: '',
		messageBlock: 'pui-text-area__message-block',
		helperText: 'pui-text-area__helper-text',
		errorMessage: 'pui-text-area__error-message'
	};
};

export const tailwindTextAreaElementClass: ElementClassGenerator<TextAreaElementClassProps, TextAreaElementClass> = (
	props: TextAreaElementClassProps
) => {
	return {
		root: clsx([
			'w-full text-[var(--pui-text,#31333e)] dark:text-[var(--pui-text-in-dark,#e7e7e9)] border-box text-[1rem]',
			props.className
		]),
		labelBlock: clsx(['flex justify-between mb-[0.25rem]', props.size === 'sm' ? 'text-[0.75rem]' : 'text-[0.875rem]']),
		label: '',
		secondaryLabel: 'text-[var(--pui-text-secondary,#63636e)] dark:text-[var(--pui-text-secondary-in-dark,#a4a4ad)]',
		textarea: clsx([
			'w-full border-box leading-[1.375] block font-[inherit] text-inherit m-0 outline-0 disabled:cursor-not-allowed antialiased',
			'placeholder:text-[var(--pui-input-placeholder,#adb5bd)] dark:placeholder:text-[var(--pui-input-placeholder-dark,#696969)]',
			props.size === 'sm' && 'text-[0.875rem]',
			props.size === 'sm' &&
				(props.variant === 'line'
					? 'min-h-[1.625rem] not:([rows]):min-h-[2.45rem] px-0 py-[.125rem]'
					: 'min-h-[2rem] not:([rows]):min-h-[3rem] px-[.75em] py-[.3125rem]'),
			props.size === 'md' &&
				(props.variant === 'line'
					? 'min-h-[1.875rem] not:([rows]):min-h-[2.8125rem] px-0 py-[.125rem]'
					: 'min-h-[2.5rem] not:([rows]):min-h-[3.75rem] px-[.75em] py-[.4375rem]'),
			props.size === 'lg' && 'text-[1.125rem]',
			props.size === 'lg' &&
				(props.variant === 'line'
					? 'min-h-[2rem] not:([rows]):min-h-[3rem] px-0 py-[.125rem]'
					: 'min-h-[3rem] not:([rows]):min-h-[4.5rem] px-[.75em] py-[.625rem]'),
			props.variant === 'outlined' && [
				'bg-transparent rounded-[5px]',
				'border border-solid',
				!props.focus &&
					!props.errorMessage &&
					!props.invalid &&
					'border-[var(--pui-soft-border,#dadce3)] dark:border-[var(--pui-soft-border-in-dark,#373a3a)]'
			],
			props.variant === 'line' && [
				'bg-transparent mb-[0.3rem]',
				'border-0 border-b border-solid',
				!props.focus &&
					!props.errorMessage &&
					!props.invalid &&
					'border-[var(--pui-soft-border,#dadce3)] dark:border-[var(--pui-soft-border-in-dark,#373a3a)]'
			],
			props.variant === 'filled' && [
				'rounded-[5px]',
				!props.errorMessage && !props.invalid && 'bg-[var(--pui-input-filler,#f0f0f2)] dark:bg-[var(--pui-input-filler-dark,#313437)]',
				'border border-solid',
				!props.focus &&
					!props.errorMessage &&
					!props.invalid &&
					!props.disabled &&
					'border-[var(--pui-input-filler,#f0f0f2)] dark:border-[var(--pui-input-filler-dark,#313437)]'
			],
			!props.focus &&
				!props.errorMessage &&
				!props.disabled &&
				'hover:border-[var(--pui-border,#c3c7d0)] dark:hover:var(--pui-border-in-dark,#43474a)',
			props.disabled && 'opacity-50 cursor-not-allowed',
			props.focus && !props.errorMessage && 'border-[var(--pui-info,#008DDA)]',
			props.focus &&
				!props.errorMessage &&
				(props.variant === 'line' ? 'border-b-[1.5px]' : 'shadow-[0_0_0_0.5px_var(--pui-info,#008DDA)]'),
			(!!props.errorMessage || props.invalid) && 'border-[var(--pui-error,#e74747)]',
			(!!props.errorMessage || props.invalid) &&
				(props.variant === 'line' ? 'border-b-[1.5px]' : 'shadow-[0_0_0_0.5px_var(--pui-error,#e74747)]'),
			(!!props.errorMessage || props.invalid) &&
				props.variant === 'filled' &&
				'bg-[var(--pui-error-lighten,#fbe3e3)] dark:bg-[var(--pui-error-darken,#230b0b)]'
		]),
		messageBlock: clsx([
			'mt-[0.25em] text-[var(--pui-text-secondary,#63636e)] dark:text-[var(--pui-text-secondary-in-dark,#a4a4ad)]',
			props.size === 'sm' ? 'text-[0.65rem]' : 'text-[0.75rem]'
		]),
		helperText: '',
		errorMessage: 'text-[var(--pui-error,#e74747)]'
	};
};
