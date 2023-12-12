//NAV BURGER MENU
var hamburger = document.querySelector(".MenuHamburger");
var TopNav__MenuLinks = document.querySelector(".TopNav__MenuLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  TopNav__MenuLinks.classList.toggle("active");
})

document.querySelectorAll(".TopNav__LinkContainer").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  TopNav__MenuLinks.classList.remove("active");
}))


//NAV BUTTONS
document.querySelector('#NavButton-Work').addEventListener('click', function() {
  document.querySelector('.ProjectsSection').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('#NavButton-About').addEventListener('click', function() {
  document.querySelector('.AboutSection').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('#NavButton-Connect').addEventListener('click', function() {
  document.querySelector('.ConnectSection').scrollIntoView({
    behavior: 'smooth'
  });
});


//DARK-LIGHT MODE SWITCH
var buttonTop = document.querySelector(".TopNav__Logo");
var buttonBottom = document.querySelector(".Footer__Logo");
var aboutStiker = document.querySelector(".About__Stiker");

buttonTop.onclick = function(){
  document.body.classList.toggle("lightTheme");
  if(document.body.classList.contains("lightTheme")){
    buttonTop.src = "img/LogoLight.svg";
    buttonBottom.src = "img/LogoLight.svg";
    aboutStiker.style.filter = 'grayscale(100%) brightness(150%)';
  } else{
    buttonTop.src = "img/LogoDark.svg";
    buttonBottom.src = "img/LogoDark.svg";
    aboutStiker.style.filter = 'grayscale(100%) brightness(50%)';
  }
}

buttonBottom.onclick = function(){
  document.body.classList.toggle("lightTheme");
  if(document.body.classList.contains("lightTheme")){
    buttonTop.src = "img/LogoLight.svg";
    buttonBottom.src = "img/LogoLight.svg";
    aboutStiker.style.filter = 'grayscale(100%) brightness(150%)';
  } else{
    buttonTop.src = "img/LogoDark.svg";
    buttonBottom.src = "img/LogoDark.svg";
    aboutStiker.style.filter = 'grayscale(100%) brightness(50%)';
  }
}


//STICKERS HOVER
// Get the elements
  const user = document.querySelector('.Sticker-User');
  const smile = document.querySelector('.Sticker-Smile');
  const run = document.querySelector('.Sticker-Run');
  const ukraine = document.querySelector('.Sticker-Ukraine');
  const coin = document.querySelector('.Sticker-Coin');
  const buttons = document.querySelector('.Sticker-Buttons');
  const google = document.querySelector('.Sticker-Google');
  const exploring = document.querySelector('.Sticker-Exploring');
  const figma = document.querySelector('.Sticker-Figma');
  const club = document.querySelector('.Sticker-8PX');
  const details = document.querySelector('.Sticker-Details');
  const kosher = document.querySelector('.Sticker-Kosher');
  const layout = document.querySelector('.Sticker-Layout');
  const vibes = document.querySelector('.Sticker-Vibes');
  const framer = document.querySelector('.Sticker-Framer');
  const pixel = document.querySelector('.Sticker-Pixel');
  const CSS = document.querySelector('.Sticker-CSS');
  const HTML = document.querySelector('.Sticker-HTML');
  const component = document.querySelector('.Sticker-Component');
  const idea = document.querySelector('.Sticker-Idea');

  const triggerIntro = document.querySelector('.About__Intro');
  const triggerPersonal = document.querySelector('.About__Personal');
  const triggerExperience = document.querySelector('.About__Experience');
  const triggerJob = document.querySelector('.About__Job');

  // Intro
  triggerIntro.addEventListener('mouseover', () => {
    user.style.filter = 'none';
    vibes.style.filter = 'none';
    smile.style.filter = 'none';
    club.style.filter = 'none';
    idea.style.filter = 'none';
    ukraine.style.filter = 'none';
  });

  triggerIntro.addEventListener('mouseout', () => {
    user.style.filter = 'grayscale(100%)';
    vibes.style.filter = 'grayscale(100%)';
    smile.style.filter = 'grayscale(100%)';
    club.style.filter = 'grayscale(100%)';
    idea.style.filter = 'grayscale(100%)';
    ukraine.style.filter = 'grayscale(100%)';
  });

// Personal
  triggerPersonal.addEventListener('mouseover', () => { 
    vibes.style.filter = 'none';
    run.style.filter = 'none';
    smile.style.filter = 'none';
    exploring.style.filter = 'none';
    ukraine.style.filter = 'none';
    kosher.style.filter = 'none';
    coin.style.filter = 'none';
  });

  triggerPersonal.addEventListener('mouseout', () => {
    vibes.style.filter = 'grayscale(100%)';
    run.style.filter = 'grayscale(100%)';
    smile.style.filter = 'grayscale(100%)';
    exploring.style.filter = 'grayscale(100%)';
    ukraine.style.filter = 'grayscale(100%)';
    kosher.style.filter = 'grayscale(100%)';
    coin.style.filter = 'grayscale(100%)';
  });

// Experience
  triggerExperience.addEventListener('mouseover', () => {
    google.style.filter = 'none';
    figma.style.filter = 'none';
    layout.style.filter = 'none';
    component.style.filter = 'none';
    HTML.style.filter = 'none';
    CSS.style.filter = 'none';
  });

  triggerExperience.addEventListener('mouseout', () => {
    google.style.filter = 'grayscale(100%)';
    figma.style.filter = 'grayscale(100%)';
    layout.style.filter = 'grayscale(100%)';
    component.style.filter = 'grayscale(100%)';
    HTML.style.filter = 'grayscale(100%)';
    CSS.style.filter = 'grayscale(100%)';
  });

// Job
  triggerJob.addEventListener('mouseover', () => {
    vibes.style.filter = 'none';
    buttons.style.filter = 'none';
    exploring.style.filter = 'none';
    idea.style.filter = 'none';
    details.style.filter = 'none';
  });

  triggerJob.addEventListener('mouseout', () => {
    vibes.style.filter = 'grayscale(100%)';
    buttons.style.filter = 'grayscale(100%)';
    exploring.style.filter = 'grayscale(100%)';
    idea.style.filter = 'grayscale(100%)';
    details.style.filter = 'grayscale(100%)';
  });
  