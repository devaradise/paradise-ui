import { Colors, ThemeMode, ThemeModeControl } from '@paradise-ui/common';
import { Dispatch, SetStateAction } from 'react';

export interface ParadiseUIContextProps {
	themeModeControl: ThemeModeControl;
	setThemeModeControl: Dispatch<SetStateAction<ThemeModeControl>>;
	themeMode: ThemeMode;
	setThemeMode: Dispatch<SetStateAction<ThemeMode>>;
}

export interface ParadiseUIProviderProps {
	colors?: Colors;
}
