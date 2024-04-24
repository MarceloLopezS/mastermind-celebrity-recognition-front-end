import requestDetectionData from "./api"

const getDetectionData = async (formData) => {
  const fetchOptions = {
    method: "post",
    credentials: "include",
    body: formData
    //type: --> automatically defined when file appended to FormData instance
  }

  const data = await requestDetectionData(fetchOptions)

  return data
}

export default getDetectionData