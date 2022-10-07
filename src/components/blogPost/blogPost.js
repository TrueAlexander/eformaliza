import posts from './../../posts'
const placeholder = require("../../../images/placeholder.png")

const blogPost = () => {
  
  const container = document.querySelector('.blogPost .container')
  const id = localStorage.getItem("id")
  const allPosts = posts()

  console.log(placeholder);
  const postToRender = allPosts[id]
  window.document.title = `${postToRender.title}`
  container.insertAdjacentHTML('beforeend', 
  `
    <div class="post">
      <div class="post__title">
        <h2 class="title">${postToRender.title}</h2>
      </div>
      <div class="post__box">
        <div class="post__image">
          <img class="lazy" src=${placeholder} data-src=${postToRender.imageUrl} alt=${postToRender.title} />
        </div>
        <div class="post__text">${postToRender.textFull}</div>
      </div>
      <a class="post__btn btn" href="#home" title="Ir ao inicio">Ao inicio</a>
    </div>
  `)
}

export default blogPost