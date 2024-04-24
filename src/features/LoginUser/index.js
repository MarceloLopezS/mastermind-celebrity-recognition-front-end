import requestLogin from "./api"

const loginUser = async (formData) => {
  const fetchOptions = {
    method: "post",
    credentials: 'include',
    body: formData,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const data = await requestLogin(fetchOptions)

  return data
}

export default loginUser