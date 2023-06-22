
import { createReduxStore } from "./config/store";
import StoreProvider from "./ui/storeProvider";
import type { StateScheme } from "./config/configScheme";
import { reduxStoreWithManager } from "./config/configScheme";


export {
    StoreProvider,
    createReduxStore,
    StateScheme,
    reduxStoreWithManager
}