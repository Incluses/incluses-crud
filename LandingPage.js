const senhaInput = document.getElementById('senha');
const mostrarSenha = document.querySelector('.mostrar-senha');

mostrarSenha.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        mostrarSenha.textContent = 'Ocultar';
    } else {
        senhaInput.type = 'password';
        mostrarSenha.textContent = 'Mostrar';
    }
});