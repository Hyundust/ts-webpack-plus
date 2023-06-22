import { StateScheme } from "app/providers/storeProvider"

export const getLoginUsername= ((state:StateScheme)=>state?.loginForm?.username || "");