$(function () {
  //индикатор скролла
  window.onscroll = scrollIndicator

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

  //button submit form
  if (document.querySelector(".callback__checkbox")) {
    let checkbox = document.querySelector(".callback__checkbox")

    const checkboxClick = () => {
      let btn = document.querySelector(".callback__btn")
      if (checkbox.checked === true) {
        btn.removeAttribute("disabled")
        btn.classList.remove("disabled")
        btn.style.cursor = "pointer"
      } else {
        btn.setAttribute("disabled", "")
        btn.classList.add("disabled")
        btn.style.cursor = "not-allowed"
      }
    }

    checkbox.addEventListener("click", checkboxClick)
  }


  //phone mask
  if (document.querySelector('[name = "phone"]')) {
    let im = new Inputmask("+7(999)9999999")
    im.mask(document.querySelector('[name = "phone"]'))
  }
})
