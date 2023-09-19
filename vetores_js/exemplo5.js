/*Crie um programa que preencha um vetor com oito números inteiros, calcule e mostre os resultantes. 
O primeiro vetor resultante deve conter os números positivos; o segundo deve conter os números negativos*/

const numeros = [];
const positivos = [];
const negativos = [];

for (let i = 0; i < 8; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}:`));
  numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    positivos.push(numeros[i]);
  } else if (numeros[i] < 0) {
    negativos.push(numeros[i]);
  }
  
}

console.log('Números Positivos:', positivos);

console.log('Números Negativos:', negativos);


