//NAVIGATION

const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('nav ul li a');

// Function to handle smooth scrolling
const scrollToSection = (targetSection) => {
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth' // Add smooth scrolling behavior
  });
};

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= (sectionTop - 400)) {
      current = section.getAttribute('id');
    }
  });

  navA.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});

// Event listener for clicking on navigation links
navA.forEach(a => {
  a.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetSectionId = a.getAttribute('href').substring(1); // Extract section ID from href
    const targetSection = document.getElementById(targetSectionId); // Get target section element
    scrollToSection(targetSection); // Scroll to target section
  });
});
