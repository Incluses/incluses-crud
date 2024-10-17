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


document.addEventListener("DOMContentLoaded", function() {
  const filterButton = document.querySelector('.filtrar');
  const filterBar = document.getElementById('filter-bar');
  filterButton.addEventListener('click', toggleFilterBar);
  function toggleFilterBar() {
      if (filterBar.style.display === 'none' || filterBar.style.display === '') {
          filterBar.style.display = 'flex';
      } else {
          filterBar.style.display = 'none';
      }
  }

  // Lógica de filtragem
  const form = filterBar.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar envio do formulário

      const selectedField = this['filter-field'].value;
      const searchTerm = this['search'].value.toLowerCase();

      const gridItems = document.querySelectorAll('.grid-container .grid-item');

      // Ocultar todos os itens inicialmente
      gridItems.forEach(item => {
          item.style.display = 'none'; // Oculta todos os itens
      });

      let found = false; // Para rastrear se encontramos um item que deve ser exibido

      // Verificar cada item e decidir se deve ser exibido
      for (let i = 0; i < gridItems.length; i += 4) {
          const registro = gridItems[i];
          const username = gridItems[i + 1];
          const senha = gridItems[i + 2];
          const acoes = gridItems[i + 3];

          let shouldDisplay = false;

          // Verificar o campo selecionado
          if (selectedField === 'Todos') {
              shouldDisplay = true; // Exibe todos os itens
          } else if (selectedField === 'Registro-filtro') {
              shouldDisplay = registro.textContent.toLowerCase().includes(searchTerm);
          } else if (selectedField === 'username-filtro') {
              shouldDisplay = username.textContent.toLowerCase().includes(searchTerm);
          }

          // Exibir o item se corresponder
          if (shouldDisplay) {
              registro.style.display = 'flex'; // Exibe registro
              username.style.display = 'flex'; // Exibe username
              senha.style.display = 'flex'; // Exibe senha
              acoes.style.display = 'flex'; // Exibe ações
              found = true; // Marcamos que encontramos um item a ser exibido
          }
      }

      // Se não encontrado, opcionalmente, mostrar uma mensagem
      if (!found) {
          alert('Nenhum item encontrado.');
      }
  });
});
