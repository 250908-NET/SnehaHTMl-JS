const makeBook = (title, author) => ({
  title: title,
  author: author
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    // Use your arrow function to format data
    const book = makeBook(data.title, "Unknown Author");
    console.log(book);
  })
  .catch(error => console.error('Error fetching data:', error));

