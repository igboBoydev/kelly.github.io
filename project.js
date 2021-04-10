const nav = document.querySelector('nav');
const icons = document.querySelector('.icons');
const iconOne = document.querySelector('.icon1');
const iconTwo = document.querySelector('.icon2');
const h1 = document.querySelector('h1');
const div = document.querySelector('.navLinks1')

iconTwo.addEventListener('click', function(){
    div.classList.remove('display');
    nav.classList.add('nav')
    iconTwo.classList.add('display');
    h1.classList.add('display');
    iconTwo.classList.remove('active');
    iconOne.classList.remove('display');
    iconOne.classList.add('active');
})

iconOne.addEventListener('click', function(){
    div.classList.add('display');
    nav.classList.remove('nav')
    iconOne.classList.add('display')
    h1.classList.remove('display');
    iconOne.classList.remove('active')
    iconTwo.classList.add('active');
    iconTwo.classList.remove('display')
})