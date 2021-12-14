let books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
let minNumber = 3;
let maxNumber = 5;
let filteredBooks = [];

for (let i = 0; i < books.length;i++) {
  if ( books[i].length <= maxNumber && books[i].length >= minNumber) {
    filteredBooks.push(books[i]);
    }
  }

console.log(filteredBooks);
