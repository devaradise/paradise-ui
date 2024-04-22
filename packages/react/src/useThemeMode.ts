import { ParadiseUIContext, useMediaQuery } from '@paradise-ui/common';
import { useContext, useEffect } from 'react';

export const useThemeMode = () => {
	const { setThemeMode, themeModeControl, setThemeModeControl } = useContext(ParadiseUIContext);
	const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	useEffect(() => {
		// if light/dark assign theme mode to light/dark
		if (themeModeControl === 'light' || themeModeControl === 'dark') {
			setThemeMode(themeModeControl);
		} else {
			setThemeMode(isDarkMode ? 'dark' : 'light');
		}
		// if system, detect the system theme mode, then apply to theme mode state
	}, [themeModeControl, isDarkMode]);

	return {
		themeModeControl,
		setThemeModeControl
	};
};
