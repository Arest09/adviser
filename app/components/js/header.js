'use strict'
window.onscroll = scrollIndicator
//индикатор скролла
function scrollIndicator() {
  let header = document.querySelector(".header")

  let winScroll = window.pageYOffset
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  let scrolled = (winScroll / height) * 100
  document.getElementById("myBar").style.width = scrolled + "%"

  //header меняет цвет при прокрутке
  if (winScroll > 0) {
    header.style.background = "#253a43"
  } else {
    header.style.background = "#04131a"
  }
} 