const $ = x => document.querySelector(x)

let dropdowns = $('.dropdowns')
let arrows = $('.arrows')
dropdowns.addEventListener('mouseover', () => {
    arrows.classList.remove('fa-arrow-down')
    arrows.classList.add('fa-arrow-up')
})
dropdowns.addEventListener('mouseleave', () => {
    arrows.classList.add('fa-arrow-down')
    arrows.classList.remove('fa-arrow-up')
})