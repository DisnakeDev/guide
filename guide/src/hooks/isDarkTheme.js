import { useEffect, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function isDarkTheme() {
	const [themeContext, setThemeContext] = useState({});

	const realThemeContext = useColorMode();

	useEffect(() => {
		setThemeContext(realThemeContext);
	}, [realThemeContext]);

	const { isDarkTheme } = themeContext;

	return isDarkTheme;
}
