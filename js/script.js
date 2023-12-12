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
    user.style.opacity = '100%';
    vibes.style.filter = 'none';
    vibes.style.opacity = '100%';
    smile.style.filter = 'none';
    smile.style.opacity = '100%';
    club.style.filter = 'none';
    club.style.opacity = '100%';
    idea.style.filter = 'none';
    idea.style.opacity = '100%';
    ukraine.style.filter = 'none';
    ukraine.style.opacity = '100%';
  });

  triggerIntro.addEventListener('mouseout', () => {
    user.style.filter = 'grayscale(100%)';
    user.style.opacity = '70%';
    vibes.style.filter = 'grayscale(100%)';
    vibes.style.opacity = '70%';
    smile.style.filter = 'grayscale(100%)';
    smile.style.opacity = '70%';
    club.style.filter = 'grayscale(100%)';
    club.style.opacity = '70%';
    idea.style.filter = 'grayscale(100%)';
    idea.style.opacity = '70%';
    ukraine.style.filter = 'grayscale(100%)';
    ukraine.style.opacity = '70%';
  });

// Personal
  triggerPersonal.addEventListener('mouseover', () => { 
    vibes.style.filter = 'none';
    vibes.style.opacity = '100%';
    run.style.filter = 'none';
    run.style.opacity = '100%';
    smile.style.filter = 'none';
    smile.style.opacity = '100%';
    exploring.style.filter = 'none';
    exploring.style.opacity = '100%';
    ukraine.style.filter = 'none';
    ukraine.style.opacity = '100%';
    kosher.style.filter = 'none';
    kosher.style.opacity = '100%';
    coin.style.filter = 'none';
    coin.style.opacity = '100%';
  });

  triggerPersonal.addEventListener('mouseout', () => {
    vibes.style.filter = 'grayscale(100%)';
    vibes.style.opacity = '70%';
    run.style.filter = 'grayscale(100%)';
    run.style.opacity = '70%';
    smile.style.filter = 'grayscale(100%)';
    smile.style.opacity = '70%';
    exploring.style.filter = 'grayscale(100%)';
    exploring.style.opacity = '70%';
    ukraine.style.filter = 'grayscale(100%)';
    ukraine.style.opacity = '70%';
    kosher.style.filter = 'grayscale(100%)';
    kosher.style.opacity = '70%';
    coin.style.filter = 'grayscale(100%)';
    coin.style.opacity = '70%';
  });

// Experience
  triggerExperience.addEventListener('mouseover', () => {
    google.style.filter = 'none';
    google.style.opacity = '100%';
    figma.style.filter = 'none';
    figma.style.opacity = '100%';
    layout.style.filter = 'none';
    layout.style.opacity = '100%';
    component.style.filter = 'none';
    component.style.opacity = '100%';
    HTML.style.filter = 'none';
    HTML.style.opacity = '100%';
    CSS.style.filter = 'none';
    CSS.style.opacity = '100%';
  });

  triggerExperience.addEventListener('mouseout', () => {
    google.style.filter = 'grayscale(100%)';
    google.style.opacity = '70%';
    figma.style.filter = 'grayscale(100%)';
    figma.style.opacity = '70%';
    layout.style.filter = 'grayscale(100%)';
    layout.style.opacity = '70%';
    component.style.filter = 'grayscale(100%)';
    component.style.opacity = '70%';
    HTML.style.filter = 'grayscale(100%)';
    HTML.style.opacity = '70%';
    CSS.style.filter = 'grayscale(100%)';
    CSS.style.opacity = '70%';
  });

// Job
  triggerJob.addEventListener('mouseover', () => {
    vibes.style.filter = 'none';
    vibes.style.opacity = '100%';
    buttons.style.filter = 'none';
    buttons.style.opacity = '100%';
    exploring.style.filter = 'none';
    exploring.style.opacity = '100%';
    idea.style.filter = 'none';
    idea.style.opacity = '100%';
    details.style.filter = 'none';
    details.style.opacity = '100%';
  });

  triggerJob.addEventListener('mouseout', () => {
    vibes.style.filter = 'grayscale(100%)';
    vibes.style.opacity = '70%';
    buttons.style.filter = 'grayscale(100%)';
    buttons.style.opacity = '70%';
    exploring.style.filter = 'grayscale(100%)';
    exploring.style.opacity = '70%';
    idea.style.filter = 'grayscale(100%)';
    idea.style.opacity = '70%';
    details.style.filter = 'grayscale(100%)';
    details.style.opacity = '70%';
  });
  
