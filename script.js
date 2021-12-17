let calculateSalary = function (dirtSalary) {
if (dirtSalary >= 100000) {
   dirtSalary =  dirtSalary - (dirtSalary * 0.45)} else{
     dirtSalary = dirtSalary - (dirtSalary * 0.35)
    }
  return dirtSalary
};