import { StateScheme } from "app/providers/storeProvider"

export const getLoginPassword= ((state:StateScheme)=>state?.loginForm?.password || "");