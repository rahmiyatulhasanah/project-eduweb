const form = document.getElementById('form')
const name_input = document.getElementById('name-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    let errors = []
  
    if(name_input){
      errors = getSignupFormErrors(name_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
      errors = getLoginFormErrors(email_input.value, password_input.value)
    }
  
    if(errors.length > 0){
      e.preventDefault()
      error_message.innerText  = errors.join(". ")
    }
  })
  
  function getSignupFormErrors(name, email, password, repeatPassword){
    let errors = []
  
    if(name === '' || name == null){
      errors.push('Masukkan nama')
      name_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
      errors.push('Masukkan email')
      email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
      errors.push('Password harus diisi')
      password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
      errors.push('Password setidaknya berisi 8 karakter!')
      password_input.parentElement.classList.add('incorrect')
    }
    if(password !== repeatPassword){
      errors.push('Password tidak sama!')
      password_input.parentElement.classList.add('incorrect')
      repeat_password_input.parentElement.classList.add('incorrect')
    }
  
  
    return errors;
  }
  
  function getLoginFormErrors(email, password){
    let errors = []
  
    if(email === '' || email == null){
      errors.push('Masukkan email!')
      email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
      errors.push('Masukkan password!')
      password_input.parentElement.classList.add('incorrect')
    }
  
    return errors;
  }
  
  const allInputs = [name_input, email_input, password_input, repeat_password_input].filter(input => input != null)
  
  allInputs.forEach(input => {
    input.addEventListener('input', () => {
      if(input.parentElement.classList.contains('incorrect')){
        input.parentElement.classList.remove('incorrect')
        error_message.innerText = ''
      }
    })
  })