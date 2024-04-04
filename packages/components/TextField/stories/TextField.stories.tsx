import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextField } from '../src';
import { Eye, EyeSlash, LockKey, User, WarningCircle } from '@phosphor-icons/react';

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
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'box | line | filled' },
				defaultValue: { summary: 'box' }
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
				<div style={{ width: '100%', maxWidth: '500px', margin: '50px auto' }}>
					{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
					<Story />
				</div>
			);
		}
	]
} satisfies Meta<typeof TextField>;

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
		variant: 'box',
		size: 'md',
		readOnly: false,
		invalid: false,
		disabled: false,
		prefix: 'Prefix',
		suffix: 'Suffix',
		helperText: 'A note, description or instruction for this text field',
		errorMessage: '',
		onChange: fn()
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

export const PasswordField: Story = () => {
	const [value, setValue] = useState<string>('');
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<TextField
			label='Password'
			placeholder='Placeholder'
			type={visible ? 'text' : 'password'}
			value={value}
			onChange={(value) => setValue(value)}
			prefix={<LockKey />}
			suffix={
				<div style={{ cursor: 'pointer' }} onClick={() => setVisible(!visible)}>
					{visible ? <EyeSlash /> : <Eye />}
				</div>
			}
		/>
	);
};
PasswordField.args = {};
