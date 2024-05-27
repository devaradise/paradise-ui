import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Button } from '../src';
import { EnvelopeSimple, PaperPlaneTilt } from '@phosphor-icons/react';
import { tailwindButtonElementClass } from '../src/elementClass';

const meta = {
	title: 'Component/Form/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		as: {
			options: ['button', 'link'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'button | link' },
				defaultValue: { summary: 'button' }
			}
		},
		type: {
			if: { arg: 'as', eq: 'button' },
			options: ['button', 'reset', 'submit'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'button | reset | submit' },
				defaultValue: { summary: 'button' }
			}
		},
		href: {
			if: { arg: 'as', eq: 'link' },
			type: 'string'
		},
		target: {
			if: { arg: 'as', eq: 'link' },
			options: ['_blank', '_self', '_parent', '_top', 'framename'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: '_blank|_self|_parent|_top|framename' }
			}
		},
		color: {
			options: ['primary', 'secondary', 'info', 'success', 'warning', 'error'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'primary | secondary | info | success | warning | error' },
				defaultValue: { summary: 'primary' }
			}
		},
		variant: {
			options: ['solid', 'outlined', 'text'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'solid | outlined | text' },
				defaultValue: { summary: 'solid' }
			}
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'sm | md | lg' },
				defaultValue: { summary: 'md' }
			}
		},
		leftIcon: {
			table: {
				type: { summary: 'ReactNode' }
			}
		},
		rightIcon: {
			table: {
				type: { summary: 'ReactNode' }
			}
		},
		rounded: {
			type: 'boolean',
			table: {
				defaultValue: { summary: 'false' }
			}
		},
		fullWidth: {
			type: 'boolean',
			table: {
				defaultValue: { summary: 'false' }
			}
		},
		disabled: {
			type: 'boolean',
			table: {
				defaultValue: { summary: 'false' }
			}
		},
		loading: {
			type: 'boolean',
			table: {
				defaultValue: { summary: 'false' }
			}
		},
		loader: {
			table: {
				type: { summary: 'ReactNode' },
				defaultValue: {
					summary: `<Spinner />`
				}
			}
		},
		loaderPosition: {
			options: ['overlay', 'left', 'right'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'overlay | left | right' },
				defaultValue: { summary: 'overlay' }
			}
		},
		onClick: {
			type: 'function'
		},
		onFocus: {
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
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
	parameters: {
		controls: {
			disable: false
		}
	},
	args: {
		as: 'button',
		type: 'button',
		href: '#',
		target: '_blank',
		color: 'primary',
		variant: 'solid',
		size: 'md',
		leftIcon: <PaperPlaneTilt />,
		rightIcon: '',
		rounded: false,
		fullWidth: false,
		disabled: false,
		loading: false,
		loaderPosition: 'overlay',
		children: 'Button'
	},
	render: (args) => {
		return (
			<div className='w-[300px] mx-auto flex justify-center'>
				<Button {...args} />
			</div>
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
		as: 'button',
		type: 'button',
		href: '#',
		target: '_blank',
		color: 'primary',
		variant: 'solid',
		size: 'md',
		leftIcon: <PaperPlaneTilt />,
		rightIcon: '',
		rounded: false,
		fullWidth: false,
		disabled: false,
		loading: false,
		loaderPosition: 'overlay',
		children: 'Button'
	},
	render: (args) => {
		return (
			<div className='w-[300px] mx-auto flex justify-center'>
				<Button {...args} elementClass={tailwindButtonElementClass} />
			</div>
		);
	}
};

export const Basic: StoryFn = () => {
	return (
		<>
			<div style={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
				<Button color='primary'>Primary</Button>
				<Button color='secondary'>Secondary</Button>
				<Button color='info'>Info</Button>
				<Button color='success'>Success</Button>
				<Button color='warning'>Warning</Button>
				<Button color='error'>Error</Button>
			</div>
		</>
	);
};

export const Rounded: StoryFn = () => (
	<div style={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
		<Button rounded color='primary'>
			Primary
		</Button>
		<Button rounded color='secondary'>
			Secondary
		</Button>
		<Button rounded color='info'>
			Info
		</Button>
		<Button rounded color='success'>
			Success
		</Button>
		<Button rounded color='warning'>
			Warning
		</Button>
		<Button rounded color='error'>
			Error
		</Button>
	</div>
);

export const Variants: StoryFn = () => {
	return (
		<>
			<div style={{ display: 'flex', gap: '10px', padding: '10px 0', alignItems: 'center' }}>
				<h3 style={{ width: '130px' }}>Solid</h3>
				<Button color='primary'>Primary</Button>
				<Button color='secondary'>Secondary</Button>
				<Button color='info'>Info</Button>
				<Button color='success'>Success</Button>
				<Button color='warning'>Warning</Button>
				<Button color='error'>Error</Button>
			</div>
			<div style={{ display: 'flex', gap: '10px', padding: '10px 0', alignItems: 'center' }}>
				<h3 style={{ width: '130px' }}>Outlined</h3>
				<Button color='primary' variant='outlined'>
					Primary
				</Button>
				<Button color='secondary' variant='outlined'>
					Secondary
				</Button>
				<Button color='info' variant='outlined'>
					Info
				</Button>
				<Button color='success' variant='outlined'>
					Success
				</Button>
				<Button color='warning' variant='outlined'>
					Warning
				</Button>
				<Button color='error' variant='outlined'>
					Error
				</Button>
			</div>
			<div style={{ display: 'flex', gap: '10px', padding: '10px 0', alignItems: 'center' }}>
				<h3 style={{ width: '130px' }}>Text</h3>
				<Button color='primary' variant='text'>
					Primary
				</Button>
				<Button color='secondary' variant='text'>
					Secondary
				</Button>
				<Button color='info' variant='text'>
					Info
				</Button>
				<Button color='success' variant='text'>
					Success
				</Button>
				<Button color='warning' variant='text'>
					Warning
				</Button>
				<Button color='error' variant='text'>
					Error
				</Button>
			</div>
		</>
	);
};

export const ButtonWithIcons: StoryFn = () => (
	<div style={{ display: 'flex', gap: '10px', padding: '10px 0' }}>
		<Button leftIcon={<PaperPlaneTilt />} color='primary'>
			Left icon
		</Button>
		<Button rightIcon={<PaperPlaneTilt />} color='primary'>
			Right icon
		</Button>
		<Button variant='outlined' leftIcon={<EnvelopeSimple />} rightIcon={<PaperPlaneTilt />} color='primary'>
			Left & Right icon
		</Button>
		<Button variant='outlined' rounded leftIcon={<PaperPlaneTilt />} color='primary'>
			Left icon
		</Button>
		<Button rounded variant='text' rightIcon={<PaperPlaneTilt />} color='primary'>
			Right icon
		</Button>
	</div>
);

export const ButtonStates: StoryFn = () => (
	<>
		<div style={{ display: 'flex', gap: '10px', padding: '10px 0', alignItems: 'center' }}>
			<h3 style={{ width: '130px' }}>Loading</h3>
			<Button loading color='primary'>
				Overlay
			</Button>
			<Button loading loaderPosition='left' color='primary'>
				Left loader
			</Button>
			<Button variant='outlined' loading loaderPosition='right' color='primary'>
				Right loader
			</Button>
			<Button variant='text' loading loaderPosition='right' leftIcon={<PaperPlaneTilt />} color='primary'>
				Right loader
			</Button>
		</div>
		<div style={{ display: 'flex', gap: '10px', padding: '10px 0', alignItems: 'center' }}>
			<h3 style={{ width: '130px' }}>Disabled</h3>
			<Button disabled color='primary'>
				Disabled
			</Button>
			<Button disabled variant='outlined' color='primary'>
				Disabled
			</Button>
			<Button disabled variant='text' color='primary'>
				Disabled
			</Button>
		</div>
	</>
);
