document.getElementById('confirmar-estrutura').addEventListener('click', function() {
  const estruturaSelecionada = document.getElementById('estrutura-narrativa').value;
  const kanbanEscaleta = document.getElementById('kanban-escaleta');
  const passosEscaleta = [];

  // Limpa a escaleta anterior
  kanbanEscaleta.innerHTML = '';

  if (estruturaSelecionada) {
    // Define os títulos das colunas de acordo com a estrutura
    const estruturas = {
      "piramide-freytag": ["Introdução", "Ascensão", "Clímax", "Queda", "Conclusão"],
      // Adicione outras estruturas aqui...
    };

    // Cria as colunas do Kanban
    estruturas[estruturaSelecionada].forEach(coluna => {
      const colunaDiv = document.createElement('div');
      colunaDiv.classList.add('kanban-coluna');
      colunaDiv.innerHTML = `<h2>${coluna}</h2><div class="kanban-cards" id="cards-${coluna}"></div>`;

      kanbanEscaleta.appendChild(colunaDiv);

      // Adiciona um botão para inserir novos cards
      const adicionarCardBtn = document.createElement('button');
      adicionarCardBtn.textContent = 'Adicionar Card';
      colunaDiv.appendChild(adicionarCardBtn);

      adicionarCardBtn.addEventListener('click', function() {
        const cardTexto = prompt('Digite o texto do card:');
        if (cardTexto) {
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('kanban-card');
          cardDiv.textContent = cardTexto;
          colunaDiv.querySelector('.kanban-cards').appendChild(cardDiv);

          // Salva os passos da escaleta
          passosEscaleta.push({ titulo: coluna, descricao: cardTexto });
          localStorage.setItem('escaleta', JSON.stringify(passosEscaleta));
        }
      });
    });
  } else {
    alert('Por favor, selecione uma estrutura narrativa.');
  }
});
