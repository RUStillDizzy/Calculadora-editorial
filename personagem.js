// Função para salvar o personagem
document.getElementById('personagem-form').addEventListener('submit', async function(event) {
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

  // Envia para o servidor via fetch
  try {
    const response = await fetch('/salvar-personagem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(personagem), // Usa o objeto personagem aqui
    });

    if (response.ok) {
        alert('Personagem salvo com sucesso!');
    } else {
        alert('Erro ao salvar o personagem.');
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro ao salvar o personagem.');
  }

  // Limpa o formulário após o salvamento
  document.getElementById('personagem-form').reset();

  // Atualiza a lista de personagens
  generatePersonagemList();
});
