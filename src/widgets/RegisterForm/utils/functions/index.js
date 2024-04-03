export const validateAndGetRegisterData = (
  name,
  email,
  password,
  confirmPassword,
  messageContainer
) => {
  const inputs = [name, email, password, confirmPassword]
  let validForm = true

  messageContainer.removeAttribute("data-danger")
  messageContainer.textContent = ""
  email.setAttribute("placeholder", "Please enter your email")
  inputs.forEach(input => {
    input.classList.remove("invalid")
  })

  inputs.forEach(input => {
    if (!input.value) {
      validForm = false
      input.classList.add("invalid")
    }
  })
  if (email.value) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (!email.value.match(regex)) {
      validForm = false
      email.classList.add("invalid")
      email.setAttribute("placeholder", "Please enter a valid email")
      email.value = ""
    }
  }
  if (
    password.value &&
    confirmPassword.value &&
    password.value !== confirmPassword.value
  ) {
    validForm = false
    password.classList.add("invalid")
    confirmPassword.classList.add("invalid")
    password.setAttribute("placeholder", "Passwords don't match")
    confirmPassword.setAttribute("placeholder", "Passwords don't match")
    password.value = ""
    confirmPassword.value = ""
  }

  if (validForm) {
    const formData = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    }

    return formData
  }

  return null
}