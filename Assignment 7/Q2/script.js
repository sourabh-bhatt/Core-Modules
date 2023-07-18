function updateTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  document.getElementById("hour").innerText = hour;
  document.getElementById("minute").innerText = minute;
  document.getElementById("second").innerText = second;
}

setInterval(updateTime, 1000);
