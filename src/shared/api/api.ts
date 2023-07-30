import axios from "axios";
import { LOCAL_STORAGE_KEY } from "shared/const/localstorage";

// Create a new instance of axios with a specified base URL
export const $api = axios.create({
  baseURL: __API__,
});

// Add an interceptor to modify the request configuration before sending
$api.interceptors.request.use((config) => {
  // Check if the headers property exists in the config object
  if (config.headers) {
    // Set the Authorization header value to the item stored in localStorage with the LOCAL_STORAGE_KEY constant
    // If the stored item is null or undefined, use an empty string as the default value
    config.headers.Authorization =
      localStorage.getItem(LOCAL_STORAGE_KEY) ?? "";
  }
  
  return config;
});


