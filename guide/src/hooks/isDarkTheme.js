import { useColorMode } from '@docusaurus/theme-common';

export default function isDarkTheme() {
	const { colorMode } = useColorMode();
	return colorMode === 'dark';
}
