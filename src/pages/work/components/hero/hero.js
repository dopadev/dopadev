import React from 'react'
import { useSelector } from 'react-redux'
import styles from './hero.module.css'
import animationStyles from '../../../../styles/animations.module.css'
import accentStyles from '../../../../styles/accent.module.css'

export const Hero = () => {
	const { building, digital, reality } = useSelector(
		state => state.lang.translations.hero,
	)

	return (
		<div
			className={`${styles.hero} ${animationStyles.slide} ${animationStyles.delay01}`}
		>
			<h1 className={styles.heroText}>
				{building}{' '}
				<h1 className={`${styles.heroText} ${accentStyles.accent}`}>{digital}</h1>{' '}
				{reality}
			</h1>
		</div>
	)
}
