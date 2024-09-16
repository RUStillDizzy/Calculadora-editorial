document.addEventListener('DOMContentLoaded', function() {
    const tabelaUsuarios = document.querySelector('#tabela-usuarios tbody');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    if (usuarios.length > 0) {
      usuarios.forEach(usuario => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${usuario.nome}</td>
          <td>${usuario.email}</td>
          <td>${usuario.statusAssinatura ? 'Pago' : 'Gratuito'}</td>
          <td>${usuario.dataAssinatura ? usuario.dataAssinatura : 'N/A'}</td>
          <td><button onclick="removerUsuario('${usuario.email}')">Remover</button></td>
        `;
        tabelaUsuarios.appendChild(row);
      });
    } else {
      const row = document.createElement('tr');
      row.innerHTML = `<td colspan="5">Nenhum usuário cadastrado</td>`;
      tabelaUsuarios.appendChild(row);
    }
  });
  
  // Função para remover um usuário
  function removerUsuario(email) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios = usuarios.filter(usuario => usuario.email !== email);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    window.location.reload(); // Recarrega a página para atualizar a lista
  }
  
  // Função para exportar os dados para CSV
  function exportarParaCSV() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    if (usuarios.length === 0) {
      alert('Nenhum dado encontrado para exportar.');
      return;
    }
  
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nome,Email,Status de Assinatura,Data de Assinatura\n";
  
    usuarios.forEach(usuario => {
      const linha = `${usuario.nome},${usuario.email},${usuario.statusAssinatura ? 'Pago' : 'Gratuito'},${usuario.dataAssinatura || 'N/A'}\n`;
      csvContent += linha;
    });
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "usuarios.csv");
    docu
  