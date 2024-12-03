import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isEmailCopied: false,
	isTelegramCopied: false,
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
	},
})

export const { setEmailCopied, setTelegramCopied } = copySlice.actions
export default copySlice.reducer
