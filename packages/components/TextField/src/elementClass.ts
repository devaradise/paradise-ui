import { TextFieldElementClass, TextFieldProps } from './type';
import { ElementClassGenerator } from '@paradise-ui/common';
import clsx from 'clsx';

export const defaultTextFieldElementClass: ElementClassGenerator<TextFieldProps & { focus: boolean }, TextFieldElementClass> = (
	props: TextFieldProps & { focus: boolean }
) => {
	return {
		root: clsx([
			'pui-text-field',
			`pui-text-field-${props.variant}`,
			`pui-text-field-${props.size}`,
			!!props.errorMessage || props.invalid ? `pui-text-field-error` : '',
			props.focus ? 'pui-text-field-focus' : '',
			props.disabled ? `pui-text-field-disabled` : '',
			props.className
		]),
		labelBlock: 'pui-text-field-label-block',
		label: 'pui-text-field-label',
		secondaryLabel: 'pui-text-field-label-secondary',
		inputBlock: 'pui-text-field-input-block',
		inputPrefix: 'pui-text-field-input-prefix',
		input: 'pui-text-field-input',
		inputSuffix: 'pui-text-field-input-suffix',
		messageBlock: 'pui-text-field-message-block',
		helperText: 'pui-text-field-helper-text',
		errorMessage: 'pui-text-field-error-message'
	};
};
