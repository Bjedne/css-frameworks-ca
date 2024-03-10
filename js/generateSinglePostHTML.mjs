/**
 * Generates HTML content for a post containing post author, title, body, image, number of likes and comments and links to a specific post.
 * @param {*} post 
 */
export const generateSinglePostHTML = (post) => {
    // Adds parent to contain everything
    const postContainer = document.createElement("div");
    postContainer.className = "bg-white p-4 rounded-4 col-11 col-md-8 mx-auto mt-3 align-items-center d-flex flex-column container"

    // Adds author of the post
    const profileName = document.createElement("p")
    profileName.innerHTML = `Post by: ${post.author.name}`

    // Adds post title, body and adds a link to the title that leads to viewing the post
    const postLink = document.createElement("a");
    postLink.href = `/post/?id=${post.id}`;
    const postTitle = document.createElement("h1");
    postTitle.textContent = post.title;
    postLink.append(postTitle);
    
    const postBody = document.createElement("p");
    postBody.textContent = post.body;

    // Adds a display of how many reactions and comments there are on the post
    const interactionContainer = document.createElement("div")
    interactionContainer.className = "d-flex gap-3 mt-3"
    interactionContainer.innerHTML = `<p>Likes: ${post._count.reactions}</p>
    <p>Comments: ${post._count.comments}</p>`;

    if (!post.media) {
        postContainer.append(profileName, postLink, postBody, interactionContainer)
    } else {
        const postImageContainer = document.createElement("div");
        let postImageUrl = post.media;
        const postImage = document.createElement("img");
        postImage.className = "img-fluid mt-1";
        postImage.src = postImageUrl;
        
        postImageContainer.append(postImage);
        
        postContainer.append(profileName, postLink, postBody, postImageContainer, interactionContainer);
    }   

    return postContainer;
};