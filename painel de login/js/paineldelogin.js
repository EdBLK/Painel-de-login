var formLogin = document.querySelector('#login')
var formRegister = document.querySelector('#register')
var bot = document.querySelector('.btCor')


document.querySelector('#btL').addEventListener('click', () => {
formLogin.style.left = "25px"
formRegister.style.left = "450px"
bot.style.left = "0px"
})


document.querySelector('#btR').addEventListener('click', () => {
formLogin.style.left = "450px"
formRegister.style.left = "25px"
bot.style.left = "110px"
})
