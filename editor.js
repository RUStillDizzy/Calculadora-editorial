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

// Função para adicionar comentário
document.getElementById('add-comment').addEventListener('click', function() {
  var comment = prompt("Adicione seu comentário:");
  if (comment) {
    quill.format('background', '#ffeb3b');  // Destaque o texto comentado
    quill.insertText(quill.getSelection(), ' [' + comment + '] ', 'italic', true);  // Adicione o comentário
  }
});

// Salvando o conteúdo quando o botão for clicado
document.getElementById('save-button').addEventListener('click', function() {
  var editorContent = quill.root.innerHTML;
  document.getElementById('output').innerHTML = "<h3>Conteúdo Salvo:</h3>" + editorContent;

  // Salvando o conteúdo no localStorage
  localStorage.setItem('savedContent', editorContent);
  alert('Conteúdo salvo com sucesso!');
});

// Carregar conteúdo salvo, se houver
window.onload = function() {
  var savedContent = localStorage.getItem('savedContent');
  if (savedContent) {
    quill.root.innerHTML = savedContent;
  }
};

// Exibir/ocultar ficha de personagem
document.getElementById('toggle-personagem').addEventListener('click', function() {
  var modalPersonagem = document.getElementById('modal-personagem');
  modalPersonagem.classList.toggle('hidden');
});

// Exibir/ocultar escaleta
document.getElementById('toggle-escaleta').addEventListener('click', function() {
  var modalEscaleta = document.getElementById('modal-escaleta');
  modalEscaleta.classList.toggle('hidden');
});

// Funções para editar ficha de personagem e escaleta (você pode expandir conforme necessário)
document.getElementById('edit-personagem').addEventListener('click', function() {
  alert('Função para editar ficha de personagem ainda não implementada.');
});

document.getElementById('edit-escaleta').addEventListener('click', function() {
  alert('Função para editar escaleta ainda não implementada.');
});
