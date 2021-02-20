// 1. Create the button
var buttonPlus = document.createElement("button-plus");
buttonPlus.innerHTML = "+";


var buttonMinus = document.createElement("button-minus");
buttonMinus.innerHTML = "-";


// 2. Append somewhere
var increase = document.getElementsByClassName("increase")[0];
increase.appendChild(buttonPlus);

var decrease = document.getElementsByClassName("decrease")[0];
decrease.appendChild(buttonMinus);

//3. function to increase or decrease the value
var counter = 0;

buttonPlus.onclick= function changeValue () {
     counter ++;
     document.getElementById("figure").innerHTML = counter;
  };

buttonMinus.onclick = function changeValue () {
     counter --;
     document.getElementById("figure").innerHTML = counter;
  };
