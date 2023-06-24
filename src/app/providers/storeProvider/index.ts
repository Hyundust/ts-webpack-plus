
import { createReduxStore } from "./config/store";
import StoreProvider from "./ui/storeProvider";
import type { StateScheme } from "./config/configScheme";
import { reduxStoreWithManager } from "./config/configScheme";
import { AppDispatch } from "./config/store";


export {
    StoreProvider,
    createReduxStore,
    StateScheme,
    reduxStoreWithManager,
    AppDispatch
}