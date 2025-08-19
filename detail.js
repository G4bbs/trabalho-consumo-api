const content = document.getElementById('detail');
let id = Number(window.location.hash.replace("#", ""))

async function getCharacterDetails() {
  if (!id) {
    content.innerHTML = "<p>Personagem não encontrado</p>";
    return;
  }

  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await response.json();
    
    const details = `
      <h1>${character.name}</h1>
      <img src="${character.image}" alt="${character.name}" width="200"/>
      <ul>
        <li><strong>Espécie:</strong> ${character.species}</li>
        <li><strong>Gênero:</strong> ${character.gender}</li>
        <li><strong>Origem:</strong> ${character.origin.name}</li>
        <li><strong>Status:</strong> ${character.status}</li>
      </ul>
      <a href="index.html">Voltar para a lista</a>
    `;
    
    content.innerHTML = details;
  } catch (error) {
    content.innerHTML = "<p>Erro ao carregar os detalhes do personagem</p>";
    console.error(error);
  }
}

getCharacterDetails();