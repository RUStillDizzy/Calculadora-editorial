window.onload = function() {
  // Carrega os projetos disponíveis no select
  const selectProjeto = document.getElementById('projeto');
  let projetos = JSON.parse(localStorage.getItem('projetos')) || [];
  
  projetos.forEach(projeto => {
    const option = document.createElement('option');
    option.value = projeto;
    option.textContent = projeto;
    selectProjeto.appendChild(option);
  });

  generatePersonagemList();
};

function generatePersonagemList() {
  const personagemList = document.getElementById('personagem-items');
  personagemList.innerHTML = '';  // Limpa a lista de personagens anterior

  // Obtém os personagens do localStorage
  const personagens = JSON.parse(localStorage.getItem('personagens')) || [];

  if (personagens.length === 0) {
    personagemList.innerHTML = '<li>Nenhum personagem salvo ainda.</li>';
  } else {
    personagens.forEach(function(personagem, index) {
      // Cria um botão para cada personagem
      const personagemButton = document.createElement('button');
      personagemButton.textContent = personagem.nome;
      personagemButton.setAttribute('data-index', index);
      personagemButton.classList.add('personagem-button'); // Adiciona uma classe para estilização
  
      personagemList.appendChild(personagemButton);
  
      // Exibe detalhes ao clicar no botão
      personagemButton.addEventListener('click', function() {
        alert(`Nome: ${personagem.nome}\nProjeto: ${personagem.projeto}\nIdade: ${personagem.idade}\nObjetivo: ${personagem.objetivo}`);
      });
    });
  }
}

document.getElementById('personagem-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const detalhe = document.getElementById('detalhe').value;
  const objetivo = document.getElementById('objetivo').value;
  const arco = document.getElementById('arco').value;
  const olhos = document.getElementById('olhos').value;
  const cabelo = document.getElementById('cabelo').value;
  const corpo = document.getElementById('corpo').value;
  const acessorio = document.getElementById('acessorio').value;
  const estilo = document.getElementById('estilo').value;
  const defeito = document.getElementById('defeito').value;
  const qualidade = document.getElementById('qualidade').value;
  const motiva = document.getElementById('motiva').value;
  const medo = document.getElementById('medo').value;
  const gerais = document.getElementById('gerais').value;
  const origem = document.getElementById('origem').value;
  const admira = document.getElementById('admira').value;
  const repudio = document.getElementById('repudio').value;
  const moral = document.getElementById('moral').value;
  const rompimento = document.getElementById('rompimento').value;

  // Verifica se os campos obrigatórios estão preenchidos
  if (!nome || !detalhe || !objetivo || !arco) {
    alert('Por favor, preencha todos os campos obrigatórios: nome, detalhe, objetivo e arco.');
    return; // Interrompe o envio do formulário
  }

  // Seleciona o projeto
  const projetoSelecionado = document.getElementById('projeto').value;

  // Cria um objeto de personagem
  const personagem = {
    nome: nome,
    idade: idade,
    detalhe: detalhe,
    objetivo: objetivo,
    arco: arco,
    olhos: olhos,
    cabelo: cabelo,
    corpo: corpo,
    acessorio: acessorio,
    estilo: estilo,
    defeito: defeito,
    qualidade: qualidade,
    motiva: motiva,
    medo: medo,
    gerais: gerais,
    origem: origem,
    admira: admira,
    repudio: repudio,
    moral: moral,
    rompimento: rompimento,
    projeto: projetoSelecionado // Adiciona o projeto ao personagem
  };

  // Salva no localStorage
  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
  personagens.push(personagem);
  localStorage.setItem('personagens', JSON.stringify(personagens));

  // Limpa o formulário após o salvamento
  document.getElementById('personagem-form').reset();

  alert('Personagem salvo com sucesso!');

  // Atualiza a lista de personagens
  generatePersonagemList();
});

document.getElementById('personagem-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
      nome: document.getElementById('nome').value,
      idade: document.getElementById('idade').value,
      detalhe: document.getElementById('detalhe').value,
      objetivo: document.getElementById('objetivo').value,
      arco: document.getElementById('arco').value,
      olhos: document.getElementById('olhos').value,
      cabelo: document.getElementById('cabelo').value,
      corpo: document.getElementById('corpo').value,
      acessorio: document.getElementById('acessorio').value,
      estilo: document.getElementById('estilo').value,
      defeito: document.getElementById('defeito').value,
      qualidade: document.getElementById('qualidade').value,
      motiva: document.getElementById('motiva').value,
      medo: document.getElementById('medo').value,
      gerais: document.getElementById('gerais').value,
      origem: document.getElementById('origem').value,
      admira: document.getElementById('admira').value,
      repudio: document.getElementById('repudio').value,
      moral: document.getElementById('moral').value,
      rompimento: document.getElementById('rompimento').value
  };

  const response = await fetch('/salvar-ficha', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  const result = await response.text();
  alert(result);
});
