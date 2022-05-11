import './styles/index.scss'

import headerWithScroll from './components/header/headerWithScroll'
import home from './components/home/home'
import discount from './components/discount/discount'
import portfolio from './components/portfolio/portfolio'
// import ask from './components/ask/ask'
import langToggle from './components/langToggle/langToggle'
import offers from './components/offers/offers'
import antiFouc from './antiFouc'
import yall from 'yall-js'


document.addEventListener("DOMContentLoaded", yall);
headerWithScroll()
home()
discount()
portfolio()
// ask()
offers()
langToggle()
antiFouc()
