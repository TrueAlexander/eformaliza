import { elementScrollIntoView } from "seamless-scroll-polyfill";
import $ from 'jquery';

const headerWithScroll = () => {
 
  const scrolling = () => {
    const contactLink = document.querySelector('#toContacts')
    const promotionLink = document.getElementById('toPromotion')
    const creationLink = document.getElementById('toCreation')
    const homeLink = document.getElementById('toHome')

    const header = document.querySelector('.header')
    const promotionBtn = document.querySelector('.promotion__btn')
    const creationBtn = document.querySelector('.creation__btn')
    const discountLink = document.querySelector('.timer__title')
    
    const allLinks = []

    allLinks.push(contactLink, discountLink, promotionLink, promotionBtn, creationLink, creationBtn,homeLink)

    allLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()

        const id = link.getAttribute('href').substring(1)
        const target = document.getElementById(id)

        if (event.target === homeLink) {

          if (header.classList.contains('scroll')) {
            elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
            console.log('scrolled');
          } 

        } else {
          elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
          console.log('scrolled');
        }
      }) 
    })   
  }

  const scrollingBurger = (clickedLink) => {
      
      console.log(clickedLink);
      const id = clickedLink.getAttribute('href').substring(1)
      const target = document.getElementById(id)

      elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
      console.log('scrollingBurger');
  }
  
 
    //scroll/full header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".header, .header__logo, .header__title, .header__nav, .header__nav_burger").addClass("scroll");
    }
    else {
      $(".header, .header__logo, .header__title, .header__nav, .header__nav_burger").removeClass("scroll");
    } 
  });

  
  if (visualViewport.width > 700) {

    console.log('>700');
    scrolling() 

  } else {

    console.log('<700');
    $(".header__nav_burger").click(function () {
      console.log('click');
      //lock/unlock body
      $("body").toggleClass("lock"); 
      if ($(window).scrollTop() < 1) {
        $(".header, .header__logo, .header__title, .header__nav, .header__nav_burger").toggleClass("scroll");
        $(".header__nav_burger, .header__nav, .header__list, .header__item").toggleClass("dropped");
        $(".header__item").click(function (event) {
          $(".header__nav_burger, .header__nav, .header__list, .header__item").removeClass("dropped");
          $("body").removeClass("lock");
          scrollingBurger(event.target)
        });
      } else {
        $(".header__nav_burger, .header__nav, .header__list, .header__item").toggleClass("dropped");
        $(".header__item").click(function (event) {
          $(".header__nav_burger, .header__nav, .header__list, .header__item").removeClass("dropped");
          $("body").removeClass("lock");
          scrollingBurger(event.target)
        });
      }
    });
  }
}

export default headerWithScroll
