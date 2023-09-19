/* Faça um programa que preencha dois vetores com dez elementos númerios cada um e mostre um vetor resultante da intercalação deles. 
Vetor 1: 1/3/5/7
Vetor 2: 2/4/6/8
1/2/3/4/5/6/7/8*/

let vetor1 = []
let vetor2 = []
let vetor3 = []
let i = 0
let a = 0



    for(let i = 0; i <= 9; i++){
    vetor1[i] = Number(prompt(`Digite o número do 1° vetor`))

    vetor2[i] = Number(prompt("Digite o número do 2° vetor"))

    
    }
    for(a = 0 ; a <= vetor1.length; a++ ){
   vetor3.push(vetor1[a])
   vetor3.push(vetor2[a])
    }
   
      document.write('Vetor 1: ' + vetor1.join(', ') + '<hr>');
      document.write('Vetor 2: ' + vetor2.join(', ') + '<hr>');
      document.write('Vetor Resultante: ' + vetor3.join(', ') + '<hr>');
    

    


