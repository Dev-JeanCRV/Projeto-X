// Função para carregar receitas
async function carregarReceitas() {
  try {
    const response = await fetch('data/recipes.json');
    const receitas = await response.json();
    exibirReceitas(receitas);
  } catch (error) {
    console.error('Erro ao carregar receitas:', error);
  }
}

// Função para exibir receitas na tela
function exibirReceitas(receitas) {
  const container = document.getElementById('recipes-container');
  
  receitas.forEach(receita => {
    const card = criarCard(receita);
    container.appendChild(card);
  });
}

// Carregar receitas quando a página carregar
document.addEventListener('DOMContentLoaded', carregarReceitas);