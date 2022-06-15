import { elementScrollIntoView } from "seamless-scroll-polyfill";

const blogSection = () => {

  const scrolling = () => {

    const link1 = document.getElementById('link1')
    const link2 = document.getElementById('link2')
    const link3 = document.getElementById('link3')
    const link4 = document.getElementById('link4')
    const link5 = document.getElementById('link5')
    const resumo = document.getElementById('resumoLink')
    const voltar = document.getElementById('voltar')
    
    const allLinks = []
    allLinks.push(link1, link2, link3, link4, link5, resumo, voltar)

    
    allLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()
        const id = link.getAttribute('href').substring(1)
        
        const target = document.getElementById(id)
        console.log(target)
        elementScrollIntoView(target, { behavior: "smooth", block: "start" , inline: "center" })
      }) 
    })    
  }
  scrolling()
}

export default blogSection