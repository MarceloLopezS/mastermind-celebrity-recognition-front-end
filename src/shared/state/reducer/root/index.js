import { SET_USER_AUTH } from "../../config/actions"
import { setUserAuth } from "../../model/actionHandlers"

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return setUserAuth(state, action)
    default: {
      console.error(`Unknown action: ${action.type}`)
      return state
    }
  }
}

export default rootReducer