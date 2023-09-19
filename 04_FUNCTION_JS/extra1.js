// Usuário vai passar nota 1, nota2, nota3 (A- Aritmética e P- Ponderada). Pesos (5,3, 2) Criar função que valide a nota

let escolha = prompt( 'Escolha entre "A" para média Aritmética ou P para média Ponderada.').toUpperCase();

function ValidarNotas(nota1, nota2, nota3) {
  switch (escolha) {
    case "A":
      let media;
      media = (nota1 + nota2 + nota3) / 3;
      if (media >= 0 && media <= 10) {
        return media;
      } else {
        return "Nota invalida.";
      }
    case "P":
      let peso1, peso2, peso3, final;
      peso1 = 5 * nota1;
      peso2 = 3 * nota2;
      peso3 = 2 * nota3;

      final = (peso1 + peso2 + peso3) / 10;
      if (final >= 0 && final <= 10) {
        return final;
      } else {
        return "Nota invalida.";
    
      }
      
  }
}
nota1 = Number(prompt("Digite a nota 1"));
nota2 = Number(prompt("Digite a nota 2"));
nota3 = Number(prompt("Digite a nota 3"));
console.log(ValidarNotas(nota1, nota2, nota3))


