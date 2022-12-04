'use strict';

const randomNumber = Math.trunc(Math.random()*10 +1)


console.log(randomNumber);


const header = document.querySelector('.page-header');

const text = 'Congratulations! You have won 🏆'
const image = document.getElementById(`img-${randomNumber}`);
const tryAgainBtn = document.querySelector('.btn');

const displayFilter = function () {
for (let i = 1; i <= 10; i++) {
    if (i === randomNumber) continue;
    document.querySelector(`.img-${i}`).classList.add('filter')
}
}


image.addEventListener('click', function (e) {
    console.log('hurray');
    header.textContent = text;
})

let imgs = Array.from(document.querySelectorAll('img'));

imgs.forEach(function (el, i) {
  i += 1  
  el.addEventListener('click', function() {
    if (i === randomNumber){ 
    console.log(i);
    console.log('hurray');
    header.textContent = text;
} else {
    console.log(i);
    console.log('Sorry you lost!');
}
  });
});
