"use strict"

if (document.querySelector(".callback__accept")) {
  let accept = document.querySelector(".callback__accept")
  let popup = document.querySelector(".popup")
  let header = document.querySelector(".header")
  let company = document.querySelector(".popup-header")
  let popupText = document.querySelector(".popup__text")

  function popupFunc(accept, popup, text) {
    const handlePopup = (e) => {
      popup.classList.toggle("popup--active")
      header.style.display = "none"
      popup.classList.remove("popup--none")
      document.body.classList.add("lock")
      popupText.textContent = text
      console.log(e.target)
    }

  
    

    accept.addEventListener("click", handlePopup)

    const popupClose = (e) => {
      if (
        e.target.closest(".popup__close") ||
        !e.target.closest(".popup__content")
      ) {
        popup.classList.remove("popup--active")
        document.body.classList.remove("lock")
        popup.classList.add("popup--none")
        header.style.display = "block"
      }
    }

    popup.addEventListener("click", popupClose)
  }

  const text1 = `<span> Я даю согласие ООО «Феникс» на обработку данных, указанных мной
  в настоящей форме любыми способами, в том числе третьими лицами,
  в том числе воспроизведение, электронное копирование,
  обезличивание, блокирование, уничтожение, а также вышеуказанную
  обработку иных моих данных, полученных в результате их
  обработки, с целью связи со мной по вопросам исполнения
  заключенных со мной и/или третьими лицами договоров в рамках
  осуществления ООО «Феникс» деятельности по обеспечению возврата
  просроченной задолженности. Указанное согласие дано на срок 15
  лет, а в случае его отзыва обработка моих данных должна быть
  прекращена ООО «Фениксом» и/или третьими лицами в порядке и
  сроки, предусмотренные действующим законодательством. Я даю
  согласие ООО «Феникс» на обработку данных, указанных мной в
  настоящей форме любыми способами, в том числе третьими лицами, в
  том числе воспроизведение, электронное копирование,
  обезличивание, блокирование, уничтожение, а также вышеуказанную
  обработку иных моих данных, полученных в результате их
  обработки, с целью связи со мной по вопросам исполнения
  заключенных со мной и/или третьими лицами договоров в рамках
  осуществления ООО «Феникс» деятельности по обеспечению возврата
  просроченной задолженности. Указанное согласие дано на срок 15
  лет, а в случае его отзыва обработка моих данных должна быть
  прекращена ООО «Фениксом» и/или третьими лицами в порядке и
  сроки, предусмотренные действующим законодательством.</span>`

  const text2 = '<a href="">лицензия<a/>'

  popupFunc(accept, popup, text1)
  popupFunc(company, popup, text2)
}

