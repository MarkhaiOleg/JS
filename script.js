// Состав смузи

let liquids = ['вода', 'молоко', 'сок', 'чай', 'йогурт'];
let fruits = ['киви', 'банан', 'персик', 'манго', 'груша', 'ананас'];
let greens = ['мята', 'шпинат', 'руккола', 'петрушка', 'базилик'];

// Выбор посетителя

let chosenLiquid = 1;
let chosenFruit = 3;
let chosenGreen = 2;

// Заказ


for (let i = 0; i <= liquids.length; i++) {
  if (chosenLiquid -1  === i) {console.log(liquids[i]);
  chosenLiquid = liquids[i];}
  }
  
for (let j = 0; j <= fruits.length; j++) {
  if (chosenFruit - 1   === j) {console.log(fruits[j]);
  chosenFruit = fruits[j];}
  }
  
for (let k = 0; k <= greens.length; k++) {
  if (chosenGreen - 1  === k) {console.log(liquids[k]);
  chosenGreen = greens[k];}
  }
  
 let order = 'Основа — ' + chosenLiquid + ', фрукт — ' + chosenFruit + ', зелень — ' + chosenGreen;
 
 console.log(order);

