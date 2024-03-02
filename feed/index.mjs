import { doFetch } from "../js/api/auth/doFetch.mjs";
import { POSTS_URL } from "../js/api/constants.mjs";
import { generateSinglePostHTML } from "../js/generateSinglePostHTML.mjs";

var POST_HAS_IMAGE = false;

function displayPosts(posts){
    const postsDisplayContainer = document.querySelector("#posts-display-container");
    postsDisplayContainer.textContent = "";
    posts
        .filter((post) => {
            if (POST_HAS_IMAGE) {
                if (post.media) {
                    return true;
                }   
            } else {
                return true;
            }
        }).forEach((post) => {
        const postHTML = generateSinglePostHTML(post);
        postsDisplayContainer.appendChild(postHTML);
    })
};

async function getPosts() {
    const posts = await doFetch(POSTS_URL, true);
    console.log(posts)
    if(posts) {
        displayPosts(posts);
    }
}

function main() {
    getPosts();
}

main();