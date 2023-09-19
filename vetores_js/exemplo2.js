// Crie um programa que simule uma lista de compras e coloque em um array. O programa deve conitnuar rodando até que o usuário peça para sair.
//Depois, ebixa na tela os produtos cadastrados.
let compras = [];
let i = 0;
do {
  compras[i] = prompt(`Digite o ${i}° produto`);
  if (isNaN(compras[i])) {
    console.log(compras[i]);
    i++;
  } else {
    let sair = confirm("Confirma a saída?");
    if (sair) {
      break;
    } else {
      continue;
    }
  }
} while (true);
