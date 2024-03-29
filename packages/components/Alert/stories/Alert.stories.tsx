import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src';

const meta = {
	title: 'Component/Feedback/Alert',
	component: Alert,
	parameters: {
		layout: 'padded'
	},
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet'
	}
};
