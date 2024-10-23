// Função de visualização de senha
document.querySelectorAll('.view').forEach(button => {
    button.addEventListener('click', function() {
        // Encontra o campo de senha que está na mesma linha
        const passwordCell = this.closest('.grid-item').previousElementSibling;
        if (passwordCell.textContent === '*****') {
            passwordCell.textContent = 'admin123'; // Substitua por uma senha real
        } else {
            passwordCell.textContent = '*****';
        }
    });
});

// Função de exclusão
document.querySelectorAll('.delete').forEach(button => {
    button.addEventListener('click', function() {
        // Remove os 4 elementos que representam a linha atual na grade
        const currentRow = this.closest('.grid-item'); // Pega o item atual
        const rowIndex = Array.from(currentRow.parentElement.children).indexOf(currentRow); // Índice do item

        for (let i = 0; i < 4; i++) {
            currentRow.parentElement.children[rowIndex - (rowIndex % 4) + i].style.display = 'none'; // Oculta a linha inteira
        }
    });
});

// Função de alternar barra de filtro
document.addEventListener("DOMContentLoaded", function() {
    const filterButton = document.querySelector('.filtrar');
    const filterBar = document.getElementById('filtrar-bar');
    filterButton.addEventListener('click', toggleFilterBar);

    function toggleFilterBar() {
        filterBar.style.display = filterBar.style.display === 'none' ? 'flex' : 'none';
    }

    // Funções para o popup de ADM
    const inserirADM = document.querySelector('.inserir-adm');
    const editADM = document.querySelectorAll('.edit');
    const cancelADM = document.querySelector('.bt-cancelar');
    const cancelADMedi = document.querySelector('.bt-cancelar-edit');

    const popupADM = document.getElementById('popupID');
    const popupADMedit = document.getElementById('popupIDadm');

    editADM.forEach(button => {
        button.addEventListener('click', togglePopupedit);
    });

    cancelADM.addEventListener('click', cancelPopup);
    cancelADMedi.addEventListener('click', cancelPopupedit);

    inserirADM.addEventListener('click', togglePopup);

    function togglePopup() {
        popupADM.style.display = popupADM.style.display === 'none' ? 'flex' : 'none';
    }

    function togglePopupedit() {
        popupADMedit.style.display = popupADMedit.style.display === 'none' ? 'flex' : 'none';
    }

    function cancelPopup() {
        popupADM.style.display = 'none';
    }

    function cancelPopupedit() {
        popupADMedit.style.display = 'none';
    }

    // Filtro
    const form = filterBar.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const selectedField = this['filter-field'].value;
        const searchTerm = this['search'].value.toLowerCase();

        if (!selectedField) return;

        const gridItems = document.querySelectorAll('.grid-container .grid-item');
        gridItems.forEach(item => item.style.display = 'none');

        let found = false;

        for (let i = 0; i < gridItems.length; i += 4) {
            const registro = gridItems[i];
            const username = gridItems[i + 1];
            const senha = gridItems[i + 2];
            const acoes = gridItems[i + 3];

            let shouldDisplay = false;
            if (selectedField === 'todos') {
                shouldDisplay = true;
            } else if (selectedField === 'registro-filtro') {
                shouldDisplay = registro.textContent.toLowerCase().includes(searchTerm);
            } else if (selectedField === 'username-filtro') {
                shouldDisplay = username.textContent.toLowerCase().includes(searchTerm);
            } else if (selectedField === 'UUID-filtro') {
                shouldDisplay = senha.textContent.toLowerCase().includes(searchTerm);
            }

            if (shouldDisplay) {
                registro.style.display = 'flex';
                username.style.display = 'flex';
                senha.style.display = 'flex';
                acoes.style.display = 'flex';
                found = true;
            }
        }

        if (!found) {
            alert('Nenhum item encontrado.');
        }
    });
});
