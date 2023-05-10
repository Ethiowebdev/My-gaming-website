const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})






























var on = true;
var myVar = setInterval(function(){ if(on) {slides()}on=true;},3000);

function slides(i) {
  document.getElementsByTagName("div")[1].style.width="0px";
  document.getElementsByTagName("div")[2].style.width="100%";
  var slide = document.getElementsByTagName("div")[0];
  document.getElementById("slide").appendChild(slide);
  if(i) {
   on = false; 
  }
}
function back_slide(i) {
  document.getElementsByTagName("div")[1].style.width="0px";
  document.getElementsByTagName("div")[0].style.width="100%";
  var slide = document.getElementsByTagName("div")[4];
  var slide2 = document.getElementsByTagName("div")[0];
  document.getElementById("slide").insertBefore(slide,slide2);
  if(i) {
   on = false; 
  }
}













