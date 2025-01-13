export const capitalizeString = (string, separator = " ") => {
  if (typeof string !== "string") {
    throw new TypeError("String is expected to be capitalized.")
  }

  const strings = string.split(separator)
  return strings
    .map(string => string[0].toUpperCase() + string.substring(1))
    .join(separator)
}

export const isValidEmail = string => {
  if (typeof string !== "string")
    throw new Error("Email to evaluate must be a string.")

  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  return string.match(regex)
}

export const getInvalidEmailError = emailValue => {
  if (!isValidEmail(emailValue)) return "Please enter a valid email"
}

export const isValidInputString = string => {
  if (typeof string !== "string")
    throw new Error("String expected to evaluate if empty.")

  return string.length > 0
}

export const isValidPassword = value => {
  return isValidInputString(value) && value?.length > 8
}

export const getInvalidPasswordError = value => {
  if (value?.length === 0) return "Please enter a password"
  if (value?.length < 8) return "Password must have at least 8 characters"
}

export const isValidPasswordConfirmation =
  passwordRef => passwordConfirmation => {
    const password = passwordRef?.current?.value

    return (
      isValidInputString(passwordConfirmation) &&
      password === passwordConfirmation
    )
  }

export const getInvalidConfirmPasswordError =
  passwordRef => passwordConfirmation => {
    const password = passwordRef?.current?.value

    if (password !== passwordConfirmation) {
      return "Passwords don't match"
    }
  }

export const getReactRouterFormData = async request => {
  return JSON.stringify(Object.fromEntries(await request?.formData()))
}

export const greaterThan = comparisonNumber => value => value > comparisonNumber

export const isFileInputValid = files => {
  const greaterThan5Mb = greaterThan(5 * 1024 * 1024)
  return files?.length !== 0 && !greaterThan5Mb(files[0]?.size)
}

export const preloadImage = (src = "") => {
  if (typeof src !== "string")
    throw new TypeError("Image source is expected to be a string.")

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.onerror = img.onabort = () => {
      reject(`Failed to load src: ${src}`)
    }
    img.src = src
  })
}
