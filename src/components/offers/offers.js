const offers = () => {
  
  const offers = document.querySelectorAll('.offer')
 
  offers.forEach((offer) => {
    const button = offer.querySelector('.offer__btn')
    const description = offer.querySelector('.offer__description')

    offer.addEventListener('click', () => {
      
      button.classList.toggle('active')

      if (button.classList.contains('active')) {
        description.style.height = 'auto'
        description.style.marginTop = '-6px'
      } else {
        description.style.height = '0'
        description.style.marginTop = '-26px'
      }
    })   
  })
}

export default offers