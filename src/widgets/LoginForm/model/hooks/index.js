import { useState, useRef, useEffect } from "react"

export const useInputValidationHandler = () => {
  const [isValid, setIsValid] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    !isValid && (inputRef.current.value = "")
  }, [isValid])

  return { inputRef, isValid, setIsValid, errorMessage, setErrorMessage }
}