var incomeTax = 13;
var contributions = 30;

var calculateExpenses = function(netSalary) {
  return Math.round((netSalary / (100 - incomeTax) * 100) + (netSalary / (100 - incomeTax) * 100) * contributions / 100);
}
 