Algoritmo "Pescador"

Var
peso:inteiro
excesso: inteiro
Multa: inteiro
limite :inteiro
Inicio
multa <- 4
limite <- 50
escreval ("Quantos kilos de peixe joão esta trazendo?")
leia (peso)
excesso <- peso-limite
se (peso >= limite) entao
escreval ("vc tem R$",excesso * multa ," a pagar")
senao
escreval("está tudo certo pode passar")
fimse
Fimalgoritmo