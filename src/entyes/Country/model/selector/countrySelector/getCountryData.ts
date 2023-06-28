import { StateScheme } from "app/providers/storeProvider"

export const getCountryData = ((state:StateScheme)=>state.profile?.data?.country)