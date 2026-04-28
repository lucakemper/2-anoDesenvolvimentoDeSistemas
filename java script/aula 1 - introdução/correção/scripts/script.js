function ex1(){
   var nPessoas = document.getElementById("nPessoas").value;
   var valor = document.getElementById("#valor").value;

   var valorDividido = valor / nPessoas;

   alert("O valor a ser pago por cada pessoa é: " + valorDividido);
    
 }

document.querySelector("#btnEx2").addEventListener("click", ex2);
 

function ex2(){
  var numero = document.getElementById("numero").value;
  alert(`O número ${numero} tem como antecessor o número ${numero - 1} e como sucessor o número ${numero + 1}`);
 }

// função anonima
// document.addEventListener ('click',() => {
//  });

