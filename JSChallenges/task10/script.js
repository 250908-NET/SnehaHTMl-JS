

 function greetUser(){

    let name = document.getElementById("nameInput").value;
    let color = document.getElementById("colorInput").value;
    
    if(name.trim()===""   &&  color.trim() ===""){
        alert ("Please enter your name and favorite color!");

    } else{
        alert ("Hello" + " " + name + "!" + "Your favorite color is " + " " + color) ;
    }
}
 

 let greetBtn = document.getElementById("greetBtn")
 greetBtn.addEventListener("click", greetUser);