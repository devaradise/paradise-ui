import ComponentDocTabs from './../../../src/components/DocComponents/ComponentDocTabs';
import ComponentDocLinks from './../../../src/components/DocComponents/ComponentDocLinks';
import { GithubLogo, NpmLogo, StorybookLogo } from './../../../src/components/DocComponents/Logo';

const Header = ({ activeTab }: { activeTab: number }) => {
	return (
		<>
			<h1>Alert</h1>
			<ComponentDocLinks
				links={[
					{
						icon: <GithubLogo />,
						label: 'Source Code',
						url: 'https://github.com/devaradise/paradise-ui/tree/main/packages/components/Alert'
					},
					{
						icon: <StorybookLogo />,
						label: 'Storybook',
						url: 'https://storybook.paradise-ui.com/?path=/docs/component-feedback-alert--docs'
					},
					{ icon: <NpmLogo />, label: '@paradise-ui/alert', url: 'https://www.npmjs.com/package/@paradise-ui/alert' }
				]}
			/>

			<p>Alert is a component to display contextual messages such as information, success, warning and error messages.</p>

			<ComponentDocTabs
				tabMenuList={[
					{ label: 'Usage', url: '/docs/components/alert', isActive: activeTab === 0 },
					{ label: 'API', url: '/docs/components/alert/api', isActive: activeTab === 1 },
					{ label: 'Customization', url: '/docs/components/alert/customization', isActive: activeTab === 2 }
				]}
			/>
		</>
	);
};

export default Header;
