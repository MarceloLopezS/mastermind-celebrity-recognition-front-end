export const handleInputErrors = ({ errors = [], formInputHandlers }) => {
  errors.forEach(fieldErrorPair => {
    const [fieldname, errorMessage] = fieldErrorPair

    formInputHandlers.forEach(handler => {
      const { inputRef, handleServerValidation } = handler
      const input = inputRef.current

      if (
        input.hasAttribute("name") && input.getAttribute("name") === fieldname
      ) {
        handleServerValidation(errorMessage)
      }
    })
  })
}

export const handleFormValidation = (...inputHandlers) => {
  let isFormValid = true

  inputHandlers.forEach(handler => {
    const { validate } = handler

    if (!validate()) { isFormValid = false }
  })

  return isFormValid
}