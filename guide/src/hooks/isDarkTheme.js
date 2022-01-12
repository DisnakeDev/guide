import { useEffect, useState } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

export default function isDarkTheme() {
	const [themeContext, setThemeContext] = useState({});

	const realThemeContext = useThemeContext();

	useEffect(() => {
		setThemeContext(realThemeContext);
	}, [realThemeContext]);

	const { isDarkTheme } = themeContext;

	return isDarkTheme;
}
