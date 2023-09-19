let modelo, preco, ValorEntrada, Saldo

modelo = prompt ("Fale o modelo do carro")

preco = prompt("Qual o preço do carro? ")

ValorEntrada = preco / 2
ValorEntrada = parseInt(ValorEntrada)

saldo = Math.round(ValorEntrada) / 12


document.write(`O modelo ${modelo} custa ${preco} a entrada é de ${ValorEntrada} e seu saldo em 12x ${saldo} `)

