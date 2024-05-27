import { FormEvent, forwardRef, useContext, useEffect, useId, useState } from 'react';
import { TextAreaElementClass, TextAreaElementClassProps, TextAreaProps } from './type';
import { ElementClassManager, ParadiseUIContext } from '@paradise-ui/common';
import { defaultTextAreaElementClass, tailwindTextAreaElementClass } from './elementClass';
import clsx from 'clsx';

export const TextArea = forwardRef<
	HTMLTextAreaElement,
	TextAreaProps & ElementClassManager<TextAreaElementClassProps, TextAreaElementClass>
>((props, ref) => {
	const {
		label = '',
		secondaryLabel = '',
		variant = 'outlined',
		size = 'md',
		autoResize = false,
		name = '',
		className = '',
		placeholder = '',
		value,
		invalid = false,
		disabled = false,
		errorMessage = '',
		helperText = '',
		onChange,
		elementClass,
		extraElementClass,
		...rest
	} = props;

	const puiContext = useContext(ParadiseUIContext);
	const [focus, setFocus] = useState<boolean>(false);
	const elementClassProps = { variant, size, invalid, disabled, ...props, focus };
	const [TextAreaElementClass, setTextAreaElementClass] = useState<TextAreaElementClass>(defaultTextAreaElementClass(elementClassProps));

	useEffect(() => {
		let newElementClass = defaultTextAreaElementClass(elementClassProps);
		if (puiContext) {
			if (puiContext.elementClassLibrary === 'tailwind') {
				newElementClass = tailwindTextAreaElementClass(elementClassProps);
			}

			newElementClass = {
				...newElementClass,
				...((puiContext.componentElementClasses?.textArea && puiContext.componentElementClasses?.textArea(elementClassProps)) || {})
			};
		}
		if (elementClass) {
			newElementClass = { ...newElementClass, ...elementClass(elementClassProps) };
		}
		setTextAreaElementClass(newElementClass);
	}, [props, focus]);

	const resize = (e: FormEvent<HTMLTextAreaElement>) => {
		if (autoResize) {
			e.currentTarget.style.height = 'auto';
			e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
		}
	};

	const id = useId();
	const inputId = `${id}-${name}`;
	const descriptionId = `${id}-description`;

	return (
		<div className={clsx(TextAreaElementClass.root, extraElementClass?.root)} aria-disabled={disabled}>
			<div className={clsx(TextAreaElementClass.labelBlock, extraElementClass?.labelBlock)}>
				<label className={clsx(TextAreaElementClass.label, extraElementClass?.label)}>{label}</label>
				{!!secondaryLabel && (
					<label className={clsx(TextAreaElementClass.secondaryLabel, extraElementClass?.secondaryLabel)}>{secondaryLabel}</label>
				)}
			</div>
			<textarea
				ref={ref}
				name={name}
				className={clsx(TextAreaElementClass.textarea, extraElementClass?.textarea)}
				disabled={disabled}
				aria-disabled={disabled}
				onInput={resize}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					if (e.target.value !== value) {
						!!onChange && onChange(e.target.value);
					}
				}}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				placeholder={placeholder}
				id={inputId}
				aria-describedby={descriptionId}
				{...rest}>
				{value}
			</textarea>
			<div className={clsx(TextAreaElementClass.messageBlock, extraElementClass?.messageBlock)}>
				{!errorMessage ? (
					<div className={clsx(TextAreaElementClass.helperText, extraElementClass?.helperText)}>{helperText}</div>
				) : (
					<div className={clsx(TextAreaElementClass.errorMessage, extraElementClass?.errorMessage)}>{errorMessage}</div>
				)}
			</div>
		</div>
	);
});
