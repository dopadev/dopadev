import React from 'react'
import styles from './footer.module.css'
import animationStyles from '../../../../styles/animations.module.css'

export const Footer = () => {
	return (
		<footer
			className={`${styles.footer} ${animationStyles.slide} ${animationStyles.delay05}`}
		>
			© dopadev 2024
		</footer>
	)
}
