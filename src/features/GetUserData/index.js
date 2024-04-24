import requestUserData from "./api"

const getUserData = async () => {
  const fetchOptions = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  }
  const response = await requestUserData(fetchOptions);
  const data = await response.json();

  if (data.status === 'success') return data.userInfo
  if (data.status === 'unauthorized' || data.status === 'fail') return null

  return null
}

export default getUserData