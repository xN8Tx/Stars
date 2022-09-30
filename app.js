const star1 = document.querySelector('.star_1');
const star2 = document.querySelector('.star_2');
const star3 = document.querySelector('.star_3');
const star4 = document.querySelector('.star_4');
const star5 = document.querySelector('.star_5');

const textBad = document.querySelector('.text__bad');
const textNgood = document.querySelector('.text__ngood');
const textNormal = document.querySelector('.text__normal');
const textGood = document.querySelector('.text__good');
const textExcelent = document.querySelector('.text__excelent');


star1.addEventListener('click', () => {
    star1.classList.toggle('active');
    star2.classList.remove('active');
    star3.classList.remove('active');
    star4.classList.remove('active');
    star5.classList.remove('active');
    
    
    textBad.classList.toggle('active');
    textNgood.classList.remove('active');
    textNormal.classList.remove('active');
    textGood.classList.remove('active');
    textExcelent.classList.remove('active');
});

star2.addEventListener('click', () => {
    star1.classList.add('active');
    star2.classList.toggle('active');
    star3.classList.remove('active');
    star4.classList.remove('active');
    star5.classList.remove('active');

    textNgood.classList.toggle('active');
    textBad.classList.remove('active');
    textNormal.classList.remove('active');
    textGood.classList.remove('active');
    textExcelent.classList.remove('active');
});

star3.addEventListener('click', () => {
    star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.toggle('active');
    star4.classList.remove('active');
    star5.classList.remove('active');

    textNormal.classList.toggle('active');
    textBad.classList.remove('active');
    textNgood.classList.remove('active');
    textGood.classList.remove('active');
    textExcelent.classList.remove('active');
});

star4.addEventListener('click', () => {
    star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.add('active');
    star4.classList.toggle('active');
    star5.classList.remove('active');

    textGood.classList.toggle('active');
    textBad.classList.remove('active');
    textNgood.classList.remove('active');
    textNormal.classList.remove('active');
    textExcelent.classList.remove('active');
});

star5.addEventListener('click', () => {
    star1.classList.add('active');
    star2.classList.add('active');
    star3.classList.add('active');
    star4.classList.add('active');
    star5.classList.toggle('active');

    textExcelent.classList.toggle('active');
    textBad.classList.remove('active');
    textNgood.classList.remove('active');
    textNormal.classList.remove('active');
    textGood.classList.remove('active');
});