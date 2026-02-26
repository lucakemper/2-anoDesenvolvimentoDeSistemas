Algoritmo "Brazil street"

Var
opcao : inteiro
valorTotal : real
cancelado : logico
Inicio
//parametro - parenteses
//variavel - na memoria''
procedimento adicionarValor(valor: real)

inicio
valorTotal <- valorTotal + valor
    escreval("VALOR DA COMPRA : R$",valorTotal)
    limpaTela
fimprocedimento

 procedimento finalizar(status: caractere)
 inicio
 escolha (status)
 caso "cancelado"
 cancelado <- verdadeiro
 caso "comprar"
 cancelado <- falso
 fimEscolha
 
 escreval("finalizar")
    cancelado <- falso
    interrompa
 fimProcedimento
enquanto (verdadeiro) faca
   limpaTela
   escreval ("*******************")
   escreval ("****Brazil Street****")
   escreval ("---------------------")
   escreval ("1) Tenis - R$ 450,00")
   escreval ("2) Camiseta - R$ 150, 00 ")
   escreval ("3) Short -  R$ 100, 00")
   escreval ("4) Blusa de frio - R$ 500,00")
   escreval ("5) Conjunto - R$ 2000,00")
   escreval ("6) FINALIZAR COMPRA")
   escreval ("7) SAIR")
   leia(opcao)

   escolha (opcao)
   caso 1
    adicionarValor(450)
    caso 2
    adicionarValor(150)
    caso 3
    adicionarValor(100)
    caso 4
    adicionarValor(500)
    caso 5
    adicionarValor(2000)
    caso 6
    finalizar ("comprar")
    caso 7
    finalizar  ("cancelado")
    interrompa
    outrocaso
    escreval ("erro ! opcao inv lida")
    fimescolha
fimEnquanto
se (cancelado)entao
   escreval ("Pedido Cancelado")
senao
   escreval ("Valor final R$ ",valorTotal)
Fimse
Fimalgoritmo






