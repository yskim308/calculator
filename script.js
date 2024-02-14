let num1="";  
let value = ""; 
let buttons = document.querySelectorAll(".op-button, .num-button");
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let display = document.querySelector(".display"); 
        console.log("num1: " + num1 + " and value: " + value);
        if (button.className == "num-button"){
            value += button.id; 
            display.textContent = value;  
        }
        else {
            if (num1==""){
                num1 = value; 
                value = ""; 
            }
            else{
                display.textContent = parseFloat(value) + parseFloat(num1); 
                num1 = value; 
                value = "";
            }
        }
    })
})
