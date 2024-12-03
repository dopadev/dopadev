import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Header, ScrollToTop } from './components'
import { Work, About, WorkProject } from './pages'
import { useTheme } from './hooks'
import { setLanguage } from './store/slices'
import styles from './app.module.css'

export const App = () => {
	useTheme()

	const dispatch = useDispatch()

	const theme = useSelector(state => state.theme.theme)

	useEffect(() => {
		const userLanguage = navigator.language || 'en'
		console.log(userLanguage)

		const lang = userLanguage.startsWith('ru') ? 'ru' : 'en'
		dispatch(setLanguage(lang))
	}, [dispatch])

	useEffect(() => {
		const backgroundColor = theme === 'light' ? '#ffffff' : '#1b1b1d'
		const textColor = theme === 'light' ? '#1c1e21' : '#e3e3e3'

		document.body.style.backgroundColor = backgroundColor
		document.body.style.color = textColor
	}, [theme])

	return (
		<div className={styles.app}>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Work />} />
				<Route path="/about" element={<About />} />
				<Route path="/work/:id" element={<WorkProject />} />
				<Route path="*" element={<Work />} />
			</Routes>
		</div>
	)
}
