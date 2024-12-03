import { setEmailCopied, setTelegramCopied } from '../store/slices/copy-slice'

export const copyToClipboard = (text, type, dispatch) => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			if (type === 'email') {
				dispatch(setEmailCopied(true))
			} else if (type === 'telegram') {
				dispatch(setTelegramCopied(true))
			}

			setTimeout(() => {
				if (type === 'email') {
					dispatch(setEmailCopied(false))
				} else if (type === 'telegram') {
					dispatch(setTelegramCopied(false))
				}
			}, 1500)
		})
		.catch(err => {
			console.error('Failed to copy text:', err)
		})
}
