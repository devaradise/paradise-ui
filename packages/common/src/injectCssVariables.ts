import { Colors } from './type';
import { lightenColor } from './color';
import { kebabCase } from './utils/string';

export const injectCssVariables = (colors: Colors, injectSource?: string) => {
	const existingStyleElement = document.getElementById('pui-variables');
	existingStyleElement?.remove();

	const styleElement = document.createElement('style');
	styleElement.setAttribute('id', 'pui-variables');
	if (injectSource) {
		styleElement.setAttribute('data-inject-source', injectSource);
	}

	let variables = ``;
	for (const key of Object.keys(colors)) {
		if (colors[key as keyof Colors]) {
			variables += `--pui-${kebabCase(key)}: ${colors[key as keyof Colors]};\n`;
			switch (key) {
				case 'info':
				case 'success':
				case 'warning':
				case 'error':
					variables += `--pui-${kebabCase(key)}-light-80: ${lightenColor(colors[key as keyof Colors] as string, 80)};\n`;
					variables += `--pui-${kebabCase(key)}-dark-80: ${lightenColor(colors[key as keyof Colors] as string, -80)};\n`;
					break;
			}
		}
	}

	styleElement.innerHTML = `
    ::root {
      ${variables}
    }
  `;
	const head = document.head;
	head.insertBefore(styleElement, head.firstChild);
};
