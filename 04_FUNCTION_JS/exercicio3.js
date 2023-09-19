function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

let numeroAleatorio = gerarNumeroAleatorio();
console.log("O número aleatório gerado é: " + numeroAleatorio);
