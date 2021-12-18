let getPrice = function(time, fast) {
  let pricePerHour = 1500;
   
    
  if (fast) {
    pricePerHour *= 2.5;
    time /= 2;
    } ;
  
    
   if ( time > 150) {
    pricePerHour -= 250 ;
    };
    
 
    
  return pricePerHour * time;
  }
  
getPrice(100, true);