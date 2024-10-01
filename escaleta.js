document.getElementById('confirmar-estrutura').addEventListener('click', function() {
  const estruturaSelecionada = document.getElementById('estrutura-narrativa').value;
  const nomeProjeto = prompt('Digite o nome do projeto:');
  const kanbanEscaleta = document.getElementById('kanban-escaleta');
  const passosEscaleta = [];

  if (nomeProjeto) {
    // Salvar o projeto no localStorage
    let projetos = JSON.parse(localStorage.getItem('projetos')) || [];
    projetos.push(nomeProjeto);
    localStorage.setItem('projetos', JSON.stringify(projetos));

    alert(`Projeto "${nomeProjeto}" criado com sucesso!`);
  }
}); //MARCADO APENAS O TRECHO DO CÓDIGO, REVISAR A FUNCIONALIDADE

  // Estruturas narrativas com seus títulos de colunas
  const estruturas = {
    "piramide-freytag": ["Introdução", "Ascensão", "Clímax", "Queda", "Conclusão"],
    "kishotenketsu": ["Introdução", "Desenvolvimento", "Giro", "Conclusão"],
    "estrutura-hiperlink": ["História 1", "História 2", "História 3", "História 4"],
    "narrativa-quadro": ["Quadro 1", "Quadro 2", "Quadro 3", "Quadro 4", "Quadro 5", "Quadro 6"],
    "in-media-res": ["Ação Inicial", "Eventos Anteriores", "Resolução"],
    "jornada-heroi": ["Mundo Comum", "Chamado à Aventura", "Provações", "Transformação", "Retorno"],
    "tres-atos": ["Ato 1: Configuração", "Ato 2: Confronto", "Ato 3: Resolução"],
    "circulo-historias": ["Você", "Necessidade", "Ir", "Buscar", "Encontrar", "Levar", "Retornar", "Mudar"],
    "save-the-cat": ["Abertura", "Tema Declarado", "Instalar o Setup", "Catalisador", "Debate", "Quebra no Ato 2", "Teste"],
    "sete-pontos": ["Gancho", "Incidente Incitante", "Ponto de Virada", "Ponto Intermediário", "Clímax", "Resolução"],
    "espinha-historia": ["Começo", "Meio", "Fim"]
  };

  // Limpa a escaleta anterior
  kanbanEscaleta.innerHTML = '';

  if (estruturaSelecionada && estruturas[estruturaSelecionada]) {
    // Gera as colunas do Kanban baseadas na estrutura selecionada
    estruturas[estruturaSelecionada].forEach(coluna => {
      const colunaDiv = document.createElement('div');
      colunaDiv.classList.add('kanban-coluna');
      colunaDiv.innerHTML = `<h2>${coluna}</h2><div class="kanban-cards" id="cards-${coluna}"></div>`;
      kanbanEscaleta.appendChild(colunaDiv);

      // Adiciona um botão para adicionar novos cards em cada coluna
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

          // Armazena o passo da escaleta
          passosEscaleta.push({ titulo: coluna, descricao: cardTexto });
          localStorage.setItem('escaleta', JSON.stringify(passosEscaleta));
        }
      });
    });
  } else {
    alert('Por favor, selecione uma estrutura narrativa.');
  };
