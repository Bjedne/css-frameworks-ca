export const generateSinglePostHTML = (post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "bg-white p-4 rounded-4 col-11 col-md-8 mx-auto mt-3 align-items-center d-flex flex-column container"

    /* trying to add author, date and avatar? */
    

    const postLink = document.createElement("a");
    postLink.href = `/post/?id=${post.id}`;
    
    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

    postLink.append(postTitle);
    
    const postBody = document.createElement("p");
    postBody.textContent = post.body;
    postBody.className = "";

    const interactionContainer = document.createElement("div")
    interactionContainer.className = "d-flex gap-3 mt-3"
    interactionContainer.innerHTML = `<p>Reactions: ${post._count.reactions}</p>
    <p>Comments: ${post._count.comments}</p>`


    if (!post.media) {
        postContainer.append(postLink, postBody, interactionContainer)
    } else {
        const postImageContainer = document.createElement("div");
        let postImageUrl = post.media;
        const postImage = document.createElement("img");
        postImage.className = "img-fluid mt-1";
        postImage.src = postImageUrl;
    
        postImageContainer.append(postImage);
    
        postContainer.append(postLink, postBody, postImageContainer, interactionContainer);
    }

    return postContainer;
};