function calculate(num1, value, operator){
    switch(operator){
        case "+": 
            calculated = parseFloat(value) + parseFloat(num1); 
            break; 
        case "-": 
            calculated = parseFloat(num1) - parseFloat(value); 
            break;
        case "*": 
            calculated = parseFloat(value) * parseFloat(num1);
            break; 
        case "/":
            calculated = parseFloat(num1) / parseFloat(value); 
            break;
    }
    return calculated; 
}

let num1="";  
let value = ""; 
let calculated = ""
let operator = ""
let buttons = document.querySelectorAll(".op-button, .num-button");
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let display = document.querySelector(".display"); 
        if (button.className == "num-button"){
            value += button.id; 
            display.textContent = value;  
        }
        else { //when oeprator is pressed 
            if (num1==""){ //if num1 is empty (i.e. if it is the very first operation)
                num1 = value; 
                value = ""; 
                operator = button.id; 
            }
            else if (value==""){
                operator = button.id; 
            }
            else if (value!=""){
                if (button.id == "=")
                {
                    calculated = calculate(num1, value, operator);    
                }
                else{
                    calculated = calculate(num1, value, operator);
                    operator = button.id;  
                }
                display.textContent = calculated; 
                num1 = calculated; 
                value="";
            }
        }
    })
})
