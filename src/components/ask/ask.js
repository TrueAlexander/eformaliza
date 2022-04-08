const ask = () => {
  const form = document.querySelector('.form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form)
    const body = {}

    formData.forEach((value, field) => {
      body[field] = value
    })

    fetch('https://eformaliza-db-default-rtdb.firebaseio.com/contacts.json', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      
      .then((data) => {
        alert('Muito Obrigado, em breve entraremos em contato com você!!!');
      })
      .catch(error => {
        alert('error' + error.message);
      })
      .finally(() => {
        form.reset()
      })

  })
}

export default ask;




