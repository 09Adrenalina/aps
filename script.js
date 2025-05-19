
function clickMenu() {
  const itens = document.getElementById('itens');
  const isExpanded = itens.classList.toggle('show'); // Alterna a classe 'show'
  itens.style.display = isExpanded ? 'flex' : 'none'; // Exibe ou oculta o menu
}

