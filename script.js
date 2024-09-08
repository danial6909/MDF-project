// scroll menu

let header = document.querySelector(".head");
let items = document.querySelectorAll(".link");
let controlMenu = document.getElementById("control-menu");


window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("fix");
    header.style.height = "100px";
    controlMenu.style.height = "100px"; 
    items.forEach(function (item) {
      item.style.color = "#fff";
    });
  } else {
    header.classList.remove("fix");
    header.style.height = "110px";
    controlMenu.style.height = "0"; 
    items.forEach(function (item) {
      item.style.color = "black";
    });
  }
});




////////////////////////////////////////////////////////////////////////////////////////////

// slider

let slider = document.querySelectorAll(".img-slider");
let dots = document.querySelectorAll(".circle-slider");
let left = document.getElementById("left");
let right = document.getElementById("right");

let index = 0;
slider[index].classList.add("active-image");

function show(index) {
  for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove("active-image");
    dots[i].classList.remove("dot");

    if (index == i) {
      slider[i].classList.add("active-image");
      dots[i].classList.add("dot");
    }
  }
}

function next() {
  index++;
  if (index > slider.length - 1) {
    index = 0;
  }
  show(index);
}

function prev() {
    index--;
    if (index < 0) {
        index = slider.length - 1;
    }
    show(index);
}

right.addEventListener("click", next);
left.addEventListener("click", prev);

function dotchange(index) {
  show(index);
}

setInterval(next, 4000);

////////////////////////////////////////////////////////////////////////////////////////////

// scroll top

let scrollbar = document.querySelector(".scrollbar");

window.addEventListener("scroll", function() {

    let scrolltop = window.scrollY // navar scroll rast
    
    let kol = document.body.clientHeight // kol safe ba inspect

    let body = window.innerHeight // safhe bedone inspect 

    let scrollpersent = scrolltop / (kol - body)

    let persent = Math.round(scrollpersent * 100)

    scrollbar.style.width = persent + "%"
})

//////////////////////////////////////////////////////////////////////////////




