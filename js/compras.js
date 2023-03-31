let idNumber = 1;
let items = 0;
let precio = 0;
let precioFinal = 0;
let carrito = [];
const productos = [
	{
		nombre: "Dungeons&Dragons",
		precio: 500
	},
	{
		nombre: "La extorsión",
		precio: 500
	},
	{
		nombre: "65",
		precio: 500
	},
];

function addItem(e){
	if (!(e.target.classList.contains (`locked`))){
		carrito.push(productos[e.target.value].precio);
		precio += productos[e.target.value].precio;
		lockItem(e);
		addToCart(e);
		addPrecio(e);
		removeAlert();
		idNumber += 1;
	}
}	

function lockItem(e){
	e.target.innerText = "added";
	e.target.classList.toggle(`locked`);
}
function addToCart(e){
	var item = document.createElement("li");
	item.setAttribute("id", `item-${idNumber}`);
	item.setAttribute("onclick", "deleteItem(this.id)");
	var img = document.createElement("img");
	img.setAttribute("src", `https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png`);
	img.setAttribute("class", `x`);
	item.appendChild(img);
	var contenido = document.createTextNode(productos[e.target.value].nombre);
	item.appendChild(contenido);
	document.getElementById(`cart-items`).appendChild(item);
	var price = document.createElement("li");
	price.setAttribute("id", `item-${idNumber}-price`);
	var number = document.createTextNode(`$${productos[e.target.value].precio}`);
	price.appendChild(number);
	document.getElementById(`cart-prices`).appendChild(price);
}
function addPrecio(e){
	document.getElementById(`total`).innerText = `TOTAL: $${precio}`;
}
function removeAlert(){
	if (items == 0){
		document.getElementById(`alert`).innerText = "";
	}
}

function deleteItem(clickedId){
	const itemToDeleteA = document.getElementById(`${clickedId}`);
	const itemToDeleteB = document.getElementById(`${clickedId}-price`);
    const fatherA = document.getElementById('cart-items');
    const fatherB = document.getElementById('cart-prices');
    fatherA.removeChild(itemToDeleteA);
    fatherB.removeChild(itemToDeleteB);
}
function pressBuy(){
	if(precio > 0){
		document.getElementById(`precio-final`).classList.remove(`hidden`);
		document.getElementById(`cart`).classList.add(`hidden`);
		calculoPrecio();
	}
}
function calculoPrecio(){
	for(i=0; i< carrito.length; i++){
		precioFinal = precioFinal + carrito[i];
	}
	mostrarPrecioFinal();
}
function mostrarPrecioFinal(){
	var finalPrecio = document.createElement("p");
	var finalNumber = document.createTextNode(`$${precioFinal}`);
	finalPrecio.appendChild(finalNumber);
	document.getElementById(`precio-final`).appendChild(finalPrecio);
}
