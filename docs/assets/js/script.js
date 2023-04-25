document.querySelector('#projects-button').addEventListener('click', function() {
  document.querySelector('#projects-section').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('#connect-button').addEventListener('click', function() {
  document.querySelector('#footer-section').scrollIntoView({
    behavior: 'smooth'
  });
});

mybutton = document.getElementById("footer__button-up");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
