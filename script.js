let getPrice = function(time, fast) {
  let pricePerHour = 1500;

  if (fast) {
    pricePerHour *= 2.5;
    time /= 2;
    } ;
  
   if ( time > 150) {
    pricePerHour -= 250 ;
    };
  let price = pricePerHour * time;
  return price;
  }
  
let getProfitableProject = function(hours, profit) {
  let urgentProject = getPrice(hours, true) - profit;
  let notUrgentProject = getPrice(hours, false);
  let value;
  let expences;
  
  if (urgentProject < notUrgentProject) {
    value = 'срочный';
    expences = urgentProject;
    } else {
    value = 'обычный';
    expences = notUrgentProject;
    }
    
    return 'Выгодней ' + value + ' проект. Потратишь на него '+ expences;
  };

  
  
  getProfitableProject(100, 2000);

