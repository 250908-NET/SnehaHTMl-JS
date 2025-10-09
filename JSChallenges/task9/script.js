function sayHello() {
  alert("hello from the external file!");
}

function sayGoodbye() {
  alert("Goodbye! have nice day");
}

// addd event listeners

let helloBtn = document.getElementById("helloBtn");
let goodbyeBtn = document.getElementById("goodbyeBtn");

//

helloBtn.addEventListener("click", sayHello);
goodbyeBtn.addEventListener("click", sayGoodbye);
