import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isEmailCopied: false,
	isTelegramCopied: false,
	isGithubCopied: false,
}

const copySlice = createSlice({
	name: 'copy',
	initialState,
	reducers: {
		setEmailCopied: (state, action) => {
			state.isEmailCopied = action.payload
		},
		setTelegramCopied: (state, action) => {
			state.isTelegramCopied = action.payload
		},
		setGithubCopied: (state, action) => {
			state.isGithubCopied = action.payload
		},
	},
})

export const { setEmailCopied, setTelegramCopied, setGithubCopied } =
	copySlice.actions
export default copySlice.reducer
