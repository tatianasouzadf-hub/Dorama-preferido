let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let list = document.querySelector('.list')
let items = list.querySelectorAll('.item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let numberEl = indicator.querySelector('.nunber')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function updateActive(newIndex) {
    items[active].classList.remove('active')
    if (dots[active]) dots[active].classList.remove('active')

    active = newIndex
    if (active > lastPosition) active = firstPosition
    if (active < firstPosition) active = lastPosition

    items[active].classList.add('active')
    if (dots[active]) dots[active].classList.add('active')

    if (numberEl) {
        numberEl.textContent = String(active + 1).padStart(2, '0')
    }
}

nextButton.onclick = () => {
    updateActive(active + 1)
}

prevButton.onclick = () => {
    updateActive(active - 1)
}

dots.forEach((dot, index) => {
    dot.onclick = () => {
        updateActive(index)
    }
})
