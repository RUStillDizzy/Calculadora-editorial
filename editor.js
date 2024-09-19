// Inicializando o Quill com as opções de toolbar e funcionalidades
var quill = new Quill('#editor-container', {
  modules: {
    toolbar: '#toolbar'  // Conecta a toolbar ao editor
  },
  theme: 'snow'  // Usa o tema "snow" do Quill
});

// Contador de Palavras
quill.on('text-change', function() {
  var text = quill.getText().trim();
  var wordCount = text.length ? text.split(/\s+/).length : 0;
  document.getElementById('word-count').innerText = wordCount + ' palavras';
});

// Exportar para PDF
document.getElementById('export-pdf').addEventListener('click', function() {
  var doc = new jsPDF();
  doc.text(quill.root.innerText, 10, 10);
  doc.save('document.pdf');
});

// Salvando o conteúdo quando o botão for clicado
document.getElementById('save-button').addEventListener('click', function() {
  var editorContent = quill.root.innerHTML;
  document.getElementById('output').innerHTML = "<h3>Conteúdo Salvo:</h3>" + editorContent;

  // Salvando o conteúdo no localStorage
  localStorage.setItem('conteudoEditor', editorContent);
});

// Carregar a ficha de personagem
function carregarFichaPersonagem() {
  const personagem = JSON.parse(localStorage.getItem('personagem'));

  if (personagem) {
    document.getElementById('nome-personagem').textContent = personagem.nome;
    document.getElementById('idade-personagem').textContent = personagem.idade;
    document.getElementById('personalidade-personagem').textContent = personagem.personalidade;
    document.getElementById('historia-personagem').textContent = personagem.historia;
  } else {
    document.getElementById('info-lateral').innerHTML += '<p>Nenhum personagem salvo.</p>';
  }
}

// Carregar a escaleta
function carregarEscaleta() {
  const escaleta = JSON.parse(localStorage.getItem('escaleta'));

  if (escaleta) {
    const escaletaInfo = document.getElementById('escaleta-info');
    escaleta.forEach(passo => {
      const passoDiv = document.createElement('div');
      passoDiv.innerHTML = `<strong>${passo.titulo}:</strong> ${passo.descricao}`;
      escaletaInfo.appendChild(passoDiv);
    });
  } else {
    document.getElementById('escaleta-info').innerHTML = '<p>Nenhuma escaleta salva.</p>';
  }
}

// Carregar dados da ficha de personagem e da escaleta ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  carregarFichaPersonagem();
  carregarEscaleta();
});
