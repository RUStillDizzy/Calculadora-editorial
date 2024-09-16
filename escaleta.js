// Estruturas narrativas com os números de colunas
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
  
  // Manipula o menu flutuante e cria o kanban com base na estrutura narrativa escolhida
  document.getElementById('confirmar-estrutura').addEventListener('click', function() {
    const estruturaSelecionada = document.getElementById('estrutura-narrativa').value;
    const kanbanEscaleta = document.getElementById('kanban-escaleta');
  
    // Limpa a escaleta anterior, se houver
    kanbanEscaleta.innerHTML = '';
  
    if (estruturaSelecionada && estruturas[estruturaSelecionada]) {
      // Gera colunas com base na estrutura selecionada
      estruturas[estruturaSelecionada].forEach(coluna => {
        const colunaDiv = document.createElement('div');
        colunaDiv.classList.add('kanban-coluna');
        colunaDiv.innerHTML = `<h2>${coluna}</h2><div class="kanban-cards" id="cards-${coluna}"></div>`;
  
        kanbanEscaleta.appendChild(colunaDiv);
      });
  
      // Permite ao usuário adicionar cards nas colunas
      document.querySelectorAll('.kanban-coluna').forEach(coluna => {
        const adicionarCardBtn = document.createElement('button');
        adicionarCardBtn.textContent = 'Adicionar Card';
        coluna.appendChild(adicionarCardBtn);
  
        adicionarCardBtn.addEventListener('click', function() {
          const cardTexto = prompt('Digite o texto do card:');
          if (cardTexto) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('kanban-card');
            cardDiv.textContent = cardTexto;
            coluna.querySelector('.kanban-cards').appendChild(cardDiv);
          }
        });
      });
    } else {
      alert('Por favor, selecione uma estrutura narrativa.');
    }
  });
  