function VerificarMaiorIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade"
    }
    else { return "Você é menor de idade" }
}
idade = Number(prompt("Qual a idade do usuario"))

alert(VerificarMaiorIdade(idade))
