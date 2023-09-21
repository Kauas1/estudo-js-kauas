// Crie um programa que dê desconstos progressivos em um produto com base no número de seguidores que o usuário tem no instagram. A função deve receber 5 parametros. 1- O usuário deve informar seu @, n° de seguidores, produto, valor do produto e se irá postar. Tabela de descontos: A partir de 5000 seguidores = 5% A partide de 20000 = 10% A partir de 50000 = 15% A partir de 100000 = 25% Se o usuário postar um story, receberá 5% de desconto adicional e 10% se for um reel. A regra só se aplica a quem possui mais de 20000 seguidores.

let desconto;
let postagem;
debugger
function Instagram(Nome, produto, valor, SeguidoresInsta, postagem) {
  if (SeguidoresInsta >= 5000 && SeguidoresInsta < 20000) {
    desconto = 5;

  } else if (SeguidoresInsta >= 20000 && SeguidoresInsta < 50000) {
    desconto = 10;

  } else if (SeguidoresInsta >= 50000 && SeguidoresInsta <= 100000) {
    desconto = 15;

  } else if (SeguidoresInsta >= 100000) {
    desconto = 25;

    switch (postagem) {
  case "S":
    desconto = desconto+ 5;
    return desconto
  case "R":
    desconto = desconto+ 10;
    return desconto
  case 'N':
    alert("Você optou por não fazer nem Story ou Rells.");'1'
}
}
  }

postagem = prompt(  " Deseja Postar um Story[S] ou um Reel?[R] caso não, aperte [N]").toUpperCase();


nome = prompt("Nome do seu @");
SeguidoresInsta = Number(prompt("Numero de seguidores"));
produto = prompt("Qual o produto que deseja?");
valor = Number(prompt("valor do produto"));

console.log(Instagram(nome, produto, valor, SeguidoresInsta, postagem))
