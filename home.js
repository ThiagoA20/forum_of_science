let questions = document.getElementsByClassName("questions")
let papers = document.getElementsByClassName("papers")
let ebooks = document.getElementsByClassName("ebooks")
let softwares = document.getElementsByClassName("softwares")
let livechat = document.getElementsByClassName("live_chat")
let users = document.getElementsByClassName("users")
let rules = document.getElementsByClassName("rules")
let user = document.getElementsByClassName("user")

function getquestions(){
    alert("Questions")
}
function getpapers(){
    alert("Papers")
}
function getebooks(){
    alert("ebooks")
}
function getsoftwares(){
    alert("softwares")
}
function getlivechat(){
    alert("Live chat")
}
function getusers(){
    alert("users")
}
function getrules(){
    alert("rules")
}
function getuser(){
    alert("user")
}

questions[0].setAttribute('onclick', 'getquestions()')
papers[0].setAttribute('onclick', 'getpapers()')
ebooks[0].setAttribute('onclick', 'getebooks()')
softwares[0].setAttribute('onclick', 'getsoftwares()')
livechat[0].setAttribute('onclick', 'getlivechat()')
users[0].setAttribute('onclick', 'getusers()')
rules[0].setAttribute('onclick', 'getrules()')
user[0].setAttribute('onclick', 'getuser()')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    console.log(scrolled)
})