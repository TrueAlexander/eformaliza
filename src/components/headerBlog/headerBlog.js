import $ from 'jquery'


const headerBlog = () => {
  
  //scroll/full header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".headerBlog, .headerBlog__logo, .headerBlog__title, .headerBlog__nav").addClass("scroll")
      $(".langToggle").addClass("dropped")
    }
    else {
      $(".headerBlog, .headerBlog__logo, .headerBlog__title, .headerBlog__nav").removeClass("scroll")
      $(".langToggle").removeClass("dropped")
    } 
  })

}

export default headerBlog
