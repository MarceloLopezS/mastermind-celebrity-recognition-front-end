import { useState, useRef, useEffect } from "react"

export const useInputValidationHandler = (
  validationFn = inputValueOrFiles => !!inputValueOrFiles,
  errorMessageHandler = inputValueOrFiles => ""
) => {
  const [isValid, setIsValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const inputRef = useRef(null)

  const validate = () => {
    let isValidValue = true
    const validationArg =
      inputRef.current?.type === "file"
        ? inputRef.current?.files
        : inputRef.current?.value

    if (validationFn(validationArg)) {
      isValidValue = true
      !isValid && setIsValid(true)
      errorMessage && setErrorMessage(null)
    } else {
      isValidValue = false
      isValid && setIsValid(false)
      errorMessageHandler() &&
        setErrorMessage(errorMessageHandler(validationArg))
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

const Form = ({ children, ref, ...attributes }) => {
  return (
    <form ref={ref} {...attributes}>
      {children}
    </form>
  )
}

export default Form
