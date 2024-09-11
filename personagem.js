document.getElementById('personagem-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const personalidade = document.getElementById('personalidade').value;
    const historia = document.getElementById('historia').value;
  
    // Cria um objeto de personagem
    const personagem = {
      nome: nome,
      idade: idade,
      personalidade: personalidade,
      historia: historia
    };
  
    // Salva o personagem no localStorage
    localStorage.setItem('personagem', JSON.stringify(personagem));
  
    // Limpa o formulário após o salvamento
    document.getElementById('personagem-form').reset();
  
    alert('Personagem salvo com sucesso!');
  });
  