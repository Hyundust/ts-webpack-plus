import { StateScheme } from "app/providers/storeProvider"

export const getProfileValidateError = ((state:StateScheme)=>state.profile?.ValidateError)