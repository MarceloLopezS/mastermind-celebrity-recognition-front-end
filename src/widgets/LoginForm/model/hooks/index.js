import { useState, useRef, useEffect } from "react"

export const useInputValidationHandler = (
  valueValidationFn = () => true,
  errorMessageHandler = (inputValue) => ""
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
      setErrorMessage(
        errorMessageHandler(inputRef.current?.value) || null
      )
    }

    return isValidValue
  }

  const handleServerValidation = (error) => {
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