import requestEntryIncrement from "./api"

const incrementUserDetectionEntry = async requestData => {
  const fetchOptions = {
    method: "put",
    credentials: "include",
    body: requestData,
    headers: {
      "Content-type": "application/json"
    }
  }

  const response = await requestEntryIncrement(fetchOptions)
  const data = await response.json()

  return data
}

export default incrementUserDetectionEntry
