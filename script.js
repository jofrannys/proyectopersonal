/*NAVBAR */


let navBar = document.querySelector('.navbar-list');
let abrir = document.querySelector('.responsive');
let cerrar = document.querySelector('.cerrar');
let menu = document.querySelector(".navbar-list");

abrir.addEventListener('click',()=> {
    navBar.classList.add("navbar-responsive");
    abrir.classList.add("ocultar");
    cerrar.classList.add("cerrarActivo");
    console.log(navBar)
}
);

cerrar.addEventListener('click',()=> {
    navBar.classList.remove("navbar-responsive");

    cerrar.classList.remove("cerrarActivo");
    abrir.classList.remove("ocultar");
    console.log(navBar)
}
);
menu.addEventListener('click',()=> {
    navBar.classList.remove("navbar-responsive");
    cerrar.classList.remove("cerrarActivo");
    abrir.classList.remove("ocultar");
    
}
);

/*BANNER */

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const sliders = document.querySelector("#sliders");
const sliderSection = document.querySelectorAll(".contenido-banner");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

let operacion = 0;
counter = 0;
widthImg = 100 / sliderSection.length;

/*setInterval(()=>{
  moveToRight();
},3000);*/



function moveToRight(){
  if(counter >= sliderSection.length-1){
    counter = 0;
    operacion = 0;
    sliders.style.transform = `translate(-${operacion}%)`;
    sliders.style.transition = "none";
    return;
  }
  counter++;
  operacion = operacion + widthImg;
  sliders.style.transform = `translate(-${operacion}%)`;
  sliders.style.transition = "all ease .6s"
  
}
function moveToLeft(){
  counter--;
  if(counter < 0){
    counter = sliderSection.length-1;
    operacion = widthImg * (sliderSection.length-1)
    sliders.style.transform = `translate(-${operacion}%)`;
    sliders.style.transition = "none";
    return;
  }
    operacion = operacion - widthImg
    sliders.style.transform = `translate(-${operacion}%)`;
    sliders.style.transition = "all ease .6s"
  
  
}