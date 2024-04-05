const header= document.querySelector('.header-container')


const closeMenu= document.querySelector('.close-icon')

const mainContent=document.querySelector('.main-content') 

closeHamburger= document.querySelector('.close-icon')

const hamburgerMenu = document.querySelector('.hamburger-menu')

const goToTop= document.querySelector('.go-to-top')

const nav= document.querySelector('.nav-items')


hamburgerMenu.addEventListener('click', (e)=>{
    e.stopPropagation()
    header.classList.add('menu-open')
})

closeMenu.addEventListener('click', ()=>{
    header.classList.remove('menu-open')

})

nav.addEventListener('click', (e)=>{
    e.stopPropagation()
})

window.addEventListener('click', ()=>{
    header.classList.remove('menu-open')
})

goToTop.addEventListener
('click', ()=>{
    mainContent.scrollTo(0,0)
})




