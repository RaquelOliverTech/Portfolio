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
    // Novo código para o formulário
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Mostra um loader (opcional)
      const submitBtn = this.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      
      // Envia os dados para o FormSubmit
      fetch('https://formsubmit.co/ajax/0eba49f7e622922d4fda04d616d06889', {
        method: 'POST',
        body: new FormData(this)
      })
      .then(response => response.json())
      .then(data => {
        // Sucesso - mostra mensagem e reseta o form
        formSuccess.style.display = 'block';
        contactForm.reset();
        
        // Esconde a mensagem após 5 segundos
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 5000);
      })
      .catch(error => {
        alert('Ocorreu um erro. Por favor, tente novamente.');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensagem';
      });
    });
  }
});
