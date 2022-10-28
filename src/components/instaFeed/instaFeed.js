import Instafeed from "./instafeed.min.js"
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/scss/autoplay'
// import Swiper, { Navigation, Pagination } from 'swiper'

const instaFeed = () => {

  // configure Swiper to use modules
  // Swiper.use([Navigation, Pagination])

  // init Swiper:

  // const swiper = new Swiper('.swiperI', {
  //   // Optional parameters
  //   loop: true,
  //   slidesPerView: 3,
  //   spaceBetween: 35,

  //   //pagination
  //   pagination: {
  //     el: '.swiperI-pagination',
  //     clickable: true,
  //     dynamicBullets: true,
  //   },
  //   breakpoints: {

  //     200: {
  //       slidesPerView: 1,
  //     },

  //     650: {
  //       slidesPerView: 2,
  //     },

  //     1290: {
  //       slidesPerView: 3,
  //     }
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiperI-button-next',
  //     prevEl: '.swiperI-button-prev',
  //   }
  // })

  const feed = new Instafeed({
    accessToken: 'IGQVJYVkV0QXhjMV9FUVFzM0NYR01mVjNpVlpneTJqaE9wQmc5emVkc3JuQnFnWERMRzJ0dHBNeDRrMlAyS1RwOTNkRjVEQkxWT1ZAma25sRzh6TnFlYTdhMDR0OFJFUkFhbXN6WnFRZA1I2REJvbDd5MgZDZD',
    limit: 8,
    template: '<div class="instaFeed__item"><a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a></div>'
  })
  feed.run()
}
  
export default instaFeed


