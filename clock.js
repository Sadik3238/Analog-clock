// all handler selection here
const secondHand = document.querySelectorAll(".hand")[2];
const minuteHand = document.querySelectorAll(".hand")[1];
const hourHand = document.querySelectorAll(".hand")[0];

setInterval(clock, 1000);

function clock() {
  const date = new Date();
  // second ration method
  const secondRatio = date.getSeconds() / 60;
  secondHand.style.transform = `translateX(-50%) rotate(${
    secondRatio * 360
  }deg)`;

  // minute ration method
  const minuteRatio = (secondRatio + date.getMinutes()) / 60;
  minuteHand.style.transform = `translateX(-50%) rotate(${
    minuteRatio * 360
  }deg)`;

  // hour ration method
  const hourRatio = (minuteRatio + date.getHours()) / 12;
  hourHand.style.transform = `translateX(-50%) rotate(${hourRatio * 360}deg)`;
}
clock();
