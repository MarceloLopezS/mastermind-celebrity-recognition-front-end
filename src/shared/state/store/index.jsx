import { createContext, useReducer } from "react"
import INITIAL_STATE from "../config/initialState"
import rootReducer from "../reducer/root"

export const StoreContext = createContext(null)
export const StoreDispatchContext = createContext(null)

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, INITIAL_STATE)

  return (
    <StoreContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  )
}

export default StoreContextProvider
