let numbers = [1, 4, 5, 9, 2, 5, 1];
let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++){
  
  let haveRepeat = false; 
  
  for (let j = numbers.length; j >= 0; j--){
    if (i !== j && numbers[i] === numbers[j]){ 
      haveRepeat = true; 
    } 
}
if(!haveRepeat ){uniqueNumbers.push(numbers[i])}
}