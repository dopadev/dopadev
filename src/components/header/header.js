import React from 'react'
import { useLocation } from 'react-router-dom'
import { ThemedLink } from '../themed-link/themed-link'
import styles from './header.module.css'
import animationStyles from '../../styles/animations.module.css'

export const Header = () => {
	const { pathname } = useLocation()
	const isOnAboutPage = pathname === '/about'

	return (
		<header className={`${styles.header} ${animationStyles.slide}`}>
			<ThemedLink href="/" bottom="35px" className={styles.logo}>
				dopadev
			</ThemedLink>
			{isOnAboutPage ? (
				<ThemedLink href="/" bottom="35px" className={styles.menu}>
					work
				</ThemedLink>
			) : (
				<ThemedLink href="/about" bottom="35px" className={styles.menu}>
					about
				</ThemedLink>
			)}
		</header>
	)
}
