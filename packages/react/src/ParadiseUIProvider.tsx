import { PropsWithChildren, createContext, useState } from 'react';
import { ParadiseUIContextProps, ParadiseUIProviderProps } from './type';
import { ThemeMode, ThemeModeControl, defaultColors } from '@paradise-ui/common';
import { ThemeProvider } from '@paradise-ui/theme';
import { ToastProvider } from '@paradise-ui/toast';
import '@paradise-ui/theme/style';

export const ParadiseUIContext = createContext({} as ParadiseUIContextProps);

export const ParadiseUIProvider = ({ children, colors }: PropsWithChildren<ParadiseUIProviderProps>) => {
	const [themeModeControl, setThemeModeControl] = useState<ThemeModeControl>('system');
	const [themeMode, setThemeMode] = useState<ThemeMode>('light');
	return (
		<ParadiseUIContext.Provider value={{ themeModeControl, setThemeModeControl, themeMode, setThemeMode }}>
			<ThemeProvider themeMode={themeMode} colors={{ ...defaultColors, ...colors }}>
				<ToastProvider>{children}</ToastProvider>
			</ThemeProvider>
		</ParadiseUIContext.Provider>
	);
};
