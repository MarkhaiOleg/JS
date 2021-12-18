let getDiet = function(food, limit) {
  let total = 0;
  for (i= 0;i <= food.length;i++) {
    if (total > limit) {
     return i - 1;
   }
   total += food[i]; 
  }
    
  };