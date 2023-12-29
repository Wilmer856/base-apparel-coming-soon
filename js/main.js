let emailField = document.querySelector('.email-input')
let emailBtn = document.querySelector('.email-btn')


emailBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(emailField.value === null || emailField.value === "" || !(emailField.validity.valid)){
        emailField.style.border = "2px solid hsl(0, 93%, 68%)"
        document.querySelector('.error-container').style.display = "inline"
        document.querySelector('.error-text').style.display = "block"
    }
    else {
        emailField.style.border = "2px solid hsla(0, 36%, 70%, .3)"
        document.querySelector('.error-container').style.display = "none"
        document.querySelector('.error-text').style.display = "none"
    }
})