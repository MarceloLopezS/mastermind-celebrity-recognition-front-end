export const setUserAuth = (state, action) => {
  const { isUserAuthenticated } = action.payload

  return { ...state, isUserAuthenticated }
}