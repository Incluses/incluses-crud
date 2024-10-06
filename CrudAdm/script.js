document.querySelectorAll('.show-password').forEach(button => {
    button.addEventListener('click', () => {
        const password = button.getAttribute('data-password');
        alert(`A senha é: ${password}`);
    });
});
