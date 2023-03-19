// Obtém os valores digitados pelo usuário na página anterior
var urlParams = new URLSearchParams(window.location.search)
var numero1 = parseFloat(urlParams.get('numero1'));
var numero2 = parseFloat(urlParams.get('numero2'));
var numero3 = parseFloat(urlParams.get('numero3'));

//Calcular pra saber qual triângulo é
let resultado

if(numero1!=numero2 && numero2!=numero3 && numero3!=numero1){
    resultado = "Escaleno";
}else if (numero1 == numero2 && numero2!=numero3){
    resultado = "Isósceles";
}else{
    resultado = "Equilátero";
}

//Exibe o resultado na página atual
document.write("<h1>Seu triângulo é</h1>")
document.write("<p>Triângulo "+ resultado +"</p>")
