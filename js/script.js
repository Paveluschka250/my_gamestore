document.addEventListener("DOMContentLoaded", () => {
  renderGameList();
});

function renderGameList() {
  let container = document.getElementById("game-content");
  container.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    container.innerHTML += createGameCard(i);
  }
}

function renderPlatforms(platforms) {
  let html = "";
  for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i];
    html += /*html*/`
      <img src="${platform.icon}" alt="${platform.name}" class="platform-icon">
    `
  }
  return html;
}

function createGameCard(index) {
  const game = games[index];
  return /*html*/ `
    <div class="game-card">
      <h2>${game.title}</h2>
      <div class="game-card-content">
        <img src="${game.cover}" alt="${game.title} Cover" >
          <div class="game-info">
            <p><strong>Entwickler: </strong>${game.developer}</p>
            <p><strong>Erscheinungsjahr: </strong>${game.releaseYear}</p>
            <p><strong>Preis: </strong>${game.price} €</p>
            <p><strong>Verkäufe: </strong>${game.soldCopies.toLocaleString(
              "de-DE"
            )}</p>
            <p><strong>Genre: </strong>${game.genre}</p>
            <p><strong>Modi: </strong>${game.modes}</p>
            <p><strong>DLCs: </strong>${game.dlcs}</p>
          </div>
      </div>
      <div class="platforms">
        ${renderPlatforms(game.platforms)}
      </div>
    </div>
  `;
}
