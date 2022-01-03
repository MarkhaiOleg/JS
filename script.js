var popup = document.querySelector('.popup');
var openPopupButoon = document.querySelector('.button-show');
var closePopupButoon = popup.querySelector('.button-hide');

openPopupButoon.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup--open');
  });
  
closePopupButoon.addEventListener('click', function() {
    popup.classList.remove('popup--open');
  });
  
document.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27) {
  popup.classList.remove('popup--open');
  }
  })