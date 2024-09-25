const botoes = document.querySelectorAll('button');

botoes.forEach(button => {
  botoes.addEventListener('click', () => {
    alert('Botão clicado! Implementar ação aqui.');
  });
});