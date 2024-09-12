document.getElementById('book-proposal-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores do formulário
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const resumo = document.getElementById('resumo').value;
    const publicoAlvo = document.getElementById('publico-alvo').value;
    const comercializacao = document.getElementById('comercializacao').value;
  
    // Cria um objeto com os dados do formulário
    const bookProposal = {
      titulo,
      autor,
      resumo,
      publicoAlvo,
      comercializacao
    };
  
    // Salva os dados no localStorage
    localStorage.setItem('bookProposal', JSON.stringify(bookProposal));
  
    alert('Book Proposal enviado com sucesso!');
    document.getElementById('book-proposal-form').reset(); // Limpa o formulário
  });
  