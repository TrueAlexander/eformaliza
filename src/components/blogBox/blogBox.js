const blogBox = () => {
  
  const container = document.querySelector('.blogBox__row')

  const posts = [
    {
      id: 0,
      title: "Por que investir na criação de sites profissionais?",
      date: "11/03/2022",
      textShort: "As redes sociais, atualmente, parecem dominar a internet. E devido a isso muitos podem até pensar: por que as empresas precisam de sites? Um perfil de empresa nas redes sociais não é suficiente?",
      imageUrl: require("./../../../images/blog1.jpg"), 
    },
    {
      id: 1,
      title: "O principal segredo para ter sucesso nos negócios",
      date: "22/06/2022",
      textShort: "Um ponto extremamente importante está relacionado à imagem positiva da empresa. Como a empresa é vista em todas as plataformas onde ela atua.",
      imageUrl: require("./../../../images/blog2.jpg"),
    },
  ]
 
  posts.forEach((post) => {
    container.insertAdjacentHTML('beforeend', `
      <div class="blogBox__item">
        <div class="blogBox__card">
          <div 
            class="blogBox__image"
            style="background-image: url(${post.imageUrl});"
          >
          </div>
          <div class="blogBox__post">
            <div class="blogBox__date">${post.date}</div>
            <div class="blogBox__subtitle">${post.title}</div>
            <div class="blogBox__text">${post.textShort}</div>
            <button class="blogBox__button btn">Ler mais...</button>
          </div>
        </div>
      </div>
    `)
  })
}

export default blogBox