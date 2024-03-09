import { authFetch } from "../auth/handleAuth.mjs";
import { POSTS_URL } from "../constants.mjs";

/**
 * Sends a DELETE request to the server to delete post based on the id.
 * @param {} id 
 */
export async function removePost(id) {
    const updatePostUrl = `${POSTS_URL}/${id}`;

    const response = await authFetch(updatePostUrl, {
        method: "DELETE",
    })

    return await response.json()
} 