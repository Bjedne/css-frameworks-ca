import { getAuthToken } from "./handleAuth.mjs";

/**
 * Performs a fetch request to the specified URL with optional authentication and additional options.
 * @async
 * @function doFetch
 * @param {string} url - The URL to which the fetch request will be made.
 * @param {boolean} [isAuth=false] - Indicates whether authentication headers should be included.
 * @param {Object} [options={}] - Additional options to customize the fetch request (e.g., method, body).
 * @throws {Error} If the fetch request fails or the response is not in JSON format.
 * @returns {Promise<Object>} A Promise that resolves to the parsed JSON response.
 */

export async function doFetch(url, isAuth = false, options = {}) {
    try {
        const headers = {
            "Content-Type" : "application/json",
        };
        if (isAuth) {
            const authToken = getAuthToken();
            headers["Authorization"] = `Bearer ${authToken}`;
        }

        const combinedOptions = { headers, ...options };

        const response = await fetch(url, combinedOptions);
    
        const json = await response.json();
        return json;
    }catch(error) {
        throw error("Error in fetch request");
    }
}

