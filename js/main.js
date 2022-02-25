const mkTheme = new Audio("../assets/sounds/mkTheme.mp3");

function pressEnterToPlay(event) {
  const titleScreenModal = document.querySelector(`.titleScreenContainer`);
  if (event.key === `Enter`) {
    titleScreenModal.style.opacity = `0`;
    titleScreenModal.style.pointerEvents = `none`;

    mkTheme.play();
  }
}

window.addEventListener(`keydown`, pressEnterToPlay);
// event.key === `Enter` ? (titleScreenModal.style.opacity = `0`) : null;
