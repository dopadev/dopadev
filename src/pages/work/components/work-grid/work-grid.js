import React from 'react'
import { Link } from 'react-router-dom'
import styles from './work-grid.module.css'
import animationStyles from '../../../../styles/animations.module.css'

import hotelImg from '../../../../img/work/hotel.jpg'
import triangoImg from '../../../../img/work/triango.jpg'
import chatImg from '../../../../img/work/chat.jpg'

export const WorkGrid = () => {
	const workProjects = [
		{
			id: 'hotel',
			name: 'Hotel',
			description: 'Web Hotel Booking App',
			imageUrl: hotelImg,
		},
		{
			id: 'chat',
			name: 'Modern Chat',
			description: 'Web Messenger App',
			imageUrl: chatImg,
		},
		{
			id: 'other',
			name: 'Other Apps',
			description: 'Web Small Apps',
			imageUrl: triangoImg,
		},
	]
	return (
		<div
			className={`${styles.grid} ${animationStyles.slide} ${animationStyles.delay02}`}
		>
			{workProjects.map(({ id, name, description, imageUrl }) => (
				<Link to={`/work/${id}`} className={styles.workItem}>
					<div className={styles.workItemImage}>
						<img src={imageUrl} alt={name} />
					</div>
					<div className={styles.workItemInfo}>
						<div className={styles.workItemCompany}>{name}</div>
						<div className={styles.workItemDescription}>{description}</div>
					</div>
				</Link>
			))}
		</div>
	)
}
