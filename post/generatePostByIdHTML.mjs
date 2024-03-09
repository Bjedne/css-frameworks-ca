/**
 * Generates HTML content for a post containing post author, title, body, image, number of likes and comments, an edit button and a delete button.
 */
export const generatePostById = (post) => {
    // Adds parent to contain everything
    const postContainer = document.createElement("div");
    postContainer.className = "bg-white p-4 rounded-4 col-11 col-md-8 mx-auto mt-3 align-items-center d-flex flex-column container"

    // Adds author of the post
    const profileName = document.createElement("p")
    profileName.innerHTML = `Post by: ${post.author.name}`
    
    // Adds post title and body
    const postTitle = document.createElement("h1");
    postTitle.textContent = post.title;
    const postBody = document.createElement("p");
    postBody.textContent = post.body;

    // Adds a display of how many reactions and comments there are on the post
    const interactionContainer = document.createElement("div")
    interactionContainer.className = "d-flex gap-3 mt-3"
    interactionContainer.innerHTML = `<p>Likes: ${post._count.reactions}</p>
    <p>Comments: ${post._count.comments}</p>`;

    // Adds "Edit post" and "Delete post" button.
    const username = localStorage.getItem("name")
    const actionContainer = document.createElement("div");
    actionContainer.className = "d-flex gap-3";

    const editLink = document.createElement("a");
    editLink.href = `/post/edit/?id=${post.id}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit post";
    editButton.className = "btn btn-danger";

    editLink.append(editButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete post";
    removeButton.className = "btn btn-warning removeBtn";
    removeButton.id = "removeBtn"

    actionContainer.append(editLink, removeButton);
    
    // If the post being viewed belongs to the user, then the post also displays an edit and delete button. Otherwise the buttons are no longer displayed when viewing another author's post.
    if (username === post.author.name) {
        if (!post.media) {
            postContainer.append(profileName, postTitle, postBody, interactionContainer, actionContainer)
        } else {
            const postImageContainer = document.createElement("div");
            let postImageUrl = post.media;
            const postImage = document.createElement("img");
            postImage.className = "img-fluid mt-1";
            postImage.src = postImageUrl;
        
            postImageContainer.append(postImage);
        
            postContainer.append(profileName, postTitle, postBody, postImageContainer, interactionContainer, actionContainer);
        }
    } else {
        if (!post.media) {
            postContainer.append(profileName, postTitle, postBody, interactionContainer)
        } else {
            const postImageContainer = document.createElement("div");
            let postImageUrl = post.media;
            const postImage = document.createElement("img");
            postImage.className = "img-fluid mt-1";
            postImage.src = postImageUrl;
        
            postImageContainer.append(postImage);
        
            postContainer.append(profileName, postTitle, postBody, postImageContainer, interactionContainer);
    }
}
    return postContainer;
};