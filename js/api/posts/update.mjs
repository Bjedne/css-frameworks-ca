import { authFetch } from "../auth/handleAuth.mjs";
import { POSTS_URL } from "../constants.mjs";

/**
 * Updates an existing post by sending a PUT request to the specific post URL with the provided post data.
 * @async
 * @function updatePost
 * @param {Object} postData - The data for updating the post, including the post ID.
 * @returns {Promise<Object>} A Promise that resolves to the parsed JSON response representing the updated post.
 */
 
export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Update requires a postID");
    }

    const updatePostUrl = `${POSTS_URL}/${postData.id}`;

    const response = await authFetch(updatePostUrl, {
        method: "PUT",
        body: JSON.stringify(postData)
    })

    return await response.json()
} 