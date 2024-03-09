import { authFetch } from "../../js/api/auth/handleAuth.mjs";
import { POSTS_URL } from "../../js/api/constants.mjs";

// Function to fetch id form to add to query parameters
async function getPostById(postId) {
  const response = await authFetch(`${POSTS_URL}/${postId}`);
  return response.json();
}

// Function to update a post using a PUT request
async function updatePost(postId, updatedData) {
  const response = await authFetch(`${POSTS_URL}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  return response.json();
}

// Function to populate the form with post data
function populateForm(post) {
  document.getElementById("postTitle").value = post.title;
  document.getElementById("postBody").value = post.body;
  document.getElementById("formFile").value = post.media;
}

// Function to handle form submission
async function handleFormSubmit(event) {
  event.preventDefault();

  const postId = new URLSearchParams(window.location.search).get("id");

  const updatedData = {
    title: document.getElementById("postTitle").value,
    body: document.getElementById("postBody").value,
    media: document.getElementById("formFile").value,
  };

  // Update the post with the modified data
  try {
    const updatedPost = await updatePost(postId, updatedData);
    alert('Post updated successfully!');

    window.location.href = `/post/?id=${postId}`;

  } catch (error) {
    console.error('Error updating post:', error.message);
    alert('Failed to update post. Please try again.');
  }
}

async function main() {
  const postId = new URLSearchParams(window.location.search).get("id");

  if (postId) {
    try {
      const post = await getPostById(postId);
      populateForm(post);
    } catch (error) {
    }
  }
}

main();

document.getElementById('editPostForm').addEventListener('submit', handleFormSubmit);