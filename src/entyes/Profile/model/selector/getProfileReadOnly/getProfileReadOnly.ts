import { StateScheme } from "app/providers/storeProvider"

export const getProfileReadOnly = ((state:StateScheme)=>state.profile?.readonly)