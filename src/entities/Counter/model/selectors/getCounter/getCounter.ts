import { StateScheme } from "app/providers/storeProvider"

export const getCounter = ((state:StateScheme)=>state.counter)