let calculateMiles = function (distance) {
  let percent = 0.25;
  if (distance > 10500) {
    percent = 0.35;
  }
  let miles = Math.floor(distance * percent);
  return miles;
};

console.log('За перелёт в Иркутск получим ' + calculateMiles(4125) + ' миль');

console.log('За перелёт на Камчатку получим ' + calculateMiles(11000) + ' миль');