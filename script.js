let indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
let levels = [8, 15, 9, 12, 11];
let trainingTime = 30;

if (trainingTime <= 30) {
  levels[indicators.indexOf('ловкость')] += 3;
  levels[indicators.indexOf('скорость')] += 3;
  } 
  else if (trainingTime > 30 && trainingTime <= 60) {
    levels[indicators.indexOf('гибкость')] += 3;
    }
  else if (trainingTime > 60) {
    levels[indicators.indexOf('сила')] += 2;
    levels[indicators.indexOf('выносливость')] += 2;
    }
    
  console.log(levels);