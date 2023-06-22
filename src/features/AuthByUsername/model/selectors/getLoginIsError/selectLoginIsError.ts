import { StateScheme } from "app/providers/storeProvider"

export const getLoginIsError= ((state:StateScheme)=>state?.loginForm?.isError);