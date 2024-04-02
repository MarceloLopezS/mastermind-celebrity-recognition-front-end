export const validateAndGetLoginData = (email, password, messageContainer) => {
  const inputs = [email, password]
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

  if (validForm) {
    const formData = {
      email: email.value,
      password: password.value
    }

    return formData
  }

  return null
}