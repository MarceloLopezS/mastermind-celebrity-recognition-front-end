import requestLogin from "./api"

const loginUser = async formData => {
  const fetchOptions = {
    method: "post",
    credentials: "include",
    body: formData,
    headers: {
      "Content-Type": "application/json"
    }
  }

  const response = await requestLogin(fetchOptions)
  const data = await response.json()

  return data
}

export default loginUser
