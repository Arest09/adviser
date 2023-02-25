$(function () {
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
