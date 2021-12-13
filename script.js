let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

let currentIndex = 0;
let minValue = usersByDay[currentIndex];

for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    let swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}

console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);



console.log(usersByDay);
currentIndex = 1;
minValue = usersByDay[currentIndex];

for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    let swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}

console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);



console.log(usersByDay);
currentIndex = 2;
minValue = usersByDay[currentIndex];

for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    let swap = usersByDay[currentIndex];
    usersByDay[currentIndex] = minValue;
    usersByDay[j] = swap;
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}

console.log('На позиции ' + currentIndex + ' находится минимальный элемент ' + minValue);

