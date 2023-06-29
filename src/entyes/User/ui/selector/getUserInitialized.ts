import { StateScheme } from "app/providers/storeProvider"

export const getUserInitialized = ((state:StateScheme)=>state.user?._initialized)