import requestEntryIncrement from "./api";

const incrementUserDetectionEntry = async (fetchOptions) => {
  const serverResponse = await requestEntryIncrement(fetchOptions)
  const data = await serverResponse.json()

  return data
}

export default incrementUserDetectionEntry