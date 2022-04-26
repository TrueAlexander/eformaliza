import { elementScrollIntoView } from "seamless-scroll-polyfill";
import $ from 'jquery';

const headerWithScroll = () => {

  const scrolling = () => {
    const contactLink = document.querySelector('#toContacts')
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
        const target = document.getElementById(id)

        elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
      })
    })
  }
  
 
    //scroll/full header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".header, .header__logo, .header__subtitle, .header__title, .header__nav, .header__nav_burger").addClass("scroll");
    }
    else {
      $(".header, .header__logo, .header__subtitle, .header__title, .header__nav, .header__nav_burger").removeClass("scroll");
    }
    
  });


  if (screen.width > 700) {
    console.log('>700');
    scrolling()
  } else {
    console.log('<700');
    $(".header__nav_burger").click(function () {
    
      //lock/unlock body
      $("body").toggleClass("lock"); 
      if ($(window).scrollTop() < 1) {
        $(".header, .header__logo, .header__subtitle, .header__title, .header__nav, .header__nav_burger").toggleClass("scroll");
        $(".header__nav_burger, .header__nav, .header__list, .header__item").toggleClass("dropped");
        $(".header__item").click(function () {
          scrolling()
          $(".header__nav_burger, .header__nav, .header__list, .header__item").removeClass("dropped");
          $("body").removeClass("lock");
        });
      } else {
        $(".header__nav_burger, .header__nav, .header__list, .header__item").toggleClass("dropped");
        $(".header__item").click(function () {
          $(".header__nav_burger, .header__nav, .header__list, .header__item").removeClass("dropped");
          $("body").removeClass("lock");
        });
      }
    });

  }
  


}

export default headerWithScroll
