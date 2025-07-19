const countUp = () => {
  const startDate = new Date('2022-08-24T00:00:00').getTime();
  const now = new Date().getTime();
  const elapsed = now - startDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (elapsed < 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(elapsed / day);
  const hours = Math.floor((elapsed % day) / hour);
  const minutes = Math.floor((elapsed % hour) / minute);
  const seconds = Math.floor((elapsed % minute) / second);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
};

setInterval(countUp, 1000);
countUp();