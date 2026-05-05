function aula() {
    // enquanto () faca ...
    // para con ate con2 interable
    var i = 1;
    
    // while (i <= 10) {
    //  console.log(i);
    // i++

    // }
    while (false) {
        var pergunta = confirm("Repete? ");

        if (pergunta == false) {
            break;
        }
    }
    for(var i; i <= 10; i++) {
        document.querySelector('main').innerHTML += `
        <p> Sou top em programação </p>
        
        `;
    }
    // faz verificação(aceita false)

    do{
        console.log(i);
        i++
    }while(i<10);
}

function produtos(){
    for(var i = 0;i<10;i++){
        document.getElementById("produtos").innerHTML += `
        <div class="produto">
                <img src="https://jadoces.com.br/wp-content/uploads/2023/09/bob-pirulito-blong-28-melancia-672g_06fa6681d3debf075f95575d590cf09b.png.webp" alt="">
                <h1>Pirulito</h1>
                <p>R$ 20</p>
                <button type="button">Comprar</button>
        `;
    }

}

produtos()
