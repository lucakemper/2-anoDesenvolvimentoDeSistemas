var quantidade = prompt ("quantas pessoas na mesa?");
var valor = prompt ("valor da conta :")

var valorTotal = valor / quantidade;

document.getElementById("valorTotal").innerHTML = "<h1>" + valorTotal + "</h1>";