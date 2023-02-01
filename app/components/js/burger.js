'use strict'
//burger menu
let burger = document.querySelector(".menu__burger");
let menu = document.querySelector(".menu__list");

const burgerClick = (e) => {
  if (e.target.closest(".menu__burger")) {
    menu.classList.toggle("menu__list--active");
    document.body.classList.add('lock')
  }
};

const menuClick = (e) => {
  if (e.target.closest(".menu__list-item")) {
    menu.classList.remove("menu__list--active");
    document.body.classList.remove('lock')
  }
};

burger.addEventListener("click", burgerClick);

menu.addEventListener("click", menuClick);