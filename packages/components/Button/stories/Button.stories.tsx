import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src';
import { PaperPlaneTilt } from '@phosphor-icons/react';

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
		rounded: {
			type: 'boolean',
			table: {
				defaultValue: { summary: false }
			}
		},
		disabled: {
			type: 'boolean',
			table: {
				defaultValue: { summary: false }
			}
		},
		loading: {
			type: 'boolean',
			table: {
				defaultValue: { summary: false }
			}
		},
		loader: {
			table: {
				defaultValue: {
					summary: `
						<div className='pui-button-default-loader'>
							<Spinner />
						</div>`
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
		layout: 'centered',
		controls: {
			disable: true
		}
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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
		rounded: false,
		disabled: false,
		loading: false,
		loaderPosition: 'overlay',
		children: 'Button'
	}
};

export const Secondary: Story = {
	args: {
		color: 'secondary',
		children: 'Button'
	}
};

export const Large: Story = {
	args: {
		loading: true,
		size: 'lg',
		children: 'Button'
	}
};

export const Small: Story = {
	args: {
		size: 'sm',
		children: 'Button'
	}
};

export const Warning: Story = {
	args: {
		children: 'Delete now',
		color: 'warning'
	}
};
