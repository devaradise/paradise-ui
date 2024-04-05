import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		media.addEventListener('change', listener);
		window.addEventListener('resize', listener);
		return () => {
			media.removeEventListener('change', listener);
			window.removeEventListener('resize', listener);
		};
	}, [matches, query]);

	return matches;
};
