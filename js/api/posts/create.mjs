import { authFetch } from "../auth/handleAuth.mjs";
import { POSTS_URL } from "../constants.mjs";

/**
 * * Creates a new post by sending a POST request to the specified POSTS_URL with the provided post data.
 * @async
 * @function createPost
 * @param {Object} postData - The data for the new post, typically an object containing title, body, etc.
 * @throws {Error} If the fetch request fails or the response is not in JSON format.
 * @returns {Promise<Object>} A Promise that resolves to the parsed JSON response representing the created post.
 */

export async function createPost(postData) {
    const response = await authFetch(POSTS_URL, {
        method: "POST",
        body: JSON.stringify(postData)
    })

    return await response.json()
} 