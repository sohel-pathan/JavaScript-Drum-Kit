// playAudio when pressing button
const playAudio = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  // add playing class to the key
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

// play audio when clicking on boxes for mobile or screen touch devices
const playAudioOnClick = (e) => {
  let target = e.target;
  if (target.classList.length === 0 || target.classList.contains("sound")) {
    target = target.parentElement;
  }

  const key = target;
  const audioKeyCode = target.attributes["data-key"].value;
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

// for remove transiotion
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const allKeys = Array.from(document.querySelectorAll(".key"));

// for remove transiotioned when transiton complete
allKeys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

// play audio on clicking boxes
allKeys.forEach((key) => key.addEventListener("click", playAudioOnClick));

// play audio on pressing button
window.addEventListener("keydown", playAudio);
