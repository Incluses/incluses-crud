const botoes = document.querySelectorAll('button');
const voltar = document.querySelector('.voltar')

botoes.forEach(button => {
  button.addEventListener('click', () => {
    alert('Botão clicado! Implementar ação aqui.');
  });
});

voltar.addEventListener('click', () => {
  window.location.href = '../Login Administrador/landingPage.html';
})