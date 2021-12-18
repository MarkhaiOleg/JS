let calculatePressure = function(fluidDensity, depth ) {
  let accelerationOfGravity = 9.8;
  let pressure;
  pressnure = Math.round(fluidDensity * accelerationOfGravity * depth);
  return pressnure;
  };