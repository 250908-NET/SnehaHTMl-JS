const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click" ,function() {

    const randomColor = getRandomColor();

  document.body.style.backgroundColor= randomColor;

})

function getRandomColor (){
    const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Class Manipulation
const text = document.getElementById("text");

text.addEventListener("click", function () {
  text.classList.toggle("highlight");
});