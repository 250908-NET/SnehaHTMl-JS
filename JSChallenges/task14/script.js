
const myList =document.getElementById("myList");
const addItemBtn=document.getElementById("addItemBtn");
const myImg= document.getElementById("myImg");
const changeImgBtn = document.getElementById("changeImgBtn");

// add items

addItemBtn.addEventListener("click", function(){

     const newItem = document.createElement("li")
     newItem.textContent= "New Item";
     myList.appendChild(newItem);
});

changeImgBtn.addEventListener("click", function(){
    myImg.src= "dog.jpg";
    myImg.alt = "dog";
});