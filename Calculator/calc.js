function display(val){
    document.getElementById('result').value += val
    return val
}

function result(){

    let x = document.getElementById('result').value
    let y =  evaluateExpression(x); 
    document.getElementById('result').value = y
    return y

}

function removeLast(){
	let str = document.getElementById('result').value
	str = str.slice(0, -1); 
console.log(str);
	document.getElementById('result').value = str
    return str;
	
}

function clearScreen(){
    document.getElementById('result').value = ''
}

function evaluateExpression(expression) {
  let numbers = expression.split(/\+|\-|\*|\//);
  let operators = expression.match(/\+|\-|\*|\//g);
  let result = parseFloat(numbers[0]);
  for (let i = 0; i < operators.length; i++) {
    result = operate(result, parseFloat(numbers[i + 1]), operators[i]);
  }
  return result;
}

function operate(num1, num2, operator) {
    console.log (num1,num2,operator)
    if (isNaN(num2)){
        return num1 + operator;
    }
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default: clearScreen()
  }
}


window.onload = function () {
	
	document.onkeypress = keyboardInput;
    
    // for deleting value using backspace
    document.onkeydown = backspaceKeyEvent;
}

function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
		let x =document.getElementById('result').value
        if (key.which === 48) {
            x += "0";
        } else if (key.which === 49) {
            x += "1";
        } else if (key.which === 50) {
            x += "2";
        } else if (key.which === 51) {
            x += "3";
        } else if (key.which === 52) {
            x += "4";
        } else if (key.which === 53) {
            x += "5";
        } else if (key.which === 54) {
            x += "6";
        } else if (key.which === 55) {
            x += "7";
        } else if (key.which === 56) {
            x += "8";
        } else if (key.which === 57) {
            x += "9";
        } else if (key.which === 46) {
            x += ".";
        } else if (key.which === 40) {
            x += "(";
        } else if (key.which === 41) {
            x += ")";
        } else if (key.which === 42) {
            x += "*";
        } else if (key.which === 47) {
            x += "/";
        } else if (key.which === 43) {
            x += "+";
        } else if (key.which === 45) {
            x += "-";
        } else if (key.which === 13) {
            result();
        } else if (key.which === 99) {
            clearScreen();
        } else {
            x = x;
        }
        return true;
    }
}

// for deleting value using backspace
function backspaceKeyEvent (event) {
    if (event.which === 8) {
        removeLast();
    }
}