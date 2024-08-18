let navBar = document.querySelector('.navbar')
let menuBtn = document.querySelector('.menu-btn')

menuBtn.onclick = function(){
    navBar.classList.toggle('active')
    searchForm.classList.remove('active')
}