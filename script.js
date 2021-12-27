var cardList = document.querySelector('.products');
console.log(cardList.children);

var listItem = document.createElement('li');
listItem.classList.add('product');
cardList.appendChild(listItem);
console.log(cardList.children);