let usersData = ['Виталий Иванович', 'Иннокентий Петрович', 'Александр Александрович', 'Игорь Олегович', 'Евгений Петрович', 'Игнат Денисович', 'Сергей Александрович', 'Семён Петрович'];
let query = 'Александрович';
let matchingUsers = 0;


for (let i = 0; i <usersData.length ;i++) {
 if (usersData[i].indexOf(query) >= 0) {
   matchingUsers++;
   }
  }
  
console.log( matchingUsers);