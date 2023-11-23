operacion = "";

function posar(numero){
	document.getElementById("pantalla").innerHTML += numero;
}

function operar(opera){
	trasllat = document.getElementById("pantalla").innerHTML;
	document.getElementById("memoria").innerHTML = trasllat;
	document.getElementById("pantalla").innerHTML = "";
	operacion = opera;
}

function total(){

	if(operacion == "suma"){
		numero1 = document.getElementById("memoria").innerHTML;
		numero2 = document.getElementById("pantalla").innerHTML;
		numero = 1*numero1+1*numero2;
		document.getElementById("pantalla").innerHTML = numero;
		document.getElementById("memoria").innerHTML = numero;
		operacion = "";
	}
	if(operacion == "resta"){
		numero1 = document.getElementById("memoria").innerHTML;
		numero2 = document.getElementById("pantalla").innerHTML;
		numero = numero1-numero2;
		document.getElementById("pantalla").innerHTML = numero;
		document.getElementById("memoria").innerHTML = numero;
		operacion = "";
	}
	if(operacion == "divisio"){
		numero1 = document.getElementById("memoria").innerHTML;
		numero2 = document.getElementById("pantalla").innerHTML;
		numero = numero1/numero2;
		document.getElementById("pantalla").innerHTML = numero;
		document.getElementById("memoria").innerHTML = numero;
		operacion = "";
	}
	if(operacion == "multiplicacio"){
		numero1 = document.getElementById("memoria").innerHTML;
		numero2 = document.getElementById("pantalla").innerHTML;
		numero = numero1*numero2;
		document.getElementById("pantalla").innerHTML = numero;
		document.getElementById("memoria").innerHTML = numero;
		operacion = "";
	}

	if(operacion == "zero"){
		document.getElementById("memoria").innerHTML = "0";
		document.getElementById("pantalla").innerHTML = "0";
	}

}