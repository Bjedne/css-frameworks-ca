import { authFetch } from "../auth/handleAuth.mjs";
import { POSTS_URL } from "../constants.mjs";

export async function updatePost(postData) {
    const updatePostUrl = `${POSTS_URL}/${postData.id}`;

    const response = await authFetch(updatePostUrl, {
        method: "PUT",
        body: JSON.stringify(postData)
    })

    return await response.json()
} 