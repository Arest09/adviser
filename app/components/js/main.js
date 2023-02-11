"use strict"
const currentUrl = window.location

let menu = document.querySelector(".menu")

function home(e, currentUrl) {
  if (e.target.closest(".menu__list-link") && currentUrl.pathname !== "/") {
    window.location.href = "/"
  }
}

menu.addEventListener("click", (e) => {
  home(e, currentUrl)
})

console.log(currentUrl.pathname)
