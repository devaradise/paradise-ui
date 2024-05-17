import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextArea, TextAreaElementClassProps } from '../src';
import { WarningCircle } from '@phosphor-icons/react';
import clsx from 'clsx';
import { tailwindTextAreaElementClass } from '../src/elementClass';

const meta = {
	title: 'Component/Form/TextArea',
	component: TextArea,
	tags: ['autodocs'],
	argTypes: {
		label: {
			type: 'string'
		},
		secondaryLabel: {
			type: 'string'
		},
		variant: {
			options: ['outlined', 'line', 'filled'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'outlined | line | filled' },
				defaultValue: { summary: 'outlined' }
			}
		},
		value: {
			type: 'string'
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'sm | md | lg' },
				defaultValue: { summary: 'md' }
			}
		},
		readOnly: {
			control: { type: 'boolean' },
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		invalid: {
			control: { type: 'boolean' },
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		disabled: {
			control: { type: 'boolean' },
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		helperText: {
			type: 'string'
		},
		errorMessage: {
			type: 'string'
		},
		onChange: {
			type: 'function'
		},
		className: {
			type: 'string'
		}
	},
	parameters: {
		controls: {
			disable: true
		}
	},
	decorators: [
		(Story: any) => {
			return (
				<form style={{ width: '100%', maxWidth: '500px', margin: 'auto' }}>
					{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
					<Story />
				</form>
			);
		}
	]
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
	parameters: {
		controls: {
			disable: false
		}
	},
	args: {
		label: 'Main label',
		secondaryLabel: 'Secondary label',
		placeholder: 'Placeholder',
		variant: 'outlined',
		rows: 3,
		size: 'md',
		autoResize: false,
		readOnly: false,
		invalid: false,
		disabled: false,
		helperText: 'A note, description or instruction for this Text area',
		errorMessage: '',
		onChange: fn()
	},
	render: (args) => {
		return (
			<>
				<TextArea {...args} />
			</>
		);
	}
};

export const UsageWithTailwindClass: Story = {
	parameters: {
		controls: {
			disable: false
		}
	},
	args: {
		label: 'Main label',
		secondaryLabel: 'Secondary label',
		placeholder: 'Placeholder',
		variant: 'outlined',
		rows: 3,
		size: 'md',
		autoResize: false,
		readOnly: false,
		invalid: false,
		disabled: false,
		helperText: 'A note, description or instruction for this Text area',
		errorMessage: '',
		onChange: fn()
	},
	render: (args) => {
		return <TextArea {...args} elementClass={tailwindTextAreaElementClass} />;
	}
};

export const Basic: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder'
	}
};

export const Controlled: Story = () => {
	const [value, setValue] = useState<string>('');
	return (
		<>
			<TextArea placeholder='Placeholder' value={value} onChange={(value) => setValue(value)} />
			<br />
			Value: {value}
		</>
	);
};
Controlled.args = {};

export const Variants: Story = {
	render: () => (
		<>
			<TextArea variant='outlined' placeholder='Placeholder' />
			<br />
			<TextArea variant='line' placeholder='Placeholder' />
			<br />
			<TextArea variant='filled' placeholder='Placeholder' />
		</>
	)
};

export const Sizes: Story = {
	render: () => (
		<>
			<TextArea size='sm' placeholder='sm: small' />
			<TextArea size='md' placeholder='md: medium' />
			<TextArea size='lg' placeholder='lg: large' />
		</>
	)
};

export const States: Story = {
	render: () => (
		<>
			<TextArea readOnly defaultValue='readOnly' />
			<TextArea invalid defaultValue='invalid' />
			<TextArea disabled defaultValue='disabled' />
		</>
	)
};

export const LabelsAndMessages: Story = {
	render: () => (
		<>
			<TextArea label='Text area' placeholder='Placeholder' secondaryLabel='required' />
			<br />
			<TextArea
				label='Text area'
				placeholder='Placeholder'
				secondaryLabel={<div style={{ color: 'red' }}>required</div>}
				helperText='A note, description or instruction for this Text area'
			/>
			<br />
			<TextArea
				label='Text area'
				placeholder='Placeholder'
				secondaryLabel={<WarningCircle />}
				helperText="A note, description or instruction for this Text area'"
				errorMessage='An error message will override helper text'
			/>
		</>
	)
};

export const AdvancedCustomisation: Story = () => {
	const customTextAreaElementClass = (props: TextAreaElementClassProps) => {
		return {
			root: clsx([
				'custom-text-area',
				`custom-text-area-${props.variant}`,
				`custom-text-area-${props.size}`,
				!!props.errorMessage || props.invalid ? `custom-text-area-error` : '',
				props.focus ? 'custom-text-area-focus' : '',
				props.disabled ? `custom-text-area-disabled` : '',
				props.className
			]),
			labelBlock: 'custom-text-area-label-block',
			label: 'custom-text-area-label',
			secondaryLabel: 'custom-text-area-label-secondary',
			inputBlock: 'custom-text-area-input-block',
			inputPrefix: 'custom-text-area-input-prefix',
			input: 'custom-text-area-input',
			inputSuffix: 'custom-text-area-input-suffix',
			messageBlock: 'custom-text-area-message-block',
			helperText: 'custom-text-area-helper-text',
			errorMessage: 'custom-text-area-error-message'
		};
	};
	return (
		<>
			<h3 className='mb-4'>Inspect the component classes to see how the element classes changed.</h3>
			<TextArea label='Label' secondaryLabel='Secondary label' placeholder='Placeholder' elementClass={customTextAreaElementClass} />
		</>
	);
};
AdvancedCustomisation.args = {};
