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
        ${renderList(game.platforms, createPlatformHTML)}
      </div>
      <div class="tags">
        ${renderList(game.tags, createTagHTML)}
      </div>
      <div class="description">
        <p>${game.description}</p>   
      </div>
      <div class="ingame-pics">
        ${renderList(game.ingamePics, createIngamePicsHTML)}
      </div>
      <div class="reviews">
        <p>${game.rating} ${renderRatingStars(game.rating)}</p>
      </div>
      <div class="commentbox">
        ${renderList(game.comments, createCommentHTML)} 
        ${renderNoComments(game.comments)}
      </div>
      <div class="rating-input">
        <input type="text" id="comment-text-${index}" placeholder="Dein Kommentar...">
        <input type="number" id="comment-rating-${index}" min="1" max="10" placeholder="1–10 ★">
        <button id="post-comment-btn" onclick="addcommentToGame(${index})">Posten</button>
      </div>
    </div>
  `;
}

function createPlatformHTML(platform) {
  return /*html*/ `
    <img class="platform-icon" src="${platform.icon}" alt="${platform.name}" >
  `;
}

function createIngamePicsHTML(ingamePic) {
  return /*html*/`
    <img class="ingame-pics" src="${ingamePic}" alt="${ingamePic[index]}">
  `
}

function createTagHTML(tag) {
  return /*html*/ `
    <p class="tag">${tag}</p>
  `;
}

function createCommentHTML(comment) {
  return /*html*/ `
    <div class="comment">
      <div class="comment-header">
        <strong>${comment.name}</strong>
      </div>
      <div class="comment-text">
        ${comment.comment}
      </div>
      <div class="comment-meta">
        ⭐ ${comment.rating} &nbsp; | &nbsp; 🗓️ ${comment.date}
      </div>
    </div>
  `;
}

function createRatingImageHTML(imageFile, rating) {
  return `<img src="assets/icons/stars/${imageFile}" alt="Rating: ${rating}" class="rating-stars">`;
}

function createNoCommentsHTML() {
  return /*html*/ `
    <p class="no-comments">Keine Kommentare</p>
  `;
}


