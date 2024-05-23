import requestDemoDetectionData from "./api";

const getDemoDetectionData = async (demoId, abortController) => {
  const fetchOptions = {
    method: "post",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ demoId })
  }

  const response =
    await requestDemoDetectionData(fetchOptions, abortController)
  const data = await response.json()

  return data
}

export default getDemoDetectionData