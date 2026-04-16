var numero = prompt("Digite um número para ter seu sucessor e antecessor: ");
var sucessor = parseInt(numero) + 1;
var antecessor = parseInt(numero) - 1;

document.getElementById("resultado").innerHTML = "<h1>O sucessor de " + numero + " é " + sucessor + " e o antecessor é " + antecessor + "</h1>";