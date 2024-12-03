import { configureStore } from '@reduxjs/toolkit'
import { themeReducer, copyReducer, langReducer } from './slices'

const store = configureStore({
	reducer: {
		theme: themeReducer,
		copy: copyReducer,
		lang: langReducer,
	},
})

export default store
