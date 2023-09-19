let cobrado, minutos, valor

    cobrado = prompt (`Quantos valor a ser cobrado a cada 15 minutos? `)
    minutos = prompt (`Quanto foi o uso total do computador? `)

valor = minutos / 15 * cobrado

document.write(`Você vai ficar ${valor} por essa quantidade no computador.`)