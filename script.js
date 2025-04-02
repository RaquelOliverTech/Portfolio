document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.certificates__filter');
    const certificateItems = document.querySelectorAll('.certificates__item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Atualiza botões ativos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filtra os itens
            certificateItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden'); // Remove a classe de ocultação
                } else {
                    item.classList.add('hidden'); // Oculta o item
                }
            });
        });
    });
});