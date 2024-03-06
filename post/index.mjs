import { doFetch } from "../js/api/auth/doFetch.mjs";
import { POSTS_URL } from "../js/api/constants.mjs";
import { generateSinglePostHTML } from "../js/generateSinglePostHTML.mjs";

function displaySinglePost(post) {
    const postDisplayContainer = document.querySelector("#post-display-container");
    postDisplayContainer.append(generateSinglePostHTML(post));
}

async function main() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
        const postId = searchParams.get("id");
        const postUrl = `${POSTS_URL}/${postId}?_author=true`
        const post = await doFetch(postUrl, true);
        displaySinglePost(post);
    }
}

main();