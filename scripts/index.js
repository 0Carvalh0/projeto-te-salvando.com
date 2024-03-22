const btnMenu = document.getElementById("botaomenu");
const list = document.getElementById("menu");

function abrirmenu() {
  if (list.style.left <= "-500px") {
    list.style.left = "0px";
    btnMenu.classList.replace("fa-bars", "fa-xmark");
  } else {
    list.style.left = "-500px";
    btnMenu.classList.replace("fa-xmark", "fa-bars");
  }
}

function mudartamanho() {
  if (window.innerWidth < "1400px") {
    list.style.left = "-500px";
    btnMenu.classList.replace("fa-xmark", "fa-bars");
  }
}
