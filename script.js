console.log("Here is the javascript.......");
let zero = document.getElementById("zero");
console.log(zero);
let screen = document.getElementById("screen");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let add = document.getElementById("add");
let minus = document.getElementById("minus");
let modulus = document.getElementById("modulus");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let answer = document.getElementById("answer");
let dot = document.getElementById("dot");
let calculator = document.getElementById('calculator');


// ******************************* This code prevents unusual enterance of input by user ************************
if (screen.innerText.includes("N") == true) {
  screen.innerText = "Syntax Error";
//   calculator.style.animation = 'shake .5s ease-in 0s 4';
}

// ********************** This is the clear button to clear all the screen*********************************
let clear = document.getElementById("clear");

let clearScreen = function () {
  screen.innerText = "";
  var1 = "";
  var2 = "";
  operator = "";
};
clear.onclick = function () {
  clearScreen();
};

// ********************** This is the backSpace button to delete the entries one by one*********************************
let backSpace = document.getElementById("backSpace");

let delOne = function () {
  let text = screen.innerText;
  screen.innerText = text.slice(0, text.length - 1);
  if (operator == "") {
    let v1 = var1.slice(0, var1.length - 1);
    var1 = v1;
  } else if (operator != "" && var2 != "") {
    let v2 = var2.slice(0, var2.length - 1);
    var2 = v2;
  } else {
    operator = "";
  }
};
backSpace.onclick = function () {
  delOne();
};

let var1 = "";
let var2 = "";
let operator = "";
let final = "";

// **********************This is the function that handles when someone clicks on a button****************
let numberclick = function (x) {
  if (operator == "") {
    var1 += x;
    screen.innerText = var1;
  } else if (operator != "") {
    var2 += x;
    screen.innerText += x;
  }
};

// **************************** This function handles the final calculation *****************************
let result = function () {
  if (operator == "+") {
    final = parseFloat(var1) + parseFloat(var2);
    screen.innerText = final;
    return final;
  } else if (operator == "-") {
    final = parseFloat(var1) - parseFloat(var2);
    screen.innerText = final;
    return final;
  } else if (operator == "/") {
    final = parseFloat(var1) / parseFloat(var2);
    screen.innerText = final;
    return final;
  } else if (operator == "*") {
    final = parseFloat(var1) * parseFloat(var2);
    screen.innerText = final;
    return final;
  } else if (operator == "%") {
    final = parseFloat(var1) % parseFloat(var2);
    screen.innerText = final;
    return final;
  }
};

// ************************* This fucntion handles when clicked on operator***********************
let operatorClick = function (o) {
  if (operator == "") {
    operator = o;
    screen.innerText += o;
  } else {
    let f = result();
    operator = o;
    screen.innerText += o;
    var1 = f;
    var2 = "";
  }
  // ******************************* This code prevents unusual enterance of input by user ************************
  if (screen.innerText.includes("N") == true) {
    screen.innerText = "Syntax Error";
  }
};

// *********************************Now applying this function to all the buttons***************************************
zero.onclick = function () {
  numberclick("0");
};

one.onclick = function () {
  numberclick("1");
};
two.onclick = function () {
  numberclick("2");
};
three.onclick = function () {
  numberclick("3");
};
four.onclick = function () {
  numberclick("4");
};
five.onclick = function () {
  numberclick("5");
};
six.onclick = function () {
  numberclick("6");
};
seven.onclick = function () {
  numberclick("7");
};
eight.onclick = function () {
  numberclick("8");
};
nine.onclick = function () {
  numberclick("9");
};
dot.onclick = function () {
  numberclick(".");
};
divide.onclick = function () {
  operatorClick("/");
};
multiply.onclick = function () {
  operatorClick("*");
};
add.onclick = function () {
  operatorClick("+");
};
minus.onclick = function () {
  operatorClick("-");
};
modulus.onclick = function () {
  operatorClick("%");
};
answer.onclick = function () {
  f = result();
  let fs = f.toString();
  var1 = fs;
  operator = "";
  var2 = "";
};
