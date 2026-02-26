Algoritmo "Brazil street"

Var
opcao : inteiro
valorTotal : real
cancelado : logico
Inicio
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
    valorTotal <- valorTotal + 450
    escreval("VALOR DA COMPRA : R$",valorTotal)
    limpaTela
    caso 2
    valorTotal <- valorTotal + 150
    escreval ("VALOR DA COMPRA : R$",valorTotal)
    limpaTela
    caso 3
    valorTotal <- valorTotal + 100
    escreval("VALOR DA COMPRA : R$",valorTotal)
    limpaTela
    caso 4
    valorTotal <- valorTotal + 500
    escreval("VALOR DA COMPRA : R$",valorTotal)
    limpaTela
    caso 5
    valorTotal <- valorTotal + 2000
    escreval("VALOR DA COMPRA : R$",valorTotal)
    limpaTela
    caso 6
    escreval("selecionou finalizar")
    cancelado <- falso
    interrompa
    caso 7
    escreval("selecionou sair")
    cancelado <- verdadeiro
    interrompa
    outrocaso
    escreval ("erro ! opção inválida")
    fimescolha
fimEnquanto
se (cancelado)entao
   escreval ("Pedido Cancelado")
senao
   escreval ("Valor final R$ ",valorTotal)
Fimse
Fimalgoritmo
