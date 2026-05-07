//  <div class="produto">
//                 <img src="https://jadoces.com.br/wp-content/uploads/2023/09/bob-pirulito-blong-28-melancia-672g_06fa6681d3debf075f95575d590cf09b.png.webp" alt="">
//                 <h1>Pirulito</h1>
//                 <p>R$ 20</p>
//                 <button type="button">Comprar</button>
//         `;
function aula() {

    //variavel <- vetor de [1..3] de caracteres

    var filmes = [
        "O Poderoso Chefão",
        "O Senhor dos Anéis",
        "Pulp Fiction"
    ];

    console.log(filmes[0]);
    console.log(filmes[1]);
    console.log("Um filme que está estourado é: " + filmes[0]);

    // push adiciona um elemento no final do vetor
    filmes.push("Matrix")
    console.log(filmes);

    // unshift adiciona um elemento no inicio do vetor
    filmes.unshift("O Exorcista")
    console.log(filmes);

    //pop deleta o ultimo elemento do vetor
    filmes.pop();
    console.log(filmes);


    //shift deleta o primeiro elemento do vetor
    filmes.shift();
    console.log(filmes);

    //splice (índice, quantos quer sobrescrever, dados)
    filmes.splice(1, 1,);
    console.log(filmes);

    filmes.splice(1, 0, "O Exorcista");
    console.log(filmes);

    filmes.splice(1, 0, "Matrix");
    console.log(filmes);

    var filmesCopia = filmes.slice();
    console.log(filmesCopia);

    filmes.map(cadaFilme => console.log(cadaFilme));


}
aula();

var doces = [
    ['Pudim', ' https://s2-receitas.glbimg.com/115DQucrWsNOUxf_ncmMUisprZI=/0x0:1080x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/w/a/cB6VP5QoOByFKEuCleIQ/jonreceitas-109758346-416338779271002-5424220606850697813-n.jpg', 15],
    ['Brigadeiro', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOA8_B0LV5uk0GG6mILqnKFaMenbZI0lnBQ&s', 10],
    ['Sorvete de oreo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CaIVOzooBfCyz-OmIKaf586lE1cNVOUgXg&s', 25],
];

doces.map(cadaDoce => {
    document.getElementById("produtos").innerHTML += ` 
                 <div class="produto">
                <img src="${cadaDoce[1]}" alt="${cadaDoce[0]}">
              <h1>${cadaDoce[0]}</h1>
                <p>${cadaDoce[2]}</p>
             <button type="button">Comprar</button>
             </div>
         `

})

