// Faça um programa que preencha um vet com dez números inteiros, calcule e mostre o vet resultante de uma ordenação descrescente. 
// Exemplo:
// Valor Inicial: 8,6,9,4
// Valor Final: 9,8,6,4

let vet = []

for(let i = 0 ; i <= 9 ; i++){

let valor = parseInt(prompt(`Digite o valor ${i+1}`))
    if(!isNaN(valor)){
        vet.push(valor)
    }else{
        console.log("Digite um número inteiro valido.")
        i--
    }
}
for (let i = 0;  i < vet.length - 1; i++){
    for (let j = i+1 ;j < vet.length;j++){
        if(vet[i] < vet[j]){
            let c = vet[i]
            vet[i] = vet[j]
            vet[j] = c
        }
    }
}
 
console.log("Valor decrescente:" + vet)   