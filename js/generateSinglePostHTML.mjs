export const generateSinglePostHTML = (post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "bg-white p-4 rounded-4 col-11 col-md-8 mx-auto mt-3 align-items-center d-flex flex-column container"

    /* trying to add author, date and avatar? */
    const profileContainer = document.createElement("div");
    profileContainer.className = "d-flex"
    const profileName = document.createElement("p")
    profileName.innerHTML = `Post by: ${post.author.name}`

    profileContainer.append(profileName)

    const postLink = document.createElement("a");
    postLink.href = `/post/?id=${post.id}`;
   
    
    const postTitle = document.createElement("h1");
    postTitle.textContent = post.title;

    postLink.append(postTitle);
    
    const postBody = document.createElement("p");
    postBody.textContent = post.body;

    const interactionContainer = document.createElement("div")
    interactionContainer.className = "d-flex gap-3 mt-3"
    interactionContainer.innerHTML = `<p>Reactions: ${post._count.reactions}</p>
    <p>Comments: ${post._count.comments}</p>`;

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
    removeButton.className = "btn btn-warning";

    actionContainer.append(editLink, removeButton);


    if (!post.media) {
        postContainer.append(profileContainer, postLink, postBody, interactionContainer, actionContainer)
    } else {
        const postImageContainer = document.createElement("div");
        let postImageUrl = post.media;
        const postImage = document.createElement("img");
        postImage.className = "img-fluid mt-1";
        postImage.src = postImageUrl;
    
        postImageContainer.append(postImage);
    
        postContainer.append(profileContainer, postLink, postBody, postImageContainer, interactionContainer, actionContainer);
    }

    return postContainer;
};