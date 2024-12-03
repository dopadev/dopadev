import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemedLink } from '../../../../components'
import { copyToClipboard } from '../../../../utils/copy-to-clipboard'
import styles from './about-me.module.css'
import animationStyles from '../../../../styles/animations.module.css'

export const AboutMe = () => {
	const dispatch = useDispatch()
	const isEmailCopied = useSelector(state => state.copy.isEmailCopied)

	const email = 'dopadevv@gmail.com'

	const handleCopy = (text, type) => {
		copyToClipboard(text, type, dispatch)
	}

	const { description } = useSelector(state => state.lang.translations.aboutMe)

	return (
		<div className={styles.aboutMe}>
			<div
				className={`${styles.description} ${animationStyles.slide} ${animationStyles.delay03}`}
			>
				<p className={styles.text}>{description}</p>
				<ThemedLink href="/about" className={styles.more}>
					More about me
				</ThemedLink>
			</div>

			<div
				className={`${styles.contact} ${animationStyles.slide} ${animationStyles.delay04}`}
				onClick={() => handleCopy(email, 'email')}
			>
				<div className={styles.contactItem}>
					<h3>
						Get in touch <div className={styles.inline}>(click to copy)</div>
					</h3>
				</div>

				<div className={styles.email}>{isEmailCopied ? 'Email copied' : email}</div>
			</div>
		</div>
	)
}
