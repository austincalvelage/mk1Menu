const fighters = {
  johnnyCage: {
    name: "Johnny Cage",
    characterIcon: "./assets/characters/Johnny Cage/johnnyCage.gif",
    animatedCharacter: "./assets/characters/Johnny Cage/johnnyCageAnimated.gif",
    audio: new Audio("./assets/characters/Johnny Cage/johnnyCage.mp3"),
  },
  kano: {
    name: "Kano",
    characterIcon: "./assets/characters/Kano/kano.gif",
    animatedCharacter: "./assets/characters/Kano/kanoAnimated.gif",
    audio: new Audio("./assets/characters/Kano/kano.mp3"),
  },
  subZero: {
    name: "Sub Zero",
    characterIcon: "./assets/characters/Sub-Zero/subZero.gif",
    animatedCharacter: "./assets/characters/Sub-Zero/subZeroAnimated.gif",
    audio: new Audio("./assets/characters/Sub-Zero/subZero.mp3"),
  },
  sonya: {
    name: "Sonya",
    characterIcon: "./assets/characters/Sonya/sonya.gif",
    animatedCharacter: "./assets/characters/Sonya/sonyaAnimated.gif",
    audio: new Audio("./assets/characters/Sonya/sonya.mp3"),
  },
  raiden: {
    name: "Raiden",
    characterIcon: "./assets/characters/Raiden/raiden.gif",
    animatedCharacter: "./assets/characters/Raiden/raidenAnimated.gif",
    audio: new Audio("./assets/characters/Raiden/raiden.mp3"),
  },
  liuKang: {
    name: "Lui Kang",
    characterIcon: "./assets/characters/Liu Kang/liuKang.gif",
    animatedCharacter: "./assets/characters/Liu Kang/liuKangAnimated.gif",
    audio: new Audio("./assets/characters/Liu Kang/liuKang.mp3"),
  },
  scorpion: {
    name: "Scorpion",
    characterIcon: "./assets/characters/Scorpion/scorpion.gif",
    animatedCharacter: "./assets/characters/Scorpion/scorpionAnimated.gif",
    audio: new Audio("./assets/characters/Scorpion/scorpion.mp3"),
  },
};

function changeFighterGif(fighter) {
  const playerOneSelection = document.querySelector(`.playerOneSelection`);
  switch (fighter) {
    case `johnnyCage`:
      playerOneSelection.src = fighters.johnnyCage.animatedCharacter;
      fighters.johnnyCage.audio.play();
      break;
    case `kano`:
      playerOneSelection.src = fighters.kano.animatedCharacter;
      fighters.kano.audio.play();
      break;
    case `subZero`:
      playerOneSelection.src = fighters.subZero.animatedCharacter;
      fighters.subZero.audio.play();
      break;
    case `sonya`:
      playerOneSelection.src = fighters.sonya.animatedCharacter;
      fighters.sonya.audio.play();
      break;
    case `raiden`:
      playerOneSelection.src = fighters.raiden.animatedCharacter;
      fighters.raiden.audio.play();
      break;
    case `liuKang`:
      playerOneSelection.src = fighters.liuKang.animatedCharacter;
      fighters.liuKang.audio.play();
      break;
    case `scorpion`:
      playerOneSelection.src = fighters.scorpion.animatedCharacter;
      fighters.scorpion.audio.play();
      break;
    default:
      break;
  }
}

const muteBtn = document.querySelector(`.muteBtn`);

const audioHandler = {
  play: () => mkTheme.play(),
  mute: () => {
    if (mkTheme.paused) {
      muteBtn.classList.toggle(`blink_me`);
      return mkTheme.play();
    }
    mkTheme.pause();
    muteBtn.classList.toggle(`blink_me`);
  },
};

muteBtn.addEventListener(`click`, audioHandler.mute);

function pressEnterToPlay(event) {
  const titleScreenModal = document.querySelector(`.titleScreenModal`);
  if (event.key === `Enter`) {
    titleScreenModal.style.opacity = `0`;
    titleScreenModal.style.pointerEvents = `none`;
    audioHandler.play();
  }
}

window.addEventListener(`keydown`, pressEnterToPlay);

const arenas = [
  `url(./assets/arena/01.png)`,
  `url(./assets/arena/02.png)`,
  `url(./assets/arena/03.png)`,
  `url(./assets/arena/04.png)`,
  `url(./assets/arena/05.png)`,
  `url(./assets/arena/06.png)`,
  `url(./assets/arena/07.png)`,
];

const currentArena = document.querySelector(`.arenaBackgroundContainer`);
currentArena.style.backgroundImage = arenas[0];

function highlight(e) {
  if (e.currentTarget.childNodes[3] === undefined) {
    return;
  }
  e.currentTarget.classList.add(`playerOneCharacterSelector`);
  e.currentTarget.childNodes[3].classList.add(`show`);
  changeFighterGif(e.currentTarget.dataset.character);
}

const playerOneSelection = document.querySelectorAll(`li`);

playerOneSelection.forEach((character) =>
  character.addEventListener(`mouseenter`, highlight)
);

playerOneSelection.forEach((character) =>
  character.addEventListener(`mouseleave`, (e) => {
    if (e.currentTarget.childNodes[3] === undefined) {
      return;
    }
    e.currentTarget.classList.remove(`playerOneCharacterSelector`);
    e.currentTarget.childNodes[3].classList.remove(`show`);
  })
);
