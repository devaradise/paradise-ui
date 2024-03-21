import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextField, TextFieldProps } from '../src';
import { Eye, LockKey, User, WarningCircle } from '@phosphor-icons/react';
import { useArgs } from '@storybook/client-api';

const meta = {
	title: 'Component/Form/TextField',
	component: TextField,
	tags: ['autodocs'],
	argTypes: {
		label: {
			type: 'string'
		},
		secondaryLabel: {
			type: 'string'
		},
		variant: {
			options: ['box', 'line', 'filled'],
			control: { type: 'select' },
			table: {
				type: { summary: 'select' },
				defaultValue: { summary: 'box' }
			}
		},
		themeMode: {
			options: ['light', 'dark'],
			control: { type: 'radio' },
			table: {
				type: { summary: 'radio' },
				defaultValue: { summary: 'light' }
			}
		},
		value: {
			type: 'string'
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'select' },
			table: {
				type: { summary: 'select' },
				defaultValue: { summary: 'md' }
			}
		},
		readOnly: {
			control: { type: 'boolean' },
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false }
			}
		},
		invalid: {
			control: { type: 'boolean' },
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false }
			}
		},
		disabled: {
			control: { type: 'boolean' },
			defaultValue: false,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false }
			}
		},
		prefix: {
			type: 'string'
		},
		suffix: {
			type: 'string'
		},
		helperText: {
			type: 'string'
		},
		errorMessage: {
			type: 'string'
		},
		onChange: {
			type: 'function'
		}
	},
	parameters: {
		backgrounds: {
			disable: true
		},
		controls: {
			disable: true
		}
	}
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = (args: TextFieldProps, { globals }) => {
	const [, updateArgs] = useArgs();
	// Update themeMode when global background changed by user
	useEffect(() => {
		updateArgs({ themeMode: globals.backgrounds.value === '#17202A' ? 'dark' : 'light' });
		args.themeMode = globals.backgrounds.value === '#17202A' ? 'dark' : 'light';
	}, [globals.backgrounds]);
	return <TextField {...args} />;
};

Usage.parameters = {
	backgrounds: {
		disable: false
	},
	controls: {
		disable: false
	}
};
Usage.args = {
	label: 'Main label',
	secondaryLabel: 'Secondary label',
	placeholder: 'Placeholder',
	variant: 'box',
	themeMode: 'light',
	size: 'md',
	readOnly: false,
	invalid: false,
	disabled: false,
	prefix: 'Prefix',
	suffix: 'Suffix',
	helperText: 'A note, description or instruction for this text field',
	errorMessage: '',
	onChange: fn()
};

export const Basic: Story = {
	render: () => (
		<>
			<TextField placeholder='Placeholder' label='Label' />
		</>
	)
};

export const Controlled: Story = () => {
	const [value, setValue] = useState<string>('');
	return (
		<>
			<TextField placeholder='Placeholder' value={value} onChange={(value) => setValue(value)} />
			<br />
			Value: {value}
		</>
	);
};
Controlled.args = {};

export const Variants: Story = {
	render: () => (
		<>
			<TextField variant='box' placeholder='Placeholder' />
			<br />
			<TextField variant='line' placeholder='Placeholder' />
			<br />
			<TextField variant='filled' placeholder='Placeholder' />
		</>
	)
};

export const Sizes: Story = {
	render: () => (
		<>
			<TextField size='sm' placeholder='sm: small' />
			<TextField size='md' placeholder='md: medium' />
			<TextField size='lg' placeholder='lg: large' />
		</>
	)
};

export const States: Story = {
	render: () => (
		<>
			<TextField readOnly defaultValue='readOnly' />
			<TextField invalid defaultValue='invalid' />
			<TextField disabled defaultValue='disabled' />
		</>
	)
};

export const LabelsAndMessages: Story = {
	render: () => (
		<>
			<TextField label='Text field' placeholder='Placeholder' secondaryLabel='required' />
			<br />
			<TextField
				label='Text field'
				placeholder='Placeholder'
				secondaryLabel={<div style={{ color: 'red' }}>required</div>}
				helperText='A note, description or instruction for this text field'
			/>
			<br />
			<TextField
				label='Text field'
				placeholder='Placeholder'
				secondaryLabel={<WarningCircle />}
				helperText="A note, description or instruction for this text field'"
				errorMessage='An error message will override helper text'
			/>
		</>
	)
};

export const PrefixAndSuffix: Story = {
	render: () => (
		<>
			<TextField label='Text field' placeholder='Placeholder' prefix='Prefix' />
			<br />
			<TextField label='Text field' placeholder='Placeholder' prefix={<User />} />
			<br />
			<TextField label='Text field' placeholder='Placeholder' suffix='Suffix' />
			<br />
			<TextField label='Text field' placeholder='Placeholder' suffix={<Eye />} />
			<br />
			<TextField label='Text field' placeholder='Placeholder' prefix={<LockKey />} suffix={<Eye />} />
		</>
	)
};
