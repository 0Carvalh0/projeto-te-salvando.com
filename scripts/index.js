function abrirmenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

function mudartamanho() {
    if (window.innerWidth >= 1400) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}