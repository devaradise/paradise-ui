const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const kebabCase = (str) => {
	return str.replace(/([a-z0–9])([A-Z])/g, '$1-$2').toLowerCase();
};

const camelCase = (str) => {
	return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

// const workspaces = ["components", "utils", "core"]

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
	plop.setHelper('capitalize', (text) => {
		return capitalize(camelCase(text));
	});
	plop.setHelper('kebabCase', (text) => {
		return kebabCase(text);
	});

	plop.setGenerator('component', {
		description: 'Generates a component package',
		prompts: [
			{
				type: 'input',
				name: 'componentName',
				message: 'Enter component name (eg. ComponentName): '
			},
			{
				type: 'list',
				name: 'category',
				message: 'Enter component category: ',
				choices: ['Form', 'Panel', 'Data', 'Overlay', 'Feedback', 'Menu', 'Media', 'Misc']
			},
			{
				type: 'input',
				name: 'description',
				message: 'The description of this component:'
			}
		],
		actions(answers) {
			const actions = [];

			if (!answers) return actions;

			const { componentName, category, description } = answers;

			actions.push({
				type: 'addMany',
				templateFiles: 'plop/component/**',
				destination: `./packages/components/{{capitalize componentName}}`,
				base: 'plop/component',
				data: { componentName, category, description },
				abortOnFail: true
			});

			return actions;
		}
	});
};
