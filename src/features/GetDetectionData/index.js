import requestDetectionData from "./api"

const getDetectionData = async (formData) => {
  const fetchOptions = {
    method: "post",
    credentials: "include",
    body: formData
    //type: --> automatically defined when file appended to FormData instance
  }

  const response = await requestDetectionData(fetchOptions)
  const data = await response.json()

  return data
}

export default getDetectionData