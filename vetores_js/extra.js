/*Faça um programa que armazena diferentes idades  em um array e mostra qual a idade do maior. 
1- O sistema deve pedir pro usuario inserir idade; 2- Quando o usuario decidir sair do programa, deve mostrar qual a maior idade digitada.*/

const idades = [];

while (true) {
  const input = prompt("Digite uma idade (ou 'sair' para encerrar):");
  
  if (input.toLowerCase() === 'sair') {
    break;
  }
  
  const idade = parseInt(input);
  
  if (!isNaN(idade)) {
    idades.push(idade);
  } else {
    alert("Por favor, digite uma idade válida.");
  }
}

if (idades.length > 0) {
  const maiorIdade = Math.max(...idades);
  alert(`A maior idade digitada foi: ${maiorIdade}`);
} else {
  alert("Nenhuma idade foi inserida.");
}
