var number = 23515625621;
var cutNumber = number;
var quantity = 0;
var i = 1;

while (Math.abs(number / i) >= 1) {
  quantity ++;
  i *= 10;
  console.log(quantity);
}

console.log(quantity)