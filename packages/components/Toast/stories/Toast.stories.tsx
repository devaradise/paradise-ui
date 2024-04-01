import type { Args, Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps, ToastProvider, useToast } from '../src';
import { Button } from '../../Button/src/Button';

const meta = {
	title: 'Component/Feedback/Toast',
	component: Toast,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const ComponentWhereToastIsTriggered = (toastProps: ToastProps) => {
	const toast = useToast();
	return <Button label='Trigger a toast' onClick={() => toast.add({ ...toastProps })} />;
};

export const Usage: Story = {
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
