import requestDemoDetectionData from "./api";

const getDemoDetectionData = async (demoId) => {
  const fetchOptions = {
    method: "post",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ demoId })
  }

  const response = await requestDemoDetectionData(fetchOptions)
  const data = await response.json()

  return data
}

export default getDemoDetectionData