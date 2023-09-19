let produto, valor, desconto

produto = prompt ("Digite o produto que deseja")
valor = prompt("Quanto custa o seu produto?")

valorInt = parseInt(valor)
valorFloat = parseFloat(valor)
desconto = valorInt+valorFloat

document.write(`O valor dos dois produtos é de ${valor}R$ com desconto o valor fica de ${desconto}R$`)


