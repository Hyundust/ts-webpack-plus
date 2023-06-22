import { StateScheme } from "app/providers/storeProvider"

export const getLoginLoading= ((state:StateScheme)=>state?.loginForm?.isLoading || false);