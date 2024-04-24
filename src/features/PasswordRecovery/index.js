import requestPasswordRecovery from "./api"

const passwordRecovery = async (formData) => {
  const fetchOptions = {
    method: "post",
    credentials: 'include',
    body: formData,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await requestPasswordRecovery(fetchOptions)
  const data = await response.json()

  return data
}

export default passwordRecovery