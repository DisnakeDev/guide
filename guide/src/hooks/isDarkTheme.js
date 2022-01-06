import useThemeContext from '@theme/hooks/useThemeContext'

export default function isDarkTheme() {

	const {isDarkTheme} = useThemeContext();

	return(isDarkTheme)

}
