const input = document.getElementById("taskInput");
const button = document.getElementById("addTask");
const list = document.getElementById("taskList");

button.addEventListener("click", function() {
  const taskText = input.value.trim();

  // prevent adding empty tasks
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // toggle 'done' class on click
  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });

  list.appendChild(li);
  input.value = "";
});
