import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './themed-link.module.css'

export const ThemedLink = ({
	href = '',
	bottom = '15px',
	isLink = true,
	children,
	...props
}) => {
	const theme = useSelector(state => state.theme.theme)

	const underlineColor = theme === 'light' ? '#1c1e21' : '#e3e3e3'

	return (
		<>
			{isLink ? (
				<Link
					to={href}
					className={`${styles.link} `}
					style={{ '--underline-color': underlineColor, '--bottom': bottom }}
				>
					{children}
				</Link>
			) : (
				<a
					href={href}
					className={`${styles.link} `}
					style={{ '--underline-color': underlineColor, '--bottom': bottom }}
					{...props}
				>
					{children}
				</a>
			)}
		</>
	)
}
