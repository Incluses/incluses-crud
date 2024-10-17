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
    const filterBar = document.getElementById('filtrar-bar');
    filterButton.addEventListener('click', toggleFilterBar);

    // Função para alternar a visibilidade da barra de filtro
    function toggleFilterBar() {
        if (filterBar.style.display === 'none') {
            filterBar.style.display = 'flex';
        } else {
            filterBar.style.display = 'none';
        }
    }

    const inserirADM = document.querySelectorAll('.edit');
    const cancelADM = document.querySelector('.bt-cancelar');
    const popupADM = document.getElementById('popupID');
     // Correto: sem o ponto
    for(i=0;i<5;i++)
     inserirADM[i].addEventListener('click', togglePopup);
    cancelADM.addEventListener('click', cancelPopup);

    // Função para alternar a visibilidade do popup
    function togglePopup() {
        if (popupADM.style.display === 'none') {
            popupADM.style.display = 'flex';
        } else {
            popupADM.style.display = 'none';
        }
    }

    function cancelPopup() {
        popupADM.style.display = 'none'
    }



  // Lógica de filtragem
  const form = filterBar.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const selectedField = this['filter-field'].value;
      const searchTerm = this['search'].value.toLowerCase();

      const gridItems = document.querySelectorAll('.grid-container .grid-item');

      gridItems.forEach(item => {
          item.style.display = 'none'; 
      });

      let found = false; 

      for (let i = 0; i < gridItems.length; i += 4) {
          const registro = gridItems[i];
          const username = gridItems[i + 1];
          const senha = gridItems[i + 2];
          const acoes = gridItems[i + 3];

          let shouldDisplay = false;

          if (selectedField === 'Todos') {
              shouldDisplay = true; // Exibe todos os itens
          } else if (selectedField === 'Registro-filtro') {
              shouldDisplay = registro.textContent.toLowerCase().includes(searchTerm);
          } else if (selectedField === 'username-filtro') {
              shouldDisplay = username.textContent.toLowerCase().includes(searchTerm);
          }

          if (shouldDisplay) {
              registro.style.display = 'flex'; // Exibe registro
              username.style.display = 'flex'; // Exibe username
              senha.style.display = 'flex'; // Exibe senha
              acoes.style.display = 'flex'; // Exibe ações
              found = true; // Marcamos que encontramos um item a ser exibido
          }
      }

      if (!found) {
          alert('Nenhum item encontrado.');
      }
  });
});
