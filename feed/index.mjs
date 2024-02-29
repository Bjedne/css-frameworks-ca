// 1. Get posts
// 2. Display posts

import { doFetch } from "../js/api/auth/doFetch.mjs";
import { POSTS_URL } from "../js/api/constants.mjs";

const generateSinglePostHTML = () => {

};

function displayPosts(posts){
    console.log(posts);
    posts.forEach((post, index) => {
        const postHTML = generateSinglePostHTML(post);
    })
};

async function getPosts() {
    console.log("getting posts");
    const posts = await doFetch(POSTS_URL, true);
    
    if(posts) {
        displayPosts(posts);
    }
}

function main() {
    getPosts();
}

main();

