const fetchBtn = document.getElementById('fetchBtn');
const output = document.getElementById('output');

fetchBtn.addEventListener('click', () => {
  const id = document.getElementById('postId').value.trim();

  if (!id) {
    output.textContent = "Please enter a valid post ID.";
    return;
  }

  output.textContent = "Loading...";

  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Post not found"); // handles 404 or other HTTP errors
      }
      return response.json();
    })
    .then(data => {
      if (!data.title) { // additional check if API returns empty object
        output.textContent = "No post found.";
        return;
      }
      output.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    })
    .catch(error => {
      output.textContent = "Error: " + error.message;
      console.error("Fetch error:", error);
    });
});
