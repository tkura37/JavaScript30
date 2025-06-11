const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const degreeOffset = 90;

function isHTMLElement(element: Element | null): element is HTMLElement {
  return element instanceof HTMLElement;
}

function setDate(): void {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegrees = (hours / 12) * 360 + degreeOffset;
  const minutesDegrees = (minutes / 60) * 360 + degreeOffset;
  const secondsDegrees = (seconds / 60) * 360 + degreeOffset;

  if (
    isHTMLElement(hourHand) &&
    isHTMLElement(minHand) &&
    isHTMLElement(secondHand)
  ) {
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  } else {
    console.error("時計の針の要素が見つかりませんでした");
  }
}

setDate();
setInterval(setDate, 1000);
