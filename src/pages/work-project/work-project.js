import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ThemedLink } from '../../components'

import styles from '../about/about.module.css'
import animationStyles from '../../styles/animations.module.css'
import accentStyles from '../../styles/accent.module.css'

import hotelI1 from '../../img/work-projects/hotel/Mockup-Iphone-1.jpg'
import hotelI2 from '../../img/work-projects/hotel/Mockup-Iphone-2.jpg'
import hotelI3 from '../../img/work-projects/hotel/Mockup-Iphone-3.jpg'
import hotelM1 from '../../img/work-projects/hotel/Mockup-Macbook-1.jpg'
import hotelM2 from '../../img/work-projects/hotel/Mockup-Macbook-2.jpg'
import hotelM3 from '../../img/work-projects/hotel/Mockup-Macbook-3.jpg'

import triangoImg from '../../img/work-projects/other/triango.png'
import mcImg from '../../img/work-projects/other/medical-care.png'
import nlImg from '../../img/work-projects/other/new-life.png'

export const WorkProject = () => {
	const { id } = useParams()

	const { language } = useSelector(state => state.lang)

	const workProjects = [
		{
			id: 'hotel',
			name: 'Hotel',
			description:
				language === 'ru'
					? `Hotel - это удобное веб-приложение для бронирования номеров в любимом отеле. С помощью Hotel вы можете легко и быстро забронировать номер на удобные для вас даты, получить всю необходимую информацию о доступных вариантах размещения и воспользоваться эксклюзивными предложениями. Планируете ли вы деловую поездку или отпуск, Hotel сделает процесс бронирования простым и удобным. Наслаждайтесь беззаботным отдыхом, зная, что ваш номер в отеле уже забронирован!`
					: `Hotel is a convenient web application for booking rooms at your favorite hotel. With Hotel you can easily and quickly book a room on dates convenient for you, get all the necessary information about available accommodation options and take advantage of exclusive offers. Whether you are planning a business trip or a vacation, Hotel makes the booking process simple and convenient. Enjoy a carefree vacation knowing that your hotel room is already booked!`,
			imageUrl: [hotelI1, hotelI2, hotelI3, hotelM1, hotelM2, hotelM3],
			detailedDescription:
				language === 'ru'
					? `Я работал над этим проектом самостоятельно, сосредоточившись на создании интуитивно понятного опыта для пользователей, которые хотят забронировать жильё с минимальными усилиями. Моей целью было создать инструмент, который максимально упростил бы процесс бронирования. С нуля написал бэкенд - настроил работу с удалённой базой данных, а затем сделал фронтенд на React + Redux. У проекта большие просторы для расширения, поэтому он всё ещё в разработке.`
					: `I worked on this project independently, focusing on creating an intuitive experience for users who want to book accommodation with minimal effort. My goal was to create a tool that would simplify the booking process as much as possible. I wrote the backend from scratch - setting up a remote database and then built the frontend on React + Redux. The project has a lot of room for expansion, so it's still in development.
			`,
		},
		{
			id: 'other',
			name: 'Other Apps',
			description:
				language === 'ru'
					? `Разные небольшие веб-приложения.`
					: `Various small web applications.`,
			imageUrl: [triangoImg, mcImg, nlImg],
			detailedDescription:
				language === 'ru'
					? `В небольших веб-приложениях я разрабатывал фронтенд на React + Redux.`
					: `In small web applications, I've been developing frontend on React + Redux.`,
		},
	]

	const project = workProjects.find(p => p.id === id)

	if (!project) {
		return <div>Project not found</div>
	}

	const { name, description, imageUrl, detailedDescription } = project

	return (
		<div className={styles.about}>
			<div className={styles.container}>
				<div className={styles.aboutText}>
					<h1
						className={`${animationStyles.slide} ${animationStyles.delay01} ${accentStyles.accent}`}
					>
						{name}
					</h1>
					<h3 className={`${animationStyles.slide} ${animationStyles.delay02}`}>
						{description}
					</h3>
					<p className={`${animationStyles.slide} ${animationStyles.delay02}`}>
						{detailedDescription}
					</p>
				</div>
			</div>

			<div
				className={`${styles.aboutImage} ${animationStyles.slide} ${animationStyles.delay03}`}
			>
				{imageUrl.map((image, index) => (
					<img key={index} src={image} alt={name} loading="lazy" />
				))}
			</div>

			<div
				className={`${styles.back} ${animationStyles.slide} ${animationStyles.delay04}`}
			>
				<ThemedLink href="/" bottom="0">
					All projects
				</ThemedLink>
			</div>
		</div>
	)
}
