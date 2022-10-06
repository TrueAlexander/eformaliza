import './styles/index.scss'

import headerWithScroll from './components/header/headerWithScroll'
import home from './components/home/home'
import discount from './components/discount/discount'
import portfolio from './components/portfolio/portfolio'
import langToggle from './components/langToggle/langToggle'
import offers from './components/offers/offers'
// import blogSection from './components/blogSection/blogSection'
import blogBox from './components/blogBox/blogBox'
import antiFouc from './antiFouc'
import yall from 'yall-js'
import blogHeader from './components/blogHeader/blogHeader'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

AOS.init()

if (!window.location.href.includes('blog.html')) {
  
  document.addEventListener("DOMContentLoaded", yall)
  
  headerWithScroll()
  home()
  discount()
  portfolio()
  offers()
  langToggle()
} else {
  document.addEventListener("DOMContentLoaded", yall)
  blogHeader()
  blogBox()
  // blogSection()
  
}

antiFouc()


