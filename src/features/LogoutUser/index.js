import requestLogout from "./api"

const logoutUser = async (requestData) => {
  const fetchOptions = {
    method: "post",
    credentials: 'include',
    body: requestData,
    headers: {
      'Content-type': 'application/json'
    }
  }

  const data = await requestLogout(fetchOptions)

  return data
}

export default logoutUser