import { StateScheme } from "app/providers/storeProvider"

export const getProfileError = ((state:StateScheme)=>state.profile?.error)