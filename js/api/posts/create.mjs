import { authFetch } from "../auth/handleAuth.mjs";
import { POSTS_URL } from "../constants.mjs";

export async function createPost(postData) {
    const response = await authFetch(POSTS_URL, {
        method: "POST",
        body: JSON.stringify(postData)
    })

    return await response.json()
} 