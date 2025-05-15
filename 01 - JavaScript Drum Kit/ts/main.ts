/* キー押下時に音を再生し、見た目を変化させる */
function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  const sound = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!key || !sound) {
    return;
  }

  if (key.classList.contains("playing")) {
    key.classList.remove("playing");
    return;
  }
  key.classList.add("playing");

  sound.currentTime = 0;
  sound.play();
}
/* 見た目を元に戻す */
function removeHighlight(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}
/* イベントリスナー */
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeHighlight));
document.addEventListener("keydown", playSound);
