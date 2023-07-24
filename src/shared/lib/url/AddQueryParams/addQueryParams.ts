/**
 * Converts the given parameters object into a query string with URL parameters.
 * @param params - An object containing optional key-value pairs for URL parameters.
 * @returns The query string with the URL parameters.
 */
export function getQueryParams(params: OptionalRecord<string, string>) {
    // Create a new URLSearchParams object based on the current window location search.
    const searchParams = new URLSearchParams(window.location.search);
  
    // Iterate through the key-value pairs of the 'params' object.
    for (const [name, value] of Object.entries(params)) {
      // Check if the 'value' is not undefined (i.e., a value is provided for the parameter).
      if (value !== undefined) {
        // Set the parameter in the 'searchParams' object using the 'set' method.
        searchParams.set(name, value);
      }
    }
  
    // Convert the 'searchParams' object to a string and prepend it with '?' to form the query string.
    return `?${searchParams.toString()}`;
  }
  
  export function addQueryParams(params: OptionalRecord<string, string>) {
    // Get the query string with the URL parameters based on the provided 'params' object.
    const queryString = getQueryParams(params);
  
    // Check if the generated 'queryString' is different from the current window location search.
    if (queryString !== window.location.search) {
      // Update the URL by modifying the browser history with the new query string.
      window.history.pushState(null, '', queryString);
    }
  }
  