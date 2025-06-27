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

function renderList(items, templateFunction, parentIndex) {
  let html = "";
  for (let i = 0; i < items.length; i++) {
    html += templateFunction(items[i], i, parentIndex);
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
  return createRatingImageHTML(imageFile, rating);
}

function renderNoComments(comments) {
  if (comments.length === 0) {
    return createNoCommentsHTML();
  }
  return "";
}

function addcommentToGame(index) {
  let commentInput = document.getElementById(`comment-text-${index}`).value;
  let ratingInput = document.getElementById(`comment-rating-${index}`).value;

  if (commentInput == "" || ratingInput == "") {
    alert("Bitte Kommentar und Bewertung eingeben.");
  } else {
    const newComment = {
      name: "MyProfil",
      comment: commentInput,
      rating: Math.round(parseFloat(ratingInput)),
      date: new Date().toISOString().split("T")[0],
    };
    games[index].ownComment.push(newComment);
    renderGameList();
  }
}

function renderDlcs(dlcs) {
  if (dlcs.length === 0) {
    return "Keine DLCs";
  }
  let result = "";
  for (let i = 0; i < dlcs.length; i++) {
    result += dlcs[i];
    if (i < dlcs.length - 1) {
      result += ", ";
    }
  }
  return result;
}

function openOverlay(picture) {
  let overlay = document.getElementById("overlay");
  overlay.classList.remove("d-none");
  overlay.innerHTML = `<img src="${picture}" onclick="event.stopPropagation()">`;
  overlay.onclick = closeOverlay;
}

function closeOverlay() {
  let overlay = document.getElementById("overlay");
  overlay.classList.add("d-none");
  overlay.innerHTML = "";
}

function getLikeIcon(liked) {
  return liked
    ? "assets/icons/favicon/liked.svg"
    : "assets/icons/favicon/deliked.svg";
}

function toggleLike(index) {
  games[index].liked = !games[index].liked;
  renderGameList();
}

function deleteComment(gameIndex, commentIndex) {
  games[gameIndex].ownComment.splice(commentIndex, 1);
  renderGameList();
}
