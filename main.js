let register = document.getElementsByClassName("sign-up-button")
let login = document.getElementsByClassName("Login")

function change_page(){
    document.location.href = 'register.html'
}

function home_page(){
    document.location.href = 'home.html'
}

register[0].setAttribute('onclick', 'change_page()')
login[0].setAttribute('onclick', 'home_page()')
