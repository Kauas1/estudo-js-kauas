//1° Declarar todas as variáveis
let nome, anoNascimento, anoAtual, idade

//2° Variáveis que irão receber valor
nome = prompt("Digite o seu nome: ")
anoNascimento = prompt("Digite o anoNascimento: ")
anoAtual = prompt("Digite o anoAtual: ")

// 3° Casting nas variáveis que possuem valor númerico

anoNascimento = parseInt(anoNascimento)
anoAtual = Number(anoAtual)

// 4° Processar as variáveis que possuem valor

idade = anoAtual-anoNascimento

//5° Mostrar o resultado

document.write(`Olá ${nome}, sua idade é ${idade} anos`)