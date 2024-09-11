// Verifica se há um personagem salvo no localStorage
const personagemSalvo = JSON.parse(localStorage.getItem('personagem'));

if (personagemSalvo) {
  // Preenche os campos da ficha de personagem com os dados salvos
  document.getElementById('nome-personagem').textContent = personagemSalvo.nome;
  document.getElementById('idade-personagem').textContent = personagemSalvo.idade;
  document.getElementById('personalidade-personagem').textContent = personagemSalvo.personalidade;
  document.getElementById('historia-personagem').textContent = personagemSalvo.historia;
} else {
  // Exibe uma mensagem caso não haja personagem salvo
  document.getElementById('personagem-info').innerHTML = '<p>Nenhum personagem salvo.</p>';
}
