import { PropsWithChildren, useState } from 'react';
import { ParadiseUIProviderProps } from './type';
import { ParadiseUIContext, ThemeMode, ThemeModeControl, defaultColors } from '@paradise-ui/common';
import { ThemeProvider } from '@paradise-ui/theme';
import { ToastProvider } from '@paradise-ui/toast';

export const ParadiseUIProvider = (props: PropsWithChildren<ParadiseUIProviderProps>) => {
	const { children, colors, elementClassLibrary = 'pui', componentElementClasses = {} } = props;

	const [themeModeControl, setThemeModeControl] = useState<ThemeModeControl>('system');
	const [themeMode, setThemeMode] = useState<ThemeMode>('light');
	return (
		<ParadiseUIContext.Provider
			value={{ themeModeControl, setThemeModeControl, themeMode, setThemeMode, elementClassLibrary, componentElementClasses }}>
			<ThemeProvider themeMode={themeMode} colors={{ ...defaultColors, ...colors }}>
				<ToastProvider>{children}</ToastProvider>
			</ThemeProvider>
		</ParadiseUIContext.Provider>
	);
};
