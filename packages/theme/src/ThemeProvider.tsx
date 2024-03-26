import { PropsWithChildren } from 'react';
import { ThemeProviderProps } from './type';
import { Colors } from '@paradise-ui/common';

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
	const defaultColors: Colors = {};
	const { themeMode = 'light', colors = defaultColors, children } = props;
	return <>{children}</>;
};
