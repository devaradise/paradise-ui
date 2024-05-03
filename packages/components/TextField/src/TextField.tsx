import { forwardRef, useContext, useEffect, useId, useState } from 'react';
import { TextFieldElementClass, TextFieldElementClassProps, TextFieldProps } from './type';
import { ElementClassManager, ParadiseUIContext } from '@paradise-ui/common';
import { defaultTextFieldElementClass, tailwindTextFieldElementClass } from './elementClass';
import clsx from 'clsx';
import './style.scss';

export const TextField = forwardRef<
	HTMLInputElement,
	TextFieldProps & ElementClassManager<TextFieldElementClassProps, TextFieldElementClass>
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
		extraElementClass,
		...rest
	} = props;

	const puiContext = useContext(ParadiseUIContext);
	const [focus, setFocus] = useState<boolean>(false);
	const elementClassProps = { variant, size, type, invalid, disabled, ...props, focus };
	const [textFieldElementClass, setTextFieldElementClass] = useState<TextFieldElementClass>(
		defaultTextFieldElementClass(elementClassProps)
	);

	useEffect(() => {
		let newElementClass = defaultTextFieldElementClass(elementClassProps);
		if (puiContext) {
			if (puiContext.elementClassLibrary === 'tailwind') {
				newElementClass = tailwindTextFieldElementClass(elementClassProps);
			}

			newElementClass = {
				...newElementClass,
				...((puiContext.componentElementClasses?.textField && puiContext.componentElementClasses?.textField(elementClassProps)) || {})
			};
		}
		if (elementClass) {
			newElementClass = { ...newElementClass, ...elementClass(elementClassProps) };
		}
		setTextFieldElementClass(newElementClass);
	}, [props, focus]);

	const id = useId();
	const inputId = `${id}-${name}`;
	const descriptionId = `${id}-description`;

	return (
		<div className={clsx(textFieldElementClass.root, extraElementClass?.root)} aria-disabled={disabled}>
			<div className={clsx(textFieldElementClass.labelBlock, extraElementClass?.labelBlock)}>
				<label className={clsx(textFieldElementClass.label, extraElementClass?.label)}>{label}</label>
				{!!secondaryLabel && (
					<label className={clsx(textFieldElementClass.secondaryLabel, extraElementClass?.secondaryLabel)}>{secondaryLabel}</label>
				)}
			</div>
			<div className={clsx(textFieldElementClass.inputBlock, extraElementClass?.inputBlock)}>
				{prefix && <div className={clsx(textFieldElementClass.inputPrefix, extraElementClass?.inputPrefix)}>{prefix}</div>}
				<input
					ref={ref}
					name={name}
					className={clsx(textFieldElementClass.input, extraElementClass?.input)}
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
				{suffix && <div className={clsx(textFieldElementClass.inputSuffix, extraElementClass?.inputSuffix)}>{suffix}</div>}
			</div>
			<div className={clsx(textFieldElementClass.messageBlock, extraElementClass?.messageBlock)}>
				{!errorMessage ? (
					<div className={clsx(textFieldElementClass.helperText, extraElementClass?.helperText)}>{helperText}</div>
				) : (
					<div className={clsx(textFieldElementClass.errorMessage, extraElementClass?.errorMessage)}>{errorMessage}</div>
				)}
			</div>
		</div>
	);
});
