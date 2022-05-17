
const home = () => {
  
  window.addEventListener('DOMContentLoaded', () => {

    const video = document.querySelector('.home__video')
    const homeLang = document.querySelector('.home')
    

    video.addEventListener('click', () => {
      video.innerHTML = ''
      video.classList.remove('hovered')

      const videos = [
        {
          lan: "pt", 
          url: "https://www.youtube.com/embed/zy-XbdPf8yU"
        },
        {
          lan: "es", 
          url: "https://www.youtube.com/embed/MPajIs5rJqE"
        },
        {
          lan: "en", 
          url: "https://www.youtube.com/embed/uDldkuvjNbE"
        },  
      ]

      let actualLink

      if (homeLang.id === "pt") {  
        actualLink = videos[0].url
      } else if (homeLang.id == "en") {
        actualLink = videos[2].url
      } else {
         actualLink = videos[1].url   
      }

      const insertVideo = (link) => {

        video.insertAdjacentHTML('beforeend', 
        `
          <iframe src="${link}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        `  
      )
    }
    insertVideo(actualLink)
    })
  })




}

export default home