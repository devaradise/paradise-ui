import { ChangeEvent, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Button, ParadiseUIProvider, TextField, useThemeMode } from '../src';
import { ThemeModeControl, defaultColors } from '@paradise-ui/common';
import { ParadiseUIProviderProps } from '../src/type';

const meta = {
	title: 'Provider/ParadiseUIProvider',
	component: ParadiseUIProvider,
	tags: ['autodocs'],
	argTypes: {
		colors: {
			control: { type: 'object' },
			table: {
				type: { summary: 'object' },
				defaultValue: { summary: JSON.stringify(defaultColors) }
			}
		}
	},
	parameters: {
		docs: {
			source: {
				code: `
const AppComponent = () => {
  const { themeModeControl, setThemeModeControl } = useThemeMode();

  const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setThemeModeControl(e?.target?.value as ThemeModeControl);
  };

  return (
    <div>
      <h2>Theme Mode</h2>
      <input type='radio' name='themeMode' id='theme-light' value='light' checked={themeModeControl === 'light'} onChange={onRadioChange} />
      <label htmlFor='theme-light'>Light</label>
      <input
        type='radio'
        name='themeMode'
        id='theme-system'
        value='system'
        checked={themeModeControl === 'system'}
        onChange={onRadioChange}
      />
      <label htmlFor='theme-system'>System</label>
      <input type='radio' name='themeMode' id='theme-dark' value='dark' checked={themeModeControl === 'dark'} onChange={onRadioChange} />
      <label htmlFor='theme-dark'>Dark</label>
      {themeModeControl === 'system' && (
        <p>
          <small>Activate/deactivate system (OS or browser) dark mode to see the changes</small>
        </p>
      )}
      <br />
      <br />
      <h2>Paradise UI Components</h2>
      <TextField label='Textfield inside ParadiseUIProvider' />
      <br />
      <Alert>Info alert inside ParadiseUIProvider</Alert>
      <br />
      <Alert type='success'>Success alert inside ParadiseUIProvider</Alert>
      <br />
      <Alert type='warning'>Warning alert inside ParadiseUIProvider</Alert>
      <br />
      <Alert type='error'>Error alert inside ParadiseUIProvider</Alert>
      <br />
      <div style={{ display: 'flex', gap: '16px', padding: '10px 0' }}>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='info'>Info</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
        <Button color='error'>Error</Button>
      </div>
    </div>
  );
};

================================================

<ParadiseUIProvider
  colors={{
    border: '#c3c7d0',
    borderInDark: '#4a4c4f',
    componentSurface: '#fff',
    componentSurfaceDark: '#212327',
    error: '#e74747',
    info: '#008DDA',
    inputFiller: '#f0f0f2',
    inputFillerDark: '#313437',
    primary: '#1BA7F1',
    secondary: '#4a667b',
    softBorder: '#dadce3',
    softBorderInDark: '#373a3a',
    success: '#40b64f',
    text: '#31333e',
    textInDark: '#e7e7e9',
    textSecondary: '#63636e',
    textSecondaryInDark: '#a4a4ad',
    themeBackground: '#fff',
    themeBackgroundDark: '#101317',
    warning: '#FBA834'
  }}
>
  <AppComponent />
</ParadiseUIProvider>
        `
			}
		},
		backgrounds: {
			disable: true
		}
	}
} satisfies Meta<typeof ParadiseUIProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const AppComponent = () => {
	const { themeModeControl, setThemeModeControl } = useThemeMode();

	const onRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
		setThemeModeControl(e?.target?.value as ThemeModeControl);
	};

	return (
		<div>
			<h2>Theme Mode</h2>
			<input type='radio' name='themeMode' id='theme-light' value='light' checked={themeModeControl === 'light'} onChange={onRadioChange} />
			<label htmlFor='theme-light'>Light</label>
			<input
				type='radio'
				name='themeMode'
				id='theme-system'
				value='system'
				checked={themeModeControl === 'system'}
				onChange={onRadioChange}
			/>
			<label htmlFor='theme-system'>System</label>
			<input type='radio' name='themeMode' id='theme-dark' value='dark' checked={themeModeControl === 'dark'} onChange={onRadioChange} />
			<label htmlFor='theme-dark'>Dark</label>
			{themeModeControl === 'system' && (
				<p>
					<small>Activate/deactivate system (OS or browser) dark mode to see the changes</small>
				</p>
			)}
			<br />
			<br />
			<h2>Paradise UI Components</h2>
			<TextField label='Textfield inside ParadiseUIProvider' />
			<br />
			<Alert>Info alert inside ParadiseUIProvider</Alert>
			<br />
			<Alert type='success'>Success alert inside ParadiseUIProvider</Alert>
			<br />
			<Alert type='warning'>Warning alert inside ParadiseUIProvider</Alert>
			<br />
			<Alert type='error'>Error alert inside ParadiseUIProvider</Alert>
			<br />
			<div style={{ display: 'flex', gap: '16px', padding: '10px 0' }}>
				<Button color='primary'>Primary</Button>
				<Button color='secondary'>Secondary</Button>
				<Button color='info'>Info</Button>
				<Button color='success'>Success</Button>
				<Button color='warning'>Warning</Button>
				<Button color='error'>Error</Button>
			</div>
		</div>
	);
};

export const Usage: Story = (args: ParadiseUIProviderProps) => {
	return (
		<ParadiseUIProvider {...args}>
			<AppComponent />
		</ParadiseUIProvider>
	);
};

Usage.args = {
	colors: { ...defaultColors, primary: '#ff0000' }
};
