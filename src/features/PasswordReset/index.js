import requestPasswordReset from "./api/index"

const passwordReset = async formData => {
  const fetchOptions = {
    method: "post",
    credentials: "include",
    body: formData,
    headers: {
      "Content-Type": "application/json"
    }
  }
  const response = await requestPasswordReset(fetchOptions)
  const data = await response.json()

  return data
}

export default passwordReset
