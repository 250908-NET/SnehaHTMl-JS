
const loadBtn = document.getElementById('loadBtn');
const container = document.getElementById('posts-container');

loadBtn.addEventListener('click', () => {
  // Clear container before loading
  container.innerHTML = 'Loading...';

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      container.innerHTML = ''; // Clear loading text
      posts.slice(0, 5).forEach(post => {
        const item = document.createElement('div');
        item.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        item.style.border = '1px solid #ccc';
        item.style.padding = '10px';
        item.style.margin = '10px 0';
        container.appendChild(item);
      });
    })
    .catch(error => {
      container.textContent = "Error fetching posts: " + error;
      console.error(error);
    });
});
