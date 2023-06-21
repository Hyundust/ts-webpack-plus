import { StateScheme } from "app/providers/storeProvider"

export const getUserData = ((state:StateScheme)=>state.user.authData)