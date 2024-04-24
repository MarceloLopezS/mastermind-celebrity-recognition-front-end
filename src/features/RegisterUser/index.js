import requestRegistration from "./api"

const registerUser = async (formData) => {
  const fetchOptions = {
    method: "post",
    credentials: 'include',
    body: formData,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await requestRegistration(fetchOptions)
  const data = await response.json()

  return data
}

export default registerUser