/*let diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta" ];

diasDaSemana[0] = "Domingo"
diasDaSemana[1] = "Segunda"
diasDaSemana[2] = "Terça"
diasDaSemana[3] = "Quarta"
diasDaSemana[4] = "Quinta"
diasDaSemana[5] = "Sexta"
diasDaSemana[6] = "Sabádo"

console.log(diasDaSemana)

let numeros = [];
for(let i = 0 ; i < 12; i++){
    numeros[i] = Number(prompt(`Digite um valor para o indice ${i} do vetor`))
}
console.log(numeros)

for(let i = 0; i < 12; i++){
    console.log(numeros[i]+"\n")
}*/


// Dada uma esquencia de n numeros, imprimi-la na ordem inversa a da leitura. 

/*let n, numeros = []

n = Number(prompt(`Digite quantos números você quer cadastrar no Array`))

for(let i = 0; i < n;i++){
    numeros[i] = Number(prompt(`Digite um valor para o indice ${i} do vetor`))
}
document.write(numeros)
document.write(`<br>---------------------------<br>`)

for(let i = n-1; i >=0; i--){
    document.write(numeros[i])
}*/

//Escreva um algoritmo que solicite ao usuário a entrade de 5 números, e que exiba o somatório desses 
//números na tela. Após exibir a soma, o programa deve mostrar também os números que o usuário digitou, 
//um por linha.

let nm_total=0 ,n = [];

debugger
for(let i = 1; i <= 5; i++){
    n[i] = Number(prompt(`Digite  ${i}° valor`))
   
    nm_total += n[i]
    

}
document.write(`${nm_total}`)
document.write(`<hr> ${n[1]} \n ${n[2]} \n ${n[3]} \n ${n[4]} \n ${n[5]} `)






