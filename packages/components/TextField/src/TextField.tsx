import { forwardRef, useContext, useEffect, useId, useState } from 'react';
import { TextFieldElementClass, TextFieldProps } from './type';
import { ElementClassManager, ParadiseUIContext } from '@paradise-ui/common';
import { defaultTextFieldElementClass } from './elementClass';
import clsx from 'clsx';
import './style.scss';

export const TextField = forwardRef<
	HTMLInputElement,
	TextFieldProps & ElementClassManager<TextFieldProps & { focus: boolean }, TextFieldElementClass>
>((props, ref) => {
	const {
		label = '',
		secondaryLabel = '',
		variant = 'outlined',
		size = 'md',
		name = '',
		type = 'text',
		className = '',
		placeholder = '',
		value,
		invalid = false,
		disabled = false,
		prefix = '',
		suffix = '',
		errorMessage = '',
		helperText = '',
		onChange,
		elementClass,
		additionalElementClass,
		...rest
	} = props;

	const puiContext = useContext(ParadiseUIContext);
	const [focus, setFocus] = useState<boolean>(false);
	const [textFieldElementClass, setTextFieldElementClass] = useState<TextFieldElementClass>(
		defaultTextFieldElementClass({ variant, size, invalid, disabled, ...props, focus })
	);

	useEffect(() => {
		let newElementClass = defaultTextFieldElementClass({ variant, size, invalid, disabled, ...props, focus });
		if (puiContext) {
			newElementClass = { ...newElementClass, ...(puiContext.componentElementClasses?.textField || {}) };
		}
		if (elementClass) {
			newElementClass = { ...newElementClass, ...elementClass({ variant, size, invalid, disabled, ...props, focus }) };
		}
		setTextFieldElementClass(newElementClass);
	}, [elementClass, focus]);

	const id = useId();
	const inputId = `${id}-${name}`;
	const descriptionId = `${id}-description`;

	return (
		<div className={clsx(textFieldElementClass.root, additionalElementClass?.root)} aria-disabled={disabled}>
			<div className={clsx(textFieldElementClass.labelBlock, additionalElementClass?.labelBlock)}>
				<label className={clsx(textFieldElementClass.label, additionalElementClass?.label)}>{label}</label>
				{!!secondaryLabel && (
					<label className={clsx(textFieldElementClass.secondaryLabel, additionalElementClass?.secondaryLabel)}>{secondaryLabel}</label>
				)}
			</div>
			<div className={clsx(textFieldElementClass.inputBlock, additionalElementClass?.inputBlock)}>
				{prefix && <div className={clsx(textFieldElementClass.inputPrefix, additionalElementClass?.inputPrefix)}>{prefix}</div>}
				<input
					ref={ref}
					name={name}
					className={clsx(textFieldElementClass.input, additionalElementClass?.input)}
					type={type}
					disabled={disabled}
					aria-disabled={disabled}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						if (e.target.value !== value) {
							!!onChange && onChange(e.target.value);
						}
					}}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					placeholder={placeholder}
					value={value}
					id={inputId}
					aria-describedby={descriptionId}
					{...rest}
				/>
				{suffix && <div className={clsx(textFieldElementClass.inputSuffix, additionalElementClass?.inputSuffix)}>{suffix}</div>}
			</div>
			<div className={clsx(textFieldElementClass.messageBlock, additionalElementClass?.messageBlock)}>
				{!errorMessage ? (
					<div className={clsx(textFieldElementClass.helperText, additionalElementClass?.helperText)}>{helperText}</div>
				) : (
					<div className={clsx(textFieldElementClass.errorMessage, additionalElementClass?.errorMessage)}>{errorMessage}</div>
				)}
			</div>
		</div>
	);
});
