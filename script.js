var assortmentData = [
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  },
  {
    inStock: true,
    isHit: true
  },
  {
    inStock: true,
    isHit: false
  },
  {
    inStock: false,
    isHit: false
  }
];

var updateCream = function(goods) {
  var elements = document.querySelectorAll('.good');
  for(var i = 0;i < elements.length;i++) {
  var element = elements[i];
  var good = goods[i];
  
  var availabilityClass = 'good--available';
  if(!good.inStock){
  availabilityClass = 'good--unavailable';  
}
  element.classList.add(availabilityClass);

 if(good.isHit) {
 element.classList.add('good--hit');      
}
}
};

updateCream(assortmentData);

