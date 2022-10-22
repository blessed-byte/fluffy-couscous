'use strict';
//generate a number to be used for selecting the html elements
const randomNumber = Math.trunc(Math.random()*10 +1)

//you can log it to console for debugging if you want
console.log(randomNumber);

const img1 = document.querySelector('.img-1')
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const img4 = document.querySelector('.img-4');
const img5 = document.querySelector('.img-5');
const img6 = document.querySelector('.img-6');
const img7 = document.querySelector('.img-7');
const img8 = document.querySelector('.img-8');
const img9 = document.querySelector('.img-9');
const img10 = document.querySelector('.img-10');
const header = document.querySelector('.page-header');
let filterClass = document.getElementsByClassName('filter');

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

img1.addEventListener('click', function (e) {
    console.log('number 1 pressed');
    if (img1 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();

    }
});

img2.addEventListener('click', function (e) {
    console.log('number 2 pressed');
    if (img2 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});

img3.addEventListener('click', function (e) {
    console.log('number 3 pressed');
    if (img3 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});
img4.addEventListener('click', function (e) {
    console.log('number 4 pressed');
    if (img4 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});
img5.addEventListener('click', function (e) {
    console.log('number 5 pressed');
    if (img5 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});
img6.addEventListener('click', function (e) {
    console.log('number 6 pressed');
    if (img6 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});
img7.addEventListener('click', function (e) {
    console.log('number 7 pressed');
    if (img7 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});
img8.addEventListener('click', function (e) {
    console.log('number 8 pressed');
    if (img8 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});
img9.addEventListener('click', function (e) {
    console.log('number 9 pressed');
    if (img9 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});
img10.addEventListener('click', function (e) {
    console.log('number 10 pressed');
    if (img10 === image){
        console.log('hurray');
    }else{
        console.log('please try again');
        displayFilter();
    }
});