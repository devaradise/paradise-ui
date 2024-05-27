import { TextFieldElementClass, TextFieldElementClassProps } from './type';
import { ElementClassGenerator } from '@paradise-ui/common';
import clsx from 'clsx';

export const defaultTextFieldElementClass: ElementClassGenerator<TextFieldElementClassProps, TextFieldElementClass> = (
	props: TextFieldElementClassProps
) => {
	return {
		root: clsx([
			'pui-text-field',
			`pui-text-field--${props.variant}`,
			`pui-text-field--${props.size}`,
			!!props.errorMessage || props.invalid ? `pui-text-field--error` : '',
			props.focus ? 'pui-text-field--focus' : '',
			props.disabled ? `pui-text-field--disabled` : '',
			props.className
		]),
		labelBlock: 'pui-text-field__label-block',
		label: 'pui-text-field__label',
		secondaryLabel: 'pui-text-field__label-secondary',
		inputBlock: 'pui-text-field__input-block',
		inputPrefix: 'pui-text-field__input-prefix',
		input: '',
		inputSuffix: 'pui-text-field__input-suffix',
		messageBlock: 'pui-text-field__message-block',
		helperText: 'pui-text-field__helper-text',
		errorMessage: 'pui-text-field__error-message'
	};
};

export const tailwindTextFieldElementClass: ElementClassGenerator<TextFieldElementClassProps, TextFieldElementClass> = (
	props: TextFieldElementClassProps
) => {
	return {
		root: clsx([
			'w-full text-[var(--pui-text,#31333e)] dark:text-[var(--pui-text-in-dark,#e7e7e9)] border-box text-[1rem]',
			props.className
		]),
		labelBlock: clsx(['flex justify-between mb-[0.25rem]', props.size === 'sm' ? 'text-[0.75rem]' : 'text-[0.875rem]']),
		label: '',
		secondaryLabel: 'text-[var(--pui-text-secondary,#63636e)] dark:text-[var(--pui-text-secondary-in-dark,#a4a4ad)]',
		inputBlock: clsx([
			'flex overflow-hidden antialiased',
			props.size === 'sm' && 'text-[0.875rem]',
			props.size === 'sm' && (props.variant === 'line' ? 'h-[1.625rem]' : 'h-[2rem]'),
			props.size === 'md' && (props.variant === 'line' ? 'h-[1.875rem]' : 'h-[2.5rem]'),
			props.size === 'lg' && 'text-[1.125rem]',
			props.size === 'lg' && (props.variant === 'line' ? 'h-[2rem]' : 'h-[3rem]'),
			props.variant === 'outlined' && [
				'rounded-[5px]',
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
		inputPrefix: clsx([
			'h-full flex items-center',
			props.variant !== 'line' && props.size === 'sm' && 'pl-[0.5rem]',
			props.variant !== 'line' && props.size === 'md' && 'pl-[0.75rem]',
			props.variant !== 'line' && props.size === 'lg' && 'pl-[1rem]',
			props.variant === 'line' && props.size === 'sm' && 'pr-[0.5rem]',
			props.variant === 'line' && props.size === 'md' && 'pr-[0.75rem]',
			props.variant === 'line' && props.size === 'lg' && 'pr-[1rem]'
		]),
		input: clsx([
			'w-full h-full font-inherit text-inherit border-0 outline-0 shadow-none bg-inherit disabled:cursor-not-allowed disabled:bg-inherit',
			'placeholder:text-[var(--pui-input-placeholder,#adb5bd)] dark:placeholder:text-[var(--pui-input-placeholder-dark,#696969)]',
			props.variant === 'filled' && 'bg-inherit',
			props.variant === 'line' ? 'p-0' : 'py-0',
			props.variant !== 'line' && props.size === 'sm' && 'px-[0.5rem]',
			props.variant !== 'line' && props.size === 'md' && 'px-[0.75rem]',
			props.variant !== 'line' && props.size === 'lg' && 'px-[1rem]'
		]),
		inputSuffix: clsx([
			'h-full flex items-center',
			props.variant === 'line' && props.size === 'sm' && 'pl-[0.5rem]',
			props.variant === 'line' && props.size === 'md' && 'pl-[0.75rem]',
			props.variant === 'line' && props.size === 'lg' && 'pl-[1rem]',
			props.variant !== 'line' && props.size === 'sm' && 'pr-[0.5rem]',
			props.variant !== 'line' && props.size === 'md' && 'pr-[0.75rem]',
			props.variant !== 'line' && props.size === 'lg' && 'pr-[1rem]'
		]),
		messageBlock: clsx([
			'mt-[0.25em] text-[var(--pui-text-secondary,#63636e)] dark:text-[var(--pui-text-secondary-in-dark,#a4a4ad)]',
			props.size === 'sm' ? 'text-[0.65rem]' : 'text-[0.75rem]'
		]),
		helperText: '',
		errorMessage: 'text-[var(--pui-error,#e74747)]'
	};
};
