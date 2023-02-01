$(function () {
//индикатор скролла
window.onscroll = scrollIndicator;

function scrollIndicator() {
  let header = document.querySelector('.header')

  let winScroll = window.pageYOffset;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  //header меняет цвет при прокрутке
  if (winScroll > 0) { 
    header.style.background = "#253a43"
  }
  else{
    header.style.background = "#04131a"
  }
}







//burger menu
  let burger = document.querySelector(".menu__burger");
  let menu = document.querySelector(".menu__list");
  
  const burgerClick = (e) => {
    if (e.target.closest(".menu__burger")) {
      menu.classList.toggle("menu__list--active");
    }
  };

  const menuClick = (e) => {
    if (e.target.closest(".menu__list-item")) {
      menu.classList.remove("menu__list--active");
    }
  };

  burger.addEventListener("click", burgerClick);

  menu.addEventListener("click", menuClick);

  var scroll = new SmoothScroll('a[href*="#"]');

  //button submit form
  let checkbox = document.querySelector(".callback__checkbox");
  const checkboxClick = () => {
    let btn = document.querySelector(".callback__btn");
    if (checkbox.checked === true) {
      btn.removeAttribute("disabled");
      btn.classList.remove("disabled");
      btn.style.cursor = "pointer"
    } else {
      btn.setAttribute("disabled", "");
      btn.classList.add("disabled");
      btn.style.cursor = "not-allowed"
    }
  };

  checkbox.addEventListener("click", checkboxClick);

  let im = new Inputmask("+7(999)9999999");

  im.mask(document.querySelector('[name = "phone"]'));


  
  //pop-up


  let accept = document.querySelector(".callback__accept");
  let popup = document.querySelector(".popup");

  function popupFunc(accept,popup) {
    const handlePopup = (e) => {
      popup.classList.toggle("popup--active");
      popup.classList.remove('popup--none')
  
    };
  
    accept.addEventListener("click", handlePopup);
  
    const popupClose = (e) =>{
      if (e.target.closest('.popup__close') || !e.target.closest('.popup__content')) {
        popup.classList.remove('popup--active')
        popup.classList.add('popup--none')
      }
      
      
    }

    popup.addEventListener('click',popupClose)
  }

  popupFunc(accept,popup)
   
});


