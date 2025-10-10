// Get the output container
const output = document.getElementById('output');

// Fetch post from API
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    // Display the title and body
    output.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
  })
  .catch(error => {
    output.textContent = "Error loading data: " + error;
    console.error(error);
  });
