// variable
const audioList = [
  // new Audio("audio/gululu.mp3"),
  // new Audio("audio/gururu.mp3"),
  // new Audio("audio/yhdl.mp3"),
  // new Audio("audio/zqq.mp3"),
  // new Audio("audio/kuruto.mp3"),
  // new Audio("audio/kuru1.mp3"),
  // new Audio("audio/kuru2.mp3"),
  // new Audio("audio/zqql.mp3"),
];

for (const audio of audioList) {
  audio.preload = "auto";
}

let firstSquish = true;
// end variable

// counter button function
function counterClick() {
  const counterElement = document.getElementById("counter");
  let temporaryCounter = localStorage.getItem('count') || 0;
  temporaryCounter++;
  counterElement.innerHTML = temporaryCounter;
  localStorage.setItem('count', temporaryCounter);
  playKuro();
  animateHerta();
}

function playKuro() {
  let audio;
  if (firstSquish) {
    firstSquish = false;
    audio = audioList[0].cloneNode();
  } else {
    const random = Math.floor(Math.random() * 8) + 1;
    audio = audioList[random].cloneNode();
  }
  audio.play();
  audio.addEventListener("ended", function () {
    this.remove();
  });
}

function animateHerta() {
  const counterButton = document.getElementById("counter-button");
  let id = null;
  const random = Math.floor(Math.random() * 4) + 1;
  const elem = document.createElement("img");
  elem.src = `img/kuromi${random}.gif`;
  elem.style.position = "absolute";
  elem.style.right = "-510px";
  elem.style.top = `${counterButton.getBoundingClientRect().bottom + window.scrollY - 430}px`;
  elem.style.zIndex = "-1";
  document.body.appendChild(elem);
  let pos = -510;
  const limit = window.innerWidth + 510;
  clearInterval(id);
  id = setInterval(frame, 12);
  function frame() {
    if (pos >= limit) {
      clearInterval(id);
      elem.remove();
    } else {
      pos += 20;
      elem.style.right = `${pos}px`;
    }
  }
}