import { elementScrollIntoView } from "seamless-scroll-polyfill";

const scrollTo = () => {

  const contactLink = document.querySelectorAll('.header__item')[5]
  const discountLink = document.querySelector('.timer__title')
  const promotionLink = document.querySelectorAll('.header__item')[2]
  const homeLink = document.querySelectorAll('.header__item')[0]
  const promotionBtn = document.querySelector('.promotion__btn')
  
  const allLinks = []
  allLinks.push(contactLink, discountLink, promotionLink, homeLink, promotionBtn)
  console.log(allLinks);
  allLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()

      const id = link.getAttribute('href').substring(1)
      const target = document.getElementById(id)

      elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
      
    })
  })
  
}

export default scrollTo;
