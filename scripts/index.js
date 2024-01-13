function abrirmenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function mudartamanho() {
    if (window.innerWidth >= 789) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}