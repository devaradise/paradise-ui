import React from 'react';
import { composeProviders } from '@docusaurus/theme-common';
import {
	AnnouncementBarProvider,
	ColorModeProvider,
	DocsPreferredVersionContextProvider,
	NavbarProvider,
	PluginHtmlClassNameProvider,
	ScrollControllerProvider
} from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/Layout/Provider';
import { ParadiseUIProvider } from '@paradise-ui/react';
import '@paradise-ui/react/style';

const Provider = composeProviders([
	ParadiseUIProvider,
	ColorModeProvider,
	AnnouncementBarProvider,
	ScrollControllerProvider,
	DocsPreferredVersionContextProvider,
	PluginHtmlClassNameProvider,
	NavbarProvider
]);

export default function LayoutProvider({ children }: Props): JSX.Element {
	return <Provider>{children}</Provider>;
}
