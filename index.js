//SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

//LINKS COLORED ON NAVBAR

const home = document.getElementById("home1");
const menu = document.getElementById("menu1");
const about = document.getElementById("about1");
const contact = document.getElementById("contact1");


function colorLink() {
  // console.log(window.scrollY);
if(window.scrollY >= 0 && window.scrollY <= 513){
  home.style.color = "rgb(255, 199, 44)";
  home.style.borderBottom = "2px solid rgb(255, 199, 44)";
  menu.style.color = "white";
  menu.style.borderBottom = "0px";
  about.style.color = "white";
  about.style.borderBottom = "0px";
  contact.style.color = "white";
  contact.style.borderBottom = "0px";
}else if (window.scrollY > 513 && window.scrollY <= 2337) {
    home.style.color = "white";
    home.style.borderBottom = "0px";
    menu.style.color = "rgb(255, 199, 44)";
    menu.style.borderBottom = "2px solid rgb(255, 199, 44)";
    about.style.color = "white";
    about.style.borderBottom = "0px";
    contact.style.color = "white";
    contact.style.borderBottom = "0px";
  } else if(window.scrollY > 2337 && window.scrollY <= 3137) {
    home.style.color = "white";
    home.style.borderBottom = "0px";
    menu.style.color = "white";
    menu.style.borderBottom = "0px";
    about.style.color = "rgb(255, 199, 44)";
    about.style.borderBottom = "2px solid rgb(255, 199, 44)";
    contact.style.color = "white";
    contact.style.borderBottom = "0px";
  }else if(window.scrollY >3137){
    home.style.color = "white";
    home.style.borderBottom = "0px";
    menu.style.color = "white";
    menu.style.borderBottom = "0px";
    about.style.color = "white";
    about.style.borderBottom = "0px";
    contact.style.color = "rgb(255, 199, 44)";
    contact.style.borderBottom = "2px solid rgb(255, 199, 44)";
  }
}


window.addEventListener("scroll", colorLink);

//NAVBAR ANIMATION WHILE SCROLLING

const slideButton = document.getElementById("slidebutton");
const nLeft = document.getElementById("navbar-left");
const logo = document.getElementById("logo");
const nRight = document.getElementById("navbar-right");
let sticky = slideButton.offsetTop;

function stickyNavbar() {
  if (window.scrollY >= sticky) {
    nLeft.classList.add("sticky");
    logo.classList.add("sticky-logo");
    nRight.classList.add("sticky");
  } else {
    nLeft.classList.remove("sticky");
    logo.classList.remove("sticky-logo");
    nRight.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyNavbar);

//Clients carrousell

let cFace = document.getElementById("client-face");
let cName = document.getElementById("client-name");

function replay() {
  carrousell();
  window.setInterval(carrousell, 15000);
  window.setInterval(animation, 1500);
}

function animation() {
  cFace.classList.toggle("smooth");
}

function carrousell() {
  window.setTimeout(client2, 3000);
  window.setTimeout(client3, 6000);
  window.setTimeout(client4, 9000);
  window.setTimeout(client5, 12000);
  window.setTimeout(client1, 15000);
}
function client1() {
  cFace.src = "c1.png";
  cName.innerHTML = "Rodrigo Robles Ulloa";
}
function client2() {
  cFace.src = "c2.png";
  cName.innerHTML = "Johanna Pinto";
}
function client3() {
  cFace.src = "c3.png";
  cName.innerHTML = "Sebastian Quezada";
}
function client4() {
  cFace.src = "c4.png";
  cName.innerHTML = "Ignacio Guzman";
}
function client5() {
  cFace.src = "c5.png";
  cName.innerHTML = "Romina Faletto Aravena";
}

window.addEventListener("load", replay);


//Instagram Pictures Animation

let i1 = document.getElementById("instapic1");
let i2 = document.getElementById("instapic2");
let i3 = document.getElementById("instapic3");
let i4 = document.getElementById("instapic4");
let ic1 = document.getElementById("instagram-icon-circle1");
let ic2 = document.getElementById("instagram-icon-circle2");
let ic3 = document.getElementById("instagram-icon-circle3");
let ic4 = document.getElementById("instagram-icon-circle4");

function myOverFunction1() {
  i1.style.animationName = "scale";
  i1.style.animationDuration = "1s";
  i1.style.animationIterationCount = "1";
  i1.style.minHeight = "250px";
  i1.style.minWidth = "250px";
}

function myOverFunction2() {
  i2.style.animationName = "scale";
  i2.style.animationDuration = "1s";
  i2.style.animationIterationCount = "1";
  i2.style.minHeight = "250px";
  i2.style.minWidth = "250px";
}

function myOverFunction3() {
  i3.style.animationName = "scale";
  i3.style.animationDuration = "1s";
  i3.style.animationIterationCount = "1";
  i3.style.minHeight = "250px";
  i3.style.minWidth = "250px";
}

function myOverFunction4() {
  i4.style.animationName = "scale";
  i4.style.animationDuration = "1s";
  i4.style.animationIterationCount = "1";
  i4.style.minHeight = "250px";
  i4.style.minWidth = "250px";
}

function normal1(){
  i1.style.animationName = "";
}

function normal2(){
  i2.style.animationName = "";
}

function normal3(){
  i3.style.animationName = "";
}

function normal4(){
  i4.style.animationName = "";
}