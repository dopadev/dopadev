import { createSlice } from '@reduxjs/toolkit'
import en from '../../locales/en.json'
import ru from '../../locales/ru.json'

const translations = {
	en: en,
	ru: ru,
}

const initialState = {
	language: 'en',
	translations: translations['en'],
}

const langSlice = createSlice({
	name: 'lang',
	initialState,
	reducers: {
		setLanguage(state, action) {
			const lang = action.payload
			state.language = lang
			state.translations = translations[lang]
		},
	},
})

export const { setLanguage } = langSlice.actions

export default langSlice.reducer
