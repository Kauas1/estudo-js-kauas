// Faça um programa que preencha três vetores com cinco posições cada. O primeiro vetor receberá os nomes de cinco funcionários; o segundo e o terceiro vetor receberão, respectivamente, o salário e o tempo de serviço de cada um. Mostre um primeiro relatório apenas com os nomes dos funcionários que não terão aumento; mostre o segundo relatório apenas com os nomes e novos salários dos funcionários que terão aumento. Sabe-se que os funcionários que terão direito ao aumento são aqueles que possuem tempo de serviço superior a cinco anos ou salário inferior a R$400,00. Sabe-se ainda que, se o funcionário satisfazer às duas condições anteriores, tempo de serviço e salário, o aumento será de 35%; para o funcionário funcionário:


let funcionarios = [], salarios = [], tempoDeServico = []

for (let i = 0; i < 5; i++) {
    funcionarios[i] = prompt("Digite o nome do funcionario")
    salarios[i] = Number(prompt("Digite o salário do funcionário:"));
    tempoDeServico[i] = Number(prompt("Digite o tempo de serviço do funcionário:"));
}
console.log("Funcionários que não terão aumento:");
for (let i = 0; i < 5; i++) {
  if (tempoDeServico[i] <= 5 && salarios[i] >= 400) {
    console.log(funcionarios[i]);
  }
}
console.log("Funcionários que terão aumento:");
for (let i = 0; i <5; i++) {
  if (tempoDeServico[i] > 5 || salarios[i] < 400) {
    let aumento = salarios[i] * 0.35;
    let novoSalario = salarios[i] + aumento;
    console.log(funcionarios[i] + " - Novo salário: R$" + novoSalario.toFixed(2));
  }
}