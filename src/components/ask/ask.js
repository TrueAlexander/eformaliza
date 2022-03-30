const ask = () => {
  const form = document.querySelector('.form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    ///
    console.log('sent to server');
    ////
  })
}

export default ask;