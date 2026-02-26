Algoritmo "semnome"
//EXERCICIO 1
Var
i2: inteiro
contador: inteiro
primeiroValor: real
segundoValor: real
numeroAtual: real
soma: real
numero, numeroA, numeroB, numeroTOT: inteiro
NUMEROIMPAR:real
i: inteiro
procedimento LerESomar()
Inicio
   contador <- 1
   soma <- 0

   repita
      Escreva("Escreva o ", contador, "º número: ")
      Leia(numeroAtual)

      soma <- soma + numeroAtual

      contador <- contador + 1
   ate contador > 10
fimprocedimento

procedimento MostrarSoma()
Inicio
   Escreval("")
   Escreval("A soma de todos os valores digitados é: ", soma)
fimprocedimento

Inicio
LerESomar()
MostrarSoma()
//EXERCICIO 2
Escreval ("Escolha um valor")
leia (primeiroValor)
Escreval ("Escolha outro valor")
leia (segundoValor)
Escreval ("Agora veremos qual é maior e qual é menor")
Se (primeiroValor = segundoValor) entao
Escreval ("")
Escreval ("Pelo visto os dois valores são iguais, não há um menor nem um maior")
Escreval ("")
fimse
Se (primeiroValor > segundoValor) entao
Escreval ("")
Escreval (primeiroValor, " é maior que " ,segundoValor)
Escreval ("")
fimse
Escreval ("")
Se (primeiroValor < segundoValor) entao
Escreval ("")
Escreval (segundoValor, " é maior que ", primeiroValor)
Escreval ("")
fimse
//EXERCICIO 3
Escreval ("Vou contar de 1 a 100 e a cada múltiplo de 10 irei comentar")
para i de 1 ate 100 faca
escreva(i)

se (i % 10 = 0) entao
escrevaL(" - Múltiplo de 10")

 senao
escrevaL("")

fimse
fimpara
//EXERCICIO 4
Escreval ("Aqui irei mostrar todos os números impares entre 100 e 200")
para i de 100 ate 200 faca
   se i mod 2 <> 0 entao
      Escreval(i)
   fimse
fimpara
Fimalgoritmo


Fimalgoritmo