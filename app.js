var numbers = document.querySelector('.numbers')
let btncolor = document.querySelector('#setColor')
let btnRandom = document.querySelector('#setRandom')
let boxUpper = document.querySelector('#boxUpper')
let btnOk = document.querySelector('.boxOk')


function clearBoxes(){
    numbers.innerHTML = ''
}

let createBox = function() {
let sequence = document.getElementById('boxUpper').value
    console.log(sequence)
    console.log('clearBoxes')

    for(i = 0;i < sequence ;i++ ){
        let box = document.createElement('a');
        box.classList.add('number1');
        box.textContent = i + 1;
        console.log(box)
        numbers.appendChild(box);
    } }

btnOk.addEventListener('click', () => {
    clearBoxes()
    createBox()
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

btncolor.addEventListener('click', () => {
    let color = document.getElementById('color').value
    let boxes = document.querySelectorAll('.number1')
    console.log(color)
    for(i = 0;i < boxes.length;i++){
        boxes[i].style.backgroundColor= color;
    }
})

btnRandom.addEventListener('click', () => {
        let boxes = document.querySelectorAll('.number1')
        let arrayColor = [ 'gray' ,'silver' ,'beige ','beige ' ,'golden' ,'turquoise' ,'emerald' ,'coral' ,'olive' ,'lilac' ,'amber' ,'sand' ,'vinous' ,'сhocolate' ,'ivory' ,'salmon' ,'lavender' ,'plum' ,'maroon' ,'crimson']
        console.log(arrayColor.length)
        let item = arrayColor[getRandomInt(20)]
        console.log(arrayColor[item])
        for(i = 0;i < boxes.length;i++){
            boxes[i].style.backgroundColor = item;
        }
})


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