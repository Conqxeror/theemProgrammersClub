export async function createPost(post) {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(post)
  });

  if (!response.ok) {
    throw new Error(`Failed to create post: ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

export async function getPosts() {
  const response = await fetch('/api/posts');

  if (!response.ok) {
    throw new Error(`Failed to get posts: ${response.status} - ${response.statusText}`);
  }

  return response.json();
}
