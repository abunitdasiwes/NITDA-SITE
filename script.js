const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () =>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active')
});

const menuBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active')
    searchForm.classList.remove('active');
});

window.addEventListener('scroll', () =>{
    navBar.classList.remove('active')
    searchForm.classList.remove('active');
});