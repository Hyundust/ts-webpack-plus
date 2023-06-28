import { StateScheme } from "app/providers/storeProvider"

export const getCurrencyData = ((state:StateScheme)=>state.profile?.data)