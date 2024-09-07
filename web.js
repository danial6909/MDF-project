// in yek test git hast
// test dovom be icon charkhesh

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var header = document.querySelector(".head");
  var boxes = document.querySelectorAll(".box");

  if (scrollPosition > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  boxes.forEach(function (box) {
    if (scrollPosition > 0) {
      box.classList.add("scrolled");
    } else {
      box.classList.remove("scrolled");
    }
  });
});

let menu = document.querySelector(".head-center");
let menu_btn = document.querySelector(".icon");
let menu_btn_icon = document.querySelector(".icon i");

let flagg = true;

function handelMenu() {
  if (flagg) {
    menu.style.top = "0";
    menu_btn_icon.classList = "fa fa-times";
    flagg = false;
  } else {
    menu.style.top = "-500px";
    menu_btn_icon.classList = "fa fa-bars";
    flagg = true;
  }
}

menu_btn.addEventListener("click", handelMenu);

document.body.addEventListener("click", function (event) {
  // اگر کلیک روی دکمه منو انجام نشده باشد
  if (!menu.contains(event.target) && !menu_btn.contains(event.target)) {
    if (!flagg) {
      menu.style.top = "-500px";
      menu_btn_icon.classList = "fa fa-bars";
      flagg = true;
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

let cir = document.querySelector(".circle");
let cir2 = document.querySelector(".protect_circle");
let image = document.querySelector("#setting-image");
let setting = document.getElementById("setting");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");

let flag = true;
let currentItem = 1; // اضافه کردن این خط برای نگهداری وضعیت فعلی

function op() {
  if (flag) {
    cir.style.opacity = "1";
    cir2.style.opacity = "1";
    cir.style.transform = "scale(1)";
    cir2.style.transform = "scale(1)";
    image.setAttribute("src", "images/X.png");
    flag = false;

    // bazyabi vaziat ghabli
    let rotateDegree = (currentItem - 1) * 90;
    cir2.style.transform = "rotate(" + rotateDegree + "deg)";

  } else {
    cir.style.opacity = "0";
    cir2.style.opacity = "0";
    cir.style.transform = "scale(0)";
    cir2.style.transform = "scale(0)";
    image.setAttribute("src", "images/settings.gif");
    flag = true;
  }
}

document.body.addEventListener("click", function (event) {
  if (// agar roye in item ha click nashod 
    !image.contains(event.target) &&
    !setting.contains(event.target) &&
    !item1.contains(event.target) &&
    !item2.contains(event.target) &&
    !item3.contains(event.target) &&
    !item4.contains(event.target)
  ) {
    if (!flag) {
      cir.style.transform = "scale(0)";
      cir2.style.transform = "scale(0)";
      image.setAttribute("src", "images/settings.gif");
      flag = true;
    }
  }
});


let items = document.querySelectorAll('.item1, .item2, .item3, .item4'); 

items.forEach(function(item, index) {
  
  item.addEventListener("click", function() {
 
    var rotateDegree = index * 90;

    cir2.style.transform = "rotate(" + rotateDegree + "deg)";
    
    // zakhire kardan vaziat feli
    currentItem = index + 1; // +1 chon az 0 shoro mishe 
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // اضافه کردن event listener به آیتم مورد نظر (item1)
  document.getElementById("item1").addEventListener("click", function () {
    // تغییر به حالت light mode
    document.body.classList.remove("dark-mode");
  });

  // اضافه کردن event listener به آیتم مورد نظر (item2)
  document.getElementById("item2").addEventListener("click", function () {
    // تغییر به حالت dark mode
    document.body.classList.add("dark-mode");
  });
});
// *******************************************************************************************************


// function dark(){
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }


///////////////////////////////////////////////////////////////////////

// loder

let loder = document.querySelector("#page");
window.addEventListener("load", function () {
  loder.style.display = "none";
});

/////////////////////////////////////////////////////////////////////////////////

let all = document.getElementById("all");

let project = document.getElementById("project");

let forms = document.getElementById("forms");

let practis = document.getElementById("practis");

let input = document.getElementById("input-port");

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");
let image6 = document.getElementById("image6");

forms.addEventListener("click", function () {
  image1.style.display = "flex";
  image2.style.display = "flex";
  image3.style.display = "flex";
  image4.style.display = "flex";
  image5.style.display = "none";
  image6.style.display = "none";
});

all.addEventListener("click", function () {
  image1.style.display = "flex";
  image2.style.display = "flex";
  image3.style.display = "flex";
  image4.style.display = "flex";
  image5.style.display = "flex";
  image6.style.display = "flex";
});

project.addEventListener("click", function () {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "flex";
});

practis.addEventListener("click", function () {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "flex";
  image6.style.display = "none";
});

input.addEventListener("click", function () {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "none";
});




////////////////////////////////////////////////////////////////////////////////////////


let my_image = document.getElementById("my-image");

my_image.addEventListener("touchstart", function () {
  my_image.style.transform = "scale(1.1) rotate(4deg)";
});

let about_right = document.querySelector(".about-right");

about_right.addEventListener("touchstart", function () {
  about_right.style.boxShadow = "1px 1px 30px rgb(255, 255, 255)";
});

let cardd = document.querySelector(".card");

cardd.addEventListener("touchstart", function () {
  cardd.style.transform = "scale(1.05)";
  cardd.style.boxShadow = "0px 0px 13px 0px #fff";
})


////////////////////////////////////////////////////////

// slider

var slider_images = document.querySelectorAll(".slide-image");
let circle_slider = document.querySelectorAll(".circle-slider");
var currentIndex = 0;

circle_slider[0].classList.add("dot");// pishfarz

function showSlide(index) {
  for (var i = 0; i < slider_images.length; i++) {
    slider_images[i].classList.remove('active');
    circle_slider[i].classList.remove('dot')
    if (i === index) {
      slider_images[i].classList.add('active');
      circle_slider[i].classList.add('dot')
    }
  }
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slider_images.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider_images.length - 1;
  }
  showSlide(currentIndex);
}

var rightButton = document.getElementById("right");
var leftButton = document.getElementById("left");

rightButton.addEventListener("click", function() {
  nextSlide();
});

leftButton.addEventListener("click", function() {
  prevSlide();
});

function dotchange(index){
   showSlide(index)
}

setInterval(nextSlide, 6000);

/////////////////////////////////////////////////////////////////////////////////////////////////////


// scroll bar top
// scroll btn

let scrollbar = document.querySelector(".scrollbar");

let persent

window.addEventListener("scroll", function() {

    let scrolltop = window.scrollY // navar scroll rast
    
    
    let kol = document.body.clientHeight // kol safe ba inspect

    
    let body = window.innerHeight // safhe bedone inspect 

    let scrollpersent = scrolltop / (kol - body)

    persent = Math.round(scrollpersent * 100)

    scrollbar.style.width = persent + "%"
})


let scrollbtn = document.querySelector(".scrollbtn")

window.addEventListener("scroll",function(){
  if( persent > 75){
    scrollbtn.style.display = "block"
  }
  else{
    scrollbtn.style.display = "none"
  }
})

scrollbtn.addEventListener("click",function(){
    window.scrollTo(0,0);
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







