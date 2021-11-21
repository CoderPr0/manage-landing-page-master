const testimonies = document.querySelector('.testimonies')
const leftScroll = document.querySelector('.left-scroll')
const rightScroll = document.querySelector('.right-scroll')

rightScroll.addEventListener('click', () =>{
    testimonies.scrollLeft += 81.25
})
leftScroll.addEventListener('click', () =>{
    testimonies.scrollLeft -= 81.25
})

window.addEventListener('scroll', function () {
    let nav = this.document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    
    nav.classList.toggle('scrolling-active', windowPosition);
})