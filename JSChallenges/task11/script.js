

function addNumbers (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let sum = n1 +n2 ;
    document.getElementById("result").textContent = "Result:" + sum;
}

function subtractNumbers (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let diff= n1 - n2 ;
    document.getElementById("result").textContent = "Result:" +  diff;
}

function multiplyNumbers (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let product = n1 *  n2 ;
    document.getElementById("result").textContent = "Result:" + product;
}

function divideNumbers (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if(n2===0){
        document.getElementById("result").textContent  = "Cannot divide by zero" ;
    }
    let quotient = n1 /n2 ;
    document.getElementById("result").textContent = "Result:" + quotient;
}

document.getElementById ("addBtn").addEventListener("click" ,addNumbers);
document.getElementById ("subBtn").addEventListener("click" ,subtractNumbers);
document.getElementById ("mulBtn").addEventListener("click" ,multiplyNumbers);
document.getElementById ("divBtn").addEventListener("click" ,divideNumbers);
