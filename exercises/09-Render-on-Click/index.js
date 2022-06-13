let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	var divElem = document.getElementsByTagName("body")[0];
var myNewHOne = document.createElement("div");
var t = document.createTextNode("Hello World");
myNewHOne.style.background = "yellow";
myNewHOne.appendChild(t); 
divElem.appendChild(myNewHOne); 
});
