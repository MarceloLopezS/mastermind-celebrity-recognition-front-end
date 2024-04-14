import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestEntryIncrement = async (fetchOptions) => {
  const serverResponse = await fetch(
    `${SERVER_DOMAIN}/face-detection/increment-entry`,
    fetchOptions
  )

  return serverResponse
}

export default requestEntryIncrement