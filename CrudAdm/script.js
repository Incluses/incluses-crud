document.querySelectorAll('.view-password').forEach(button => {
    button.addEventListener('click', function() {
      const passwordCell = this.parentElement.previousElementSibling;
      if (passwordCell.textContent === '*****') {
        passwordCell.textContent = 'admin123'; // Exemplo de senha, isso pode ser dinamizado
      } else {
        passwordCell.textContent = '*****';
      }
    });
  });
  
  document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.crud-row').remove();
    });
  });
  