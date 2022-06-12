const antiFouc = () => {
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb)
  }

  domReady(() => {
    //Display body when DOM is loaded
    console.log('ok')
    document.body.style.visibility = 'visible'
    ///
    console.log('ok')
    document.body.classList.remove('preload')
    console.log('ok')

  })
}

export default antiFouc