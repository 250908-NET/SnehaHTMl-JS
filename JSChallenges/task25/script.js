const fetchBtn = document.getElementById('fetchBtn');
const output = document.getElementById('output');

fetchBtn.addEventListener('click', () => {
  const id = document.getElementById('postId').value.trim();

  if (!id) {
    output.textContent = "Please enter a valid post ID.";
    return;
  }

  output.textContent = "Loading...";

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Post not found");
      }
      return res.json();
    })
    .then(data => {
      output.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    })
    .catch(error => {
      output.textContent = "Error: " + error.message;
      console.error(error);
    });
});
