// Контейнер для карточек
var pool = document.querySelector('.pool');

// Получаем шаблон карточки
var template = document.querySelector('#element-template').content;
var element = template.querySelector('div');

// Клонируем и наполняем элементы в цикле

for (var i = 1; i <= 10; i++) {
   var clonedElement = element.cloneNode(true);
   clonedElement.children[0].textContent = i;
   pool.appendChild(clonedElement);
 }