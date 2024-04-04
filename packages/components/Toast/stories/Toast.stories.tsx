import type { Args, Meta, StoryFn, StoryObj } from '@storybook/react';
import { Toast, ToastProps, ToastProvider, useToast } from '../src';
import { Button } from '../../Button/src/Button';

const meta = {
	title: 'Component/Feedback/Toast',
	component: Toast,
	parameters: {
		layout: 'centered',
		controls: {
			disable: true
		}
	},
	tags: ['autodocs'],
	argTypes: {
		position: {
			options: ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'],
			control: { type: 'select' },
			table: {
				type: { summary: 'topLeft | topCenter | topRight | bottomLeft | bottomCenter | bottomRight' },
				defaultValue: { summary: 'topCenter' }
			}
		},
		variant: {
			options: ['subtle', 'solid', 'outlined', 'left-bordered'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'subtle | solid | outlined | left-bordered' },
				defaultValue: { summary: 'subtle' }
			}
		},
		type: {
			options: ['info', 'success', 'warning', 'error'],
			control: { type: 'inline-radio' },
			table: {
				type: { summary: 'info | success | warning | error' },
				defaultValue: { summary: 'info' }
			}
		}
	}
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const ComponentWhereToastIsTriggered = (toastProps: ToastProps) => {
	const toast = useToast();
	return <Button onClick={() => toast.add({ ...toastProps })}>Trigger a toast</Button>;
};

export const Usage: Story = {
	parameters: {
		docs: {
			format: true,
			source: {
				code: `
import { ToastProvider, useToast } from '../src';

const ComponentWhereToastIsTriggered = (toastProps: ToastProps) => {
  const toast = useToast();
  return <Button onClick={() => toast.add({ ...toastProps })}>Trigger a toast</Button>;
};

const Usage: Story = {
  render: (args) => (
    <ToastProvider>
      <ComponentWhereToastIsTriggered {...args}/>
    </ToastProvider>
  )
};
        `
			}
		},
		controls: {
			disable: false
		}
	},
	args: {
		position: 'topCenter',
		variant: 'subtle',
		type: 'info',
		autoDismiss: 3000,
		description: 'This is an example toast'
	},
	render: (args: Args) => (
		<ToastProvider>
			<ComponentWhereToastIsTriggered {...args} />
		</ToastProvider>
	)
};

export const Examples: StoryFn = () => {
	const ChildComponent = () => {
		const toast = useToast();
		return (
			<>
				<div style={{ display: 'flex', gap: '10px', paddingBottom: '20px', justifyContent: 'center' }}>
					<Button size='sm' onClick={() => toast.add({ position: 'topLeft', description: 'This is toast example in top left' })}>
						Info (Top left)
					</Button>
					<Button
						size='sm'
						onClick={() => toast.add({ position: 'topCenter', description: 'This is toast example in top center', type: 'success' })}>
						Success (Top center)
					</Button>
					<Button
						size='sm'
						onClick={() => toast.add({ position: 'topRight', description: 'This is toast example in top right', type: 'warning' })}>
						Warning (Top right)
					</Button>
				</div>
				<div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
					<Button size='sm' onClick={() => toast.add({ position: 'bottomLeft', description: 'This is toast example in bottom left' })}>
						Info (Bottom left)
					</Button>
					<Button
						size='sm'
						onClick={() => toast.add({ position: 'bottomCenter', description: 'This is toast example in bottom center', type: 'success' })}>
						Success (Bottom center)
					</Button>
					<Button
						size='sm'
						onClick={() => toast.add({ position: 'bottomRight', description: 'This is toast example in bottom right', type: 'warning' })}>
						Warning (Bottom right)
					</Button>
				</div>
			</>
		);
	};
	return (
		<ToastProvider>
			<ChildComponent />
		</ToastProvider>
	);
};
