import { elementScrollIntoView } from "seamless-scroll-polyfill";

const scrollTo = () => {

  // const contactLink = document.querySelectorAll('.header__item')[5]
  // const promotionLink = document.querySelectorAll('.header__item')[2]
  // const creationLink = document.querySelectorAll('.header__item')[1]
  // const homeLink = document.querySelectorAll('.header__item')[0]

  const contactLink = document.getElementById('toContacts')
  const promotionLink = document.getElementById('toPromotion')
  const creationLink = document.getElementById('toCreation')
  const homeLink = document.getElementById('toHome')

  const promotionBtn = document.querySelector('.promotion__btn')
  const creationBtn = document.querySelector('.creation__btn')
  const discountLink = document.querySelector('.timer__title')
  
  const allLinks = []
  allLinks.push(contactLink, discountLink, promotionLink, homeLink, promotionBtn, creationLink, creationBtn)
 
  allLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()

      const id = link.getAttribute('href').substring(1)
      console.log(id);
      const target = document.getElementById(id)
      console.log(target);

      elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
      
    })
  })
  
}

export default scrollTo;
