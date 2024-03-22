/**
 * 📝 Notes for Contributors:
 *
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 *
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 *
 */
import { ButtonProps } from './type';
import './style.scss';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	return (
		<button
			type='button'
			className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
			style={{ backgroundColor }}
			{...props}>
			{label}
		</button>
	);
};
