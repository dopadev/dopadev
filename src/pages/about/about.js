import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { copyToClipboard } from '../../utils/copy-to-clipboard'
import styles from './about.module.css'
import animationStyles from '../../styles/animations.module.css'
import accentStyles from '../../styles/accent.module.css'
import im from '../../img/about/dopadev.jpg'

export const About = () => {
	const dispatch = useDispatch()
	const isEmailCopied = useSelector(state => state.copy.isEmailCopied)
	const isTelegramCopied = useSelector(state => state.copy.isTelegramCopied)
	const isGithubCopied = useSelector(state => state.copy.isGithubCopied)
	const {
		creative,
		webDev,
		creating,
		description,
		team,
		workExperience,
		education,
		stack,
		contact,
	} = useSelector(state => state.lang.translations.about)
	const { language } = useSelector(state => state.lang)

	const workExperienceList = [
		{
			title: language === 'ru' ? 'Фронтенд-разработчик' : 'Frontend Developer',
			company: language === 'ru' ? 'Фриланс' : 'Freelance',
			dates: language === 'ru' ? '2023 - настоящее' : '2023 - present',
		},
		{
			title: language === 'ru' ? 'Дизайнер' : 'Designer',
			company: language === 'ru' ? 'Фриланс' : 'Freelance',
			dates: language === 'ru' ? '2021 - настоящее' : '2021 - present',
		},
	]

	const educationList = [
		{
			institution: language === 'ru' ? 'Курс' : 'Course',
			speciality:
				language === 'ru'
					? 'С Нуля до Мидл-Разработчика'
					: 'From Zero to Middle Developer',
			dates: '2023 - 2025',
		},
		{
			institution: language === 'ru' ? 'Колледж' : 'College',
			speciality:
				language === 'ru'
					? 'Эксплуатация беспилотных авиационных систем'
					: 'Operation of unmanned aircraft systems',
			dates: '2022 - 2026',
		},
	]

	const github = 'github.com/dopadev'
	const telegram = 't.me/dopadev'
	const email = 'dopadevv@gmail.com'

	const handleCopy = (text, type) => {
		copyToClipboard(text, type, dispatch)
	}

	return (
		<div className={styles.about}>
			<div className={styles.container}>
				<div className={styles.aboutText}>
					<h2 className={`${animationStyles.slide} ${animationStyles.delay01}`}>
						{creative} {language === 'ru' ? <br /> : <></>}{' '}
						<h2 className={accentStyles.accent}>{webDev}</h2> {creating}
					</h2>

					<p className={`${animationStyles.slide} ${animationStyles.delay02}`}>
						{description}
					</p>

					<p className={`${animationStyles.slide} ${animationStyles.delay02}`}>
						{team}
					</p>
				</div>
			</div>

			<div
				className={`${styles.aboutImage} ${animationStyles.slide} ${animationStyles.delay03}`}
			>
				<img src={im} alt="dopadev" loading="lazy" />
			</div>

			<div className={styles.container}>
				<div
					className={`${styles.aboutSection} ${animationStyles.slide} ${animationStyles.delay04}`}
				>
					<div>
						<h3>{workExperience}</h3>
						<ul className={styles.block}>
							{workExperienceList.map((item, index) => (
								<li key={index}>
									<h4>{item.title}</h4>
									<h5>{item.company}</h5>
									<p>{item.dates}</p>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3>{education}</h3>
						<ul className={styles.block}>
							{educationList.map((item, index) => (
								<li key={index}>
									<h4>{item.institution}</h4>
									<h5>{item.speciality}</h5>
									<p>{item.dates}</p>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3>{stack}</h3>
						<div className={styles.skills}>
							TS, React, Redux Toolkit, Vue, Vuex, Pinia, SASS, Express.js, MongoDB,
							Webpack, Vite, Docker, Git, Figma
						</div>
					</div>
					<div>
						<h3>
							{contact} <div>(click to copy)</div>
						</h3>
						<div className={styles.contact}>
							<li onClick={() => handleCopy(github, 'github')}>
								<p>{isGithubCopied ? 'Github link copied' : 'Github'}</p>
							</li>
							<li onClick={() => handleCopy(telegram, 'telegram')}>
								<p>{isTelegramCopied ? 'Telegram link copied' : 'Telegram'}</p>
							</li>
							<li onClick={() => handleCopy(email, 'email')}>
								<p>{isEmailCopied ? 'Email copied' : 'Email'}</p>
							</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
