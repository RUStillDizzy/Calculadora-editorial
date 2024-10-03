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

  // Obtém o array de personagens salvos no localStorage (ou um array vazio se não houver personagens)
  let personagens = JSON.parse(localStorage.getItem('personagens')) || [];
  
  // Adiciona o novo personagem ao array
  personagens.push(personagem);


  // Salva o personagem no localStorage
  localStorage.setItem('personagem', JSON.stringify(personagem));

  // Limpa o formulário após o salvamento
  document.getElementById('personagem-form').reset();

  alert('Personagem salvo com sucesso!');
});

// Atualiza a lista de personagens
generatePersonagemList();


// Função para carregar e exibir a lista de personagens salvos
function generatePersonagemList() {
  const personagemList = document.getElementById('personagem-items');
  personagemList.innerHTML = '';  // Limpa a lista de personagens anterior

  // Obtém os personagens do localStorage
  const personagens = JSON.parse(localStorage.getItem('personagens')) || [];

  if (personagens.length === 0) {
    personagemList.innerHTML = '<li>Nenhum personagem salvo ainda.</li>';
  } else {
    personagens.forEach(function(personagem, index) {
      const personagemItem = document.createElement('li');
      personagemItem.textContent = personagem.nome; // Exibe o nome do personagem
      personagemItem.setAttribute('data-index', index);

      personagemList.appendChild(personagemItem);

      // Exibe os detalhes do personagem ao clicar
      personagemItem.addEventListener('click', function() {
        alert(`Nome: ${personagem.nome}\nProjeto: ${personagem.projeto}\nIdade: ${personagem.idade}\nObjetivo: ${personagem.objetivo}`);
      });
    });
  }
}