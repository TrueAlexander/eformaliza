
const home = () => {
  
  window.addEventListener('DOMContentLoaded', () => {

    const video = document.querySelector('.home__video')

    video.addEventListener('click', () => {
      video.innerHTML = ''
      video.insertAdjacentHTML('beforeend', 
        `
          <iframe src="https://www.youtube.com/embed/p5FUE9UvYbs?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        `  
      )
    })
  })




}

export default home