// Adicione uma classe "ativo" ao link da página atual
const currentPage = window.location.pathname;
const links = document.querySelectorAll('.box li a');

links.forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('ativo');
  }
});
