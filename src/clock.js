// #1 real-time clock
const clock = document.querySelector("#clock");

function displayTime()
{
  const hour    = new Date().getHours();
  const minute  = new Date().getMinutes();
  const second  = new Date().getSeconds();

  const hourStr   = `${hour   < 10 ? `0${hour}`   : hour  }`;
  const minuteStr = `${minute < 10 ? `0${minute}` : minute}`;
  const secondStr = `${second < 10 ? `0${second}` : second}`;

  clock.innerText = `${hourStr}:${minuteStr}:${secondStr}`;

  return;
}

setInterval(displayTime, 1000);
displayTime();