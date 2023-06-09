import axios from "axios";
import { LOCAL_STORAGE_KEY } from "shared/const/localstorage";


export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization:localStorage.getItem(LOCAL_STORAGE_KEY) || ""
    }

})