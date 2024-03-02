export const generateSinglePostHTML = (post) => {
    const postContainer = document.createElement("div");
    postContainer.className = "bg-white p-4 rounded-4 col-11 col-md-8 mx-auto mt-3 align-items-center d-flex flex-column container"

    const postLink = document.createElement("a");
    postLink.href = `/post/?id=${post.id}`;
    
    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

    postLink.append(postTitle);
    
    const postBody = document.createElement("p");
    postBody.textContent = post.body;
    postBody.className = "";

    if (!post.media) {
        postContainer.append(postTitle, postBody)
    } else {
        const postImageContainer = document.createElement("div");
        let postImageUrl = post.media;
        const postImage = document.createElement("img");
        postImage.className = "img-fluid mt-1";
        postImage.src = postImageUrl;
    
        postImageContainer.append(postImage);
    
        postContainer.append(postLink, postBody, postImageContainer);
    }

    return postContainer;
};