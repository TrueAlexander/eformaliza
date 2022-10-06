import $ from 'jquery'


const blogHeader = () => {
  
  //scroll/full header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".blogHeader, .blogHeader__logo, .blogHeader__title, .blogHeader__nav").addClass("scroll")
      $(".langToggle").addClass("dropped")
    }
    else {
      $(".blogHeader, .blogHeader__logo, .blogHeader__title, .blogHeader__nav").removeClass("scroll")
      $(".langToggle").removeClass("dropped")
    } 
  })

}

export default blogHeader
