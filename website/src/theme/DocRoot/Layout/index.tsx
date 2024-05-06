import React, { useState } from 'react';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import type { Props } from '@theme/DocRoot/Layout';
import { ParadiseUIProvider } from '@paradise-ui/react';
import '@paradise-ui/react/style';
import styles from './styles.module.css';

export default function DocRootLayout({ children }: Props): JSX.Element {
	const sidebar = useDocsSidebar();
	const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
	return (
		<ParadiseUIProvider>
			<div className={styles.docsWrapper}>
				<BackToTopButton />
				<div className={styles.docRoot}>
					{sidebar && (
						<DocRootLayoutSidebar
							sidebar={sidebar.items}
							hiddenSidebarContainer={hiddenSidebarContainer}
							setHiddenSidebarContainer={setHiddenSidebarContainer}
						/>
					)}
					<DocRootLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>{children}</DocRootLayoutMain>
				</div>
			</div>
		</ParadiseUIProvider>
	);
}
