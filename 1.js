function calc(){
    let operator = document.querySelector(".operation").value
    let num1 = + document.querySelector(".num1").value;
    let num2 = + document.querySelector(".num2").value;
    let displayview = document.querySelector(".out");
    
    for(let i = 0; i < operator.length; i++){
    switch (operator[i]){
        case "+": 
          displayview.innerHTML = num1 + num2; 
        break;
        case "-": 
          displayview.innerHTML = num1 - num2; 
        break;
        case "*": 
         displayview.innerHTML = num1 * num2; 
        break;
        case "/": 
          displayview.innerHTML = num1 / num2; 
        break;             
    }
}

}

document.querySelector('input[type="button"]').onclick = calc;