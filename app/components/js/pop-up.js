'use strict'

let accept = document.querySelector(".callback__accept");
let popup = document.querySelector(".popup");
let header = document.querySelector('.header')

function popupFunc(accept,popup) {
  const handlePopup = (e) => {
    popup.classList.toggle("popup--active");
    header.style.display = 'none';
    popup.classList.remove('popup--none')

  };

  accept.addEventListener("click", handlePopup);

  const popupClose = (e) =>{
    if (e.target.closest('.popup__close') || !e.target.closest('.popup__content')) {
      popup.classList.remove('popup--active')
      popup.classList.add('popup--none')
      header.style.display = 'block';
    }
  }

  popup.addEventListener('click',popupClose)
}

popupFunc(accept,popup)