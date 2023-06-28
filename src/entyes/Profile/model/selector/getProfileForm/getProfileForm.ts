import { StateScheme } from "app/providers/storeProvider"

export const getProfileForm = ((state:StateScheme)=>state.profile?.form)