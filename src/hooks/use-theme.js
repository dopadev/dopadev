import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { setLightTheme, setDarkTheme } from '../store/slices'

export const useTheme = () => {
	const dispatch = useDispatch()

	const getSavedTheme = () => {
		return Cookies.get('theme') || null
	}

	const saveThemeToCookie = theme => {
		Cookies.set('theme', theme, { expires: 365 })
	}

	useEffect(() => {
		const updateTheme = theme => {
			if (theme === 'light') {
				dispatch(setLightTheme())
			} else {
				dispatch(setDarkTheme())
			}
			saveThemeToCookie(theme)
		}

		const savedTheme = getSavedTheme()
		if (savedTheme) {
			updateTheme(savedTheme)
		} else {
			const prefersLightScheme = window.matchMedia(
				'(prefers-color-scheme: light)',
			).matches
			const systemTheme = prefersLightScheme ? 'light' : 'dark'
			updateTheme(systemTheme)
		}

		const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
		const handleThemeChange = e => {
			const newTheme = e.matches ? 'light' : 'dark'
			updateTheme(newTheme)
		}

		mediaQuery.addEventListener('change', handleThemeChange)

		return () => {
			mediaQuery.removeEventListener('change', handleThemeChange)
		}
	}, [dispatch])
}
