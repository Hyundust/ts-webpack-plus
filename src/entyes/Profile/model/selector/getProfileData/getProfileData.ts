import { StateScheme } from "app/providers/storeProvider"

export const getProfileData = ((state:StateScheme)=>state.profile?.data)