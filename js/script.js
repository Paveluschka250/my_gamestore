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

// function renderGameObjects() {
//   let html = ""
// }

function renderPlatforms(platforms) {
  let html = "";
  for (let i = 0; i < platforms.length; i++) {
    let platform = platforms[i];
    html += /*html*/ `
      <img src="${platform.icon}" alt="${platform.name}">
    `;
  }
  return html;
}

function renderTags(tags) {
  let html = "";
  for (let i = 0; i < tags.length; i++) {
    let tag = tags[i];
    html += /*html*/ `
      <p>${tag}</p>
    `;
  }
  return html;
}

function renderCommentbox(comments) {
  let html = "";
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    html += /*html*/ `
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
  return html;
}

function renderRatingStars(rating) {
  let imageFile = "";

  if (rating >= 9.0 && rating < 10.0) {
    imageFile = "10-star-rating-icon.svg";
  } else if (rating >= 8.0 && rating < 9.0) {
    imageFile = "9-star-rating-icon.svg";
  } else if (rating >= 7.0 && rating < 8.0) {
    imageFile = "8-star-rating-icon.svg";
  } else if (rating >= 6.0 && rating < 7.0) {
    imageFile = "7-star-rating-icon.svg";
  } else if (rating >= 5.0 && rating < 6.0) {
    imageFile = "6-star-rating-icon.svg";
  } else if (rating >= 4.0 && rating < 5.0) {
    imageFile = "5-star-rating-icon.svg";
  } else if (rating >= 3.0 && rating < 4.0) {
    imageFile = "4-star-rating-icon.svg";
  } else if (rating >= 2.0 && rating < 3.0) {
    imageFile = "3-star-rating-icon.svg";
  } else if (rating >= 1.0 && rating < 2.0) {
    imageFile = "2-star-rating-icon.svg";
  } else {
    imageFile = "1-star-rating-icon.svg";
  }

  return `<img src="assets/icons/stars/${imageFile}" alt="Rating: ${rating}" class="rating-stars">`;
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
      <div class="tags">
        ${renderTags(game.tags)}
      </div>
      <div class="reviews">
        <p>${game.rating} ${renderRatingStars(game.rating)}</p>
      </div>
      <div class="description">
        <p>${game.description}</p>   
      </div>
      <div class="commentbox">
        ${renderCommentbox(game.comments)}
      </div>
    </div>
  `;
}
