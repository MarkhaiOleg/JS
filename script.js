let days = 9; // Дней в периоде
let period = 3; // Как часто я ем протеин (раз в три дня)
let workDayAmount = 200; // Количество протеина в будние
let weekendAmount = 100; // Количество протеина в выходные
let total = 0;

for (let i = 1; i <= days; i++ ) {
  if (i%period === 0) {
    total += workDayAmount;
  if (i%7 === 6 || i%7 === 0) {
    total -= workDayAmount;  
    total += weekendAmount;
  }
  }
  }