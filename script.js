
//to add an item to the input list, get the dom element from the html

const itemList =[];
function addItem(){
          const itemInput =document.getElementById("itemInput");
          const item = itemInput.value.trim();

          if(!item){
            alert("Please enter a valid item")
            return;
          }

        itemList.push(item); // item added to the itemlist

    //display the list
     const ul = document.getElementById("itemListDisplay");
     const li = document.createElement("li")
     li.textContent =item;
     ul.appendChild(li);

        itemInput.value= '';
}