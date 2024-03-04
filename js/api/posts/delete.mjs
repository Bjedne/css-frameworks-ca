import { authFetch } from "../auth/handleAuth.mjs";
import { POSTS_URL } from "../constants.mjs";

export async function removePost(id) {
    const updatePostUrl = `${POSTS_URL}/${id}`;

    const response = await authFetch(updatePostUrl, {
        method: "DELETE",
    })

    return await response.json()
} 