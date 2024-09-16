// Função para gerar o calendário
function gerarCalendario() {
    const calendario = document.getElementById('calendario');
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth();
    const anoAtual = dataAtual.getFullYear();
  
    // Nomes dos meses
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
    // Título do calendário
    calendario.innerHTML = `<h2>${meses[mesAtual]} ${anoAtual}</h2>`;
  
    // Criação da grade do calendário (dias da semana)
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    let grade = '<div class="dias-semana">';
    diasSemana.forEach(dia => {
      grade += `<div class="dia">${dia}</div>`;
    });
    grade += '</div>';
  
    // Criação dos dias do mês
    const primeiroDiaMes = new Date(anoAtual, mesAtual, 1).getDay();
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  
    let diaNumero = 1;
    let linhas = '<div class="linha">';
    for (let i = 0; i < 42; i++) {  // 6 semanas (42 dias)
      if (i < primeiroDiaMes || diaNumero > diasNoMes) {
        linhas += '<div class="dia vazio"></div>';
      } else {
        linhas += `<div class="dia" data-dia="${diaNumero}">${diaNumero}</div>`;
        diaNumero++;
      }
    }
    linhas += '</div>';
  
    // Adiciona a grade ao calendário
    calendario.innerHTML += grade + linhas;
  
    // Permite ao usuário clicar nos dias para adicionar eventos
    document.querySelectorAll('.dia').forEach(dia => {
      dia.addEventListener('click', function() {
        if (this.classList.contains('vazio')) return;
        abrirModalEvento(this.getAttribute('data-dia'), mesAtual + 1, anoAtual);
      });
    });
  }
  
  // Função para abrir o modal de evento
  function abrirModalEvento(dia, mes, ano) {
    const modal = document.getElementById('modal-evento');
    modal.style.display = 'block';
    
    const fechar = document.querySelector('.fechar');
    fechar.onclick = function() {
      modal.style.display = 'none';
    }
  
    // Preenche a data do evento
    const campoData = document.getElementById('data');
    campoData.value = `${ano}-${mes.toString().padStart(2, '0')}-${dia.padStart(2, '0')}`;
  
    // Adiciona evento ao formulário
    const eventoForm = document.getElementById('evento-form');
    eventoForm.onsubmit = function(event) {
      event.preventDefault();
      
      // Obtém os valores
      const titulo = document.getElementById('titulo').value;
      const data = document.getElementById('data').value;
      const descricao = document.getElementById('descricao').value;
  
      // Salva o evento (você pode salvar no localStorage ou em um banco de dados)
      salvarEvento(titulo, data, descricao);
  
      // Fecha o modal
      modal.style.display = 'none';
    }
  }
  
  // Função para salvar eventos (você pode modificar para salvar em localStorage)
  function salvarEvento(titulo, data, descricao) {
    // Salva os eventos em localStorage
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
    eventos.push({ titulo, data, descricao });
    localStorage.setItem('eventos', JSON.stringify(eventos));
  
    alert('Evento adicionado com sucesso!');
  }
  
  // Função para carregar eventos salvos
  function carregarEventos() {
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
    eventos.forEach(evento => {
      const diaEvento = document.querySelector(`[data-dia="${new Date(evento.data).getDate()}"]`);
      if (diaEvento) {
        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('evento');
        eventoDiv.textContent = evento.titulo;
        diaEvento.appendChild(eventoDiv);
      }
    });
  }
  
  // Inicializa o calendário
  gerarCalendario();
  carregarEventos();
  