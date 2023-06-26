import { StateScheme } from "app/providers/storeProvider"

export const getProfileLoading = ((state:StateScheme)=>state.profile?.loading)