let checkVehicle = function(numberOfWheels, weight) {
  if (numberOfWheels < 4 && weight < 100) {
     return 'Парковка разрешена';
    } else {return 'Вам здесь не место! Мяу!'};
  };