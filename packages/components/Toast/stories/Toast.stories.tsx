import type { Args, Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider, useToast } from '../src';
import { Button } from '../../Button/src/Button';

const meta = {
	title: 'Component/Feedback/Toast',
	component: Toast,
	parameters: {
		layout: 'centered'
	},
	tags: [],
	argTypes: {}
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const ComponentWhereToastIsTriggered = () => {
	const toast = useToast();
	return (
		<>
			<Button label='Trigger a toast' onClick={() => toast.add({})} />
		</>
	);
};

export const Usage: Story = {
	render: () => (
		<ToastProvider>
			<ComponentWhereToastIsTriggered />
		</ToastProvider>
	)
};

export const ToastComponent: Story = (args: Args) => {
	return <Toast {...args}>This is only for style demo</Toast>;
};
ToastComponent.args = {};
