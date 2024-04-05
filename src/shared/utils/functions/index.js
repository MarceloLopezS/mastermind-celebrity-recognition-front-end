export const isValidEmail = (string) => {
  if (typeof string !== "string") throw new Error(
    "Email to evaluate must be a string."
  )

  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  return string.match(regex)
}

export const isValidInputString = (string) => {
  if (typeof string !== "string") throw new Error(
    "String expected to evaluate if empty."
  )

  return string.length > 0
}