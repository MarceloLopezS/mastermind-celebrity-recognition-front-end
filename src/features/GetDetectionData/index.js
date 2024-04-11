import requestDetectionData from "./api"

const getDetectionData = async (formData) => {
  const data = await requestDetectionData(formData)

  return data
}

export default getDetectionData