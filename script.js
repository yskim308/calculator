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
        case "%":
            calculated = parseFloat(value) * 0.01 * parseFloat(num1)

    }
    return calculated; 
}

function fuckOff(string){
    num = parseFloat(string); 
    roundedNum = Math.round(num * 1000)/1000; 
    return roundedNum.toString(); 
}

let num1="";  
let value = ""; 
let calculated = ""
let operator = ""
let buttons = document.querySelectorAll(".op-button, .num-button");
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let display = document.querySelector(".display"); 
        if (button.id == "C"){
            num1 = ""; 
            value = ""; 
            display.textContent = "0";  
        }
        else if (button.className == "num-button"){
            if (button.id == "minus"){
                value = "-" + value; 
            }
            else {
                value += button.id; 
            }
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
                {//don't save the equals operator 
                    calculated = calculate(num1, value, operator);    
                }
                else{//save the operator that is pressed 
                    calculated = calculate(num1, value, operator);
                    operator = button.id;  
                }
                display.textContent = fuckOff(calculated); 
                num1 = calculated; 
                value="";
            }
        }
    })
})
