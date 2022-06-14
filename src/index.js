import './styles/index.scss'

import headerWithScroll from './components/header/headerWithScroll'
import home from './components/home/home'
import discount from './components/discount/discount'
import portfolio from './components/portfolio/portfolio'
// import ask from './components/ask/ask'
import langToggle from './components/langToggle/langToggle'
import offers from './components/offers/offers'
import blogSection from './components/blogSection/blogSection'
import antiFouc from './antiFouc'
import yall from 'yall-js'
import headerBlog from './components/headerBlog/headerBlog'



if (!window.location.href.includes('blog.html')) {
  
  document.addEventListener("DOMContentLoaded", yall)
  antiFouc()
  headerWithScroll()
  home()
  discount()
  portfolio()
  offers()
  langToggle()
} else {
  
  headerBlog()
  blogSection()
  antiFouc()
}



