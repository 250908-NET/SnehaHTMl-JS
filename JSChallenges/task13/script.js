
const text = document.getElementById("text")
const redBoldBtn = document.getElementById("redBoldBtn")
const resetBtn = document.getElementById("resetBtn")


const container = document.getElementById("container")
const addParaBtn = document.getElementById("addParaBtn")
const removeParaBtn = document.getElementById("removeParaBtn")


let newPara;  // to  hold the new para

redBoldBtn.addEventListener("click", function(){

    text.style.color = "red";
    text.style.fontWeight= "bold";
});


// to reset the style

resetBtn.addEventListener("click" , function(){

    text.style.color= "";
    text.style.fontWeight="";
})

//to add a ne para

addParaBtn.addEventListener("click", function(){

    newPara= document.createElement("p")
    newPara.textContent = "This is the new paragraph that i'm going to add"
    container.appendChild(newPara);
})

removeParaBtn.addEventListener( "click" , function() {
    if(newPara){
        container.removeChild(newPara);
        newPara="";
    }
})