import { SERVER_DOMAIN } from "../../../shared/utils/constants"

const requestEntryIncrement = async (fetchOptions) => {
  const response = await fetch(
    `${SERVER_DOMAIN}/face-detection/increment-entry`,
    fetchOptions
  )

  return response
}

export default requestEntryIncrement