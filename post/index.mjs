import { doFetch } from "../js/api/auth/doFetch.mjs";
import { POSTS_URL } from "../js/api/constants.mjs";
import { removePost } from "../js/api/posts/delete.mjs";
import { generatePostById } from "./generatePostByIdHTML.mjs";

function displaySinglePost(post) {
    const postDisplayContainer = document.querySelector("#post-display-container");
    postDisplayContainer.append(generatePostById(post));
}

async function main() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
        const postId = searchParams.get("id");
        const postUrl = `${POSTS_URL}/${postId}?_author=true`
        const post = await doFetch(postUrl, true);
        displaySinglePost(post);

        const username = localStorage.getItem("name")
        if (username === post.author.name) {
            const removeBtn = document.querySelector("#removeBtn")
        removeBtn.addEventListener("click", async () => {
            // Confirm deletion
            const confirmation = confirm("Are you sure you want to delete this post?");
            if (confirmation) {
                // If confirmed, call removePost to delete the post
                await removePost(`${postId}`);
                window.location.href = `/feed/`
            }
        });
        }
        
    }
}

main();