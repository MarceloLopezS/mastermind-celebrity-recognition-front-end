import { useState, useRef, useEffect, forwardRef } from "react"

export const useInputValidationHandler = (
	valueValidationFn = () => true,
	errorMessageHandler = inputValue => ""
) => {
	const [isValid, setIsValid] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)
	const inputRef = useRef(null)

	const validate = () => {
		let isValidValue = true

		if (valueValidationFn(inputRef.current?.value)) {
			isValidValue = true
			!isValid && setIsValid(true)
			setErrorMessage(null)
		} else {
			isValidValue = false
			isValid && setIsValid(false)
			setErrorMessage(errorMessageHandler(inputRef.current?.value) || null)
		}

		return isValidValue
	}

	const handleServerValidation = error => {
		if (!error) return

		isValid && setIsValid(false)
		!errorMessage && setErrorMessage(error)
	}

	useEffect(() => {
		!isValid && (inputRef.current.value = "")
	}, [isValid])

	return {
		inputRef,
		validate,
		isValid,
		errorMessage,
		handleServerValidation
	}
}

export const handleFormValidation = (...inputHandlers) => {
	let isFormValid = true

	inputHandlers.forEach(handler => {
		const { validate } = handler

		if (!validate()) {
			isFormValid = false
		}
	})

	return isFormValid
}

export const handleInputServerErrors = ({ errors = [], formInputHandlers }) => {
	errors.forEach(fieldErrorPair => {
		const [fieldname, errorMessage] = fieldErrorPair

		formInputHandlers.forEach(handler => {
			const { inputRef, handleServerValidation } = handler
			const input = inputRef.current

			if (
				input.hasAttribute("name") &&
				input.getAttribute("name") === fieldname
			) {
				handleServerValidation(errorMessage)
			}
		})
	})
}

const Form = forwardRef(({ children, ...attributes }, ref) => {
	return (
		<form ref={ref} {...attributes}>
			{children}
		</form>
	)
})

export default Form
