var nome = "Scarface";
var vida = 100;
var dinheiro = 1000000;
var dano = 1000;

function mostrarPersonagem() {
    document.getElementById("ficha").innerHTML = `
    <img src="images/scarface.gif" id="icone alt=">
<h1>${nome} </h1>
  <p>❤️Vida: ${vida}</p>
  <p>💵Dinheiro: ${dinheiro}</p>
    <p>⚔️Dano: ${dano}</p> 
`;
}

document.getElementById("vida").addEventListener("click", addVida);
document.getElementById("moeda").addEventListener("click", addMoney);
document.getElementById("dano").addEventListener("click", addDano);

function addVida() {
    if (vida >= 100) {
        alert("Vida já está no máximo!");
    } else {

    } vida += 10
};

function addMoney() {
    var quantosMoney = confirm("Quer adicionar 1 ou personalizado? (cancelar)?");
    if (quantosMoney) {
    } else {
        moeda = Number(prompt("Qual a quantia personalizada?"));

        dinheiro += 1000
    };
}

function addDano() {
    var arma = prompt(`Qual a arma o ${nome} está usando?`);
    switch (arma) {
        case "fuzil":
            alert("Fuzil selecionado! 20 de dano");
            dano += 20;
            break;
        case "m1014":
            alert("M1014 selecionada! 50 de dano");
            dano += 50;
            break;
    }
}
mostrarPersonagem();