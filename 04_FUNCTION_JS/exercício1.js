let a, b, c
function calcularMedia(a, b, c){
let media = (a + b + c) / 3
    return media;
}
a = Number(prompt("Qual o valor de a"))
b = Number(prompt("Qual o valor de b"))
c = Number(prompt("Qual o valor de c"))
console.log("A média é:", calcularMedia(a, b, c))