import { PropsWithChildren, useEffect } from 'react';
import { ThemeProviderProps } from './type';
import { defaultColors, injectCssVariables, useMediaQuery } from '@paradise-ui/common';
import './style.scss';

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
	const defaultMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
	const { themeMode = defaultMode, colors = defaultColors, children } = props;

	useEffect(() => {
		injectCssVariables({ ...defaultColors, ...colors }, 'theme');
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute('data-pui-theme-mode', themeMode);
		document.documentElement.setAttribute('style', `color-scheme: ${themeMode};`);
		if (themeMode === 'dark') {
			document.body.classList.remove('pui-light-mode');
			document.body.classList.add(`pui-dark-mode`);
		} else {
			document.body.classList.remove(`pui-dark-mode`);
			document.body.classList.add('pui-light-mode');
		}
	}, [themeMode]);

	return <>{children}</>;
};
