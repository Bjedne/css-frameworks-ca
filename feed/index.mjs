import { doFetch } from "../js/api/auth/doFetch.mjs";
import { POSTS_URL } from "../js/api/constants.mjs";
import { generateSinglePostHTML } from "../js/generateSinglePostHTML.mjs";

let POST_HAS_IMAGE = false;
let POST_HAS_REACTION = false;

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
        })
        .filter ((post) => {
            if (POST_HAS_REACTION) {
                if (post._count.reactions || post._count.comments) {
                    return true;
                }
            } else {
                return true;
            }
        })
        .forEach((post) => {
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

    const imageCheckbox = document.getElementById('imageCheckbox');
    const reactionCheckbox = document.getElementById('reactionCheckbox');

    imageCheckbox.addEventListener('change', updatePostsDisplay);
    reactionCheckbox.addEventListener('change', updatePostsDisplay);
}

function updatePostsDisplay() {
    POST_HAS_IMAGE = document.getElementById('imageCheckbox').checked;
    POST_HAS_REACTION = document.getElementById('reactionCheckbox').checked;
    getPosts();
}

main();
