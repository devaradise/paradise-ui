import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../src';
import { useArgs } from '@storybook/client-api';
import { defaultColors } from '@paradise-ui/common';
import { TextField } from '../../components/TextField/src';
import { ThemeProviderProps } from '../src/type';
import { Alert } from '../../components/Alert/src';

const meta = {
	title: 'Provider/ThemeProvider',
	component: ThemeProvider,
	tags: ['autodocs'],
	argTypes: {
		themeMode: {
			options: ['light', 'dark'],
			control: { type: 'radio' },
			table: {
				type: { summary: 'radio' },
				defaultValue: { summary: 'light' }
			}
		},
		colors: {
			control: { type: 'object' },
			table: {
				type: { summary: 'object' },
				defaultValue: { summary: JSON.stringify(defaultColors) }
			}
		}
	}
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Usage: Story = (args: ThemeProviderProps, { globals }: { globals: { [key: string]: any } }) => {
	const [, updateArgs] = useArgs();
	// Update themeMode when global background changed by user
	useEffect(() => {
		if (globals.backgrounds) {
			updateArgs({ themeMode: globals?.backgrounds?.value === '#101317' ? 'dark' : 'light' });
			args.themeMode = globals?.backgrounds?.value === '#101317' ? 'dark' : 'light';
		}
	}, [globals.backgrounds]);
	return (
		<ThemeProvider {...args}>
			<h2>Paradise UI Components</h2>
			<TextField label='Textfield inside theme' />
			<br />
			<Alert>Info alert inside theme</Alert>
			<br />
			<Alert type='success'>Success alert inside theme</Alert>
			<br />
			<Alert type='warning'>Warning alert inside theme</Alert>
			<br />
			<Alert type='error'>Error alert inside theme</Alert>
		</ThemeProvider>
	);
};

Usage.args = {
	themeMode: window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
	colors: defaultColors
};
