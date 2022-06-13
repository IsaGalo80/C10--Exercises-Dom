let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let myLista= document.querySelector("#myList");
	let myLi = document.createElement("li");
	let texto = document.createTextNode("Forth element");
	myLi.appendChild(texto);   
	myLista.appendChild(myLi); 

	console.log(myLista);
	console.log(myLi);
});
