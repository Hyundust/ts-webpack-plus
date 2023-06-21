import { StateScheme } from "app/providers/storeProvider"

export const getLoginState= ((state:StateScheme)=>state.loginForm);