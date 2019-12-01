var css = document.querySelector("h3");

//Use querySelector with .class instead of using SelectByClassName
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");
var randomButton = document.querySelector(".button5");

//generates random color
function colorGen() {   
    var color1 = Math.floor(Math.random() * 255) + 1;
    var color2 = Math.floor(Math.random() * 255) + 1;
    var color3 = Math.floor(Math.random() * 255) + 1;
    var backgroundColor = 'rgb('+ color1 + ',' +  color2 + ',' + color3 +')';
    return backgroundColor;
  }

//receives random color and sets it as a background
function getRandomColor(){
    body.style.background = "linear-gradient(to right, " + colorGen() + ", " + colorGen() + ")";
}



//sets the color of a background like in CSS
function setColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    //adds a color text to the body
    css.textContent = "You have generated: " + body.style.background + ";";
}

//color of a first generator
color1.addEventListener("input", setColor);

//color of a second generator
color2.addEventListener("input", setColor);

//random button generator
randomButton.addEventListener("click", getRandomColor);

