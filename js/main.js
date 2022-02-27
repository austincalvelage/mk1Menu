const mkTheme = new Audio("https://github.com/austincalvelage/mk1Menu/raw/main/assets/sounds/mkTheme.mp3");
const muteBtn = document.querySelector(`.muteBtn`);

const audioHandler = {
  play: () =>  mkTheme.play(),
  mute: () => {
          if (mkTheme.paused) {
            muteBtn.classList.toggle(`blink_me`);
            return mkTheme.play()
          }
          mkTheme.pause();
          muteBtn.classList.toggle(`blink_me`);
        },
};

muteBtn.addEventListener(`click`, audioHandler.mute);

function pressEnterToPlay(event) {
  const titleScreenModal = document.querySelector(`.titleScreenContainer`);
  if (event.key === `Enter`) {
    titleScreenModal.style.opacity = `0`;
    titleScreenModal.style.pointerEvents = `none`;
    audioHandler.play();
  }
}



window.addEventListener(`keydown`, pressEnterToPlay);

// event.key === `Enter` ? (titleScreenModal.style.opacity = `0`) : null;


const arenas = [
  `url(./assets/arena/01.png)`,
  `url(./assets/arena/02.png)`,
  `url(./assets/arena/03.png)`,
  `url(./assets/arena/04.png)`,
  `url(./assets/arena/05.png)`,
  `url(./assets/arena/06.png)`,
  `url(./assets/arena/07.png)`,
]

const currentArena = document.querySelector(`.arenaBackgroundContainer`);

currentArena.style.backgroundImage = arenas[0];