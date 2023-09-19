let precokg, consumo, valorF

precokg = prompt ("Digite o preço em kg: ")
consumo = prompt ("Digite o consumo em gramas: ")

valorF = consumo * (precokg / 1000)

document.write(`O valor a ser pago em reais é de ${valorF}`)