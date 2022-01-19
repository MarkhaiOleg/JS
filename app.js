var numbers = document.querySelector('.numbers')
let btncolor = document.querySelector('#setColor')
let btnRandom = document.querySelector('#setRandom')
let boxUpper = document.querySelector('#boxUpper')
let btnOk = document.querySelector('.buttonOk')


function clearBoxes(){
    numbers.innerHTML = ''
}


function widthContainer(){
    let sequence = document.getElementById('boxUpper').value
    let boxes = document.querySelectorAll('.number1')
    let width = boxes.length
    if (sequence == 9 ) {
       numbers.classList.add('widthSmall')
    } 
    if (sequence == 4){
       numbers.classList.add('widthMiddle')
    }
}

function widthREmove(){
    let sequence = document.getElementById('boxUpper').value
    let boxes = document.querySelectorAll('.number1')
    let width = boxes.length
    if (sequence != 9 ) {
       numbers.classList.remove('widthSmall')
    } 
    if (sequence != 4){
       numbers.classList.remove('widthMiddle')
    }
}

console.log(widthContainer)


let createBox = function() {
let sequence = document.getElementById('boxUpper').value
    for(i = 0;i < sequence ;i++ ){
        let box = document.createElement('a');
        box.classList.add('number1');
        box.textContent = i + 1;
        numbers.appendChild(box);
    } }

btnOk.addEventListener('click', () => {
    clearBoxes()
    widthContainer()
    widthREmove()
    createBox()
})

//function getRandomInt(max) {
  //  return Math.floor(Math.random() * max);
  //}

btncolor.addEventListener('click', () => {
    let color = document.getElementById('color').value
    let boxes = document.querySelectorAll('.number1')
    for(i = 0;i < boxes.length;i++){
        boxes[i].style.backgroundColor= color;
    }
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются (взято с MSDN)
  }



  /* рандомный цвет по нажатию на кнопку */
  btnRandom.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.number1')
  function random_rgba() {
    /* функция для генерирования рандомного rgba цвета*/
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    var color = random_rgba();
    /* рандомно задается цвет элементу */
    for(i = 0;i < boxes.length;i++){
        boxes[i].style.backgroundColor = color
    }
  })


























/*
btnRandom.addEventListener('click', () => {
        let boxes = document.querySelectorAll('.number1')
        let arrayColor = [ 'gray' ,'silver' ,'beige ','beige ' ,'golden' ,'turquoise' ,'emerald' ,'coral' ,'olive' ,'lilac' ,'amber' ,'sand' ,'vinous' ,'сhocolate' ,'ivory' ,'salmon' ,'lavender' ,'plum' ,'maroon' ,'crimson']
        let item = arrayColor[getRandomInt(20)]
        console.log(arrayColor[item])
        for(i = 0;i < boxes.length;i++){
            boxes[i].style.backgroundColor = item;
            return console.log(item)
        }
        
})
*/

/*
 function clearBoxes(){
     for(i = 0; i < numbers.length;i++){
        numbers.removeChild(numbers.firstElementChild)
     }
 */

/*
  btnOk.addEventListener('click', () => {
    let sequence = document.getElementById('boxUpper').value
    console.log(sequence)
    for(i = 0;i <= sequence - 2;i++ ){
        var box = document.createElement('a');
        box.classList.add('number1');
        box.textContent = i;
        numbers.appendChild(box);  
        console.log(boxes.length)
    }
  })
  */

/*
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
btnRandom.addEventListener('click', () => {
    let arrayColor = [ 'gray' ,'silver' ,'beige ','beige ' ,'golden' ,'turquoise' ,'emerald' ,'coral' ,'olive' ,'lilac' ,'amber' ,'sand' ,'vinous' ,'сhocolate' ,'ivory' ,'salmon' ,'lavender' ,'plum' ,'maroon' ,'crimson']
    let key = getRandomInt(0, arrayColor.length - 1);
    for(i = 0;i < boxes.length;i++){
        boxes[i].style.backgroundColor = key;
    }
})*/
 
/*
btnRandom.addEventListener('click', () => {
    let arrayColor = [ 'gray' ,'silver' ,'beige ','beige ' ,'golden' ,'turquoise' ,'emerald' ,'coral' ,'olive' ,'lilac' ,'amber' ,'sand' ,'vinous' ,'сhocolate' ,'ivory' ,'salmon' ,'lavender' ,'plum' ,'maroon' ,'crimson']
    let key = getRandomInt(0, arrayColor.length - 1);
    console.log(key)
    for(i = 0;i < boxes.length;i++){
        boxes[i].style.backgroundColor = key;
    }
    
})
  */

/*
btnGreen.addEventListener('click',() => boxes.style.backgroundColor='#50ff32')
btnBlue.addEventListener('click',() => boxes.style.backgroundColor='#0004bf')*/

/*
btnRed.addEventListener('click', () => boxes1.style.backgroundColor='#ff0000')
btnGreen.addEventListener('click',() => boxes1.style.backgroundColor='#50ff32')
btnBlue.addEventListener('click',() => boxes1.style.backgroundColor='#0004bf')


btnRed.addEventListener('click', () => boxes2.style.backgroundColor='#ff0000')
btnGreen.addEventListener('click',() => boxes2.style.backgroundColor='#50ff32')
btnBlue.addEventListener('click',() => boxes2.style.backgroundColor='#0004bf')


btnRed.addEventListener('click', () => boxes3.style.backgroundColor='#ff0000')
btnGreen.addEventListener('click',() => boxes3.style.backgroundColor='#50ff32')
btnBlue.addEventListener('click',() => boxes3.style.backgroundColor='#0004bf')


btnRed.addEventListener('click', () => boxes4.style.backgroundColor='#ff0000')
btnGreen.addEventListener('click',() => boxes4.style.backgroundColor='#50ff32')
btnBlue.addEventListener('click',() => boxes4.style.backgroundColor='#0004bf')
*/