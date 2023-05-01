// Get elements from the page
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
const profilePic = document.querySelector('.profile-container img');
const aboutTitle = document.querySelector('.about-title');
const aboutSubtitle = document.querySelector('.about-subtitle');
const aboutDescription = document.querySelectorAll('.about-description');

// Add event listeners to navbar links
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close navbar menu on mobile devices
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }

    // Smooth scroll to target section
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animation to hero section
setTimeout(() => {
  heroTitle.classList.add('animate__fadeInDown');
  heroSubtitle.classList.add('animate__fadeInUp');
}, 500);

// Add animation to profile picture
setTimeout(() => {
  profilePic.classList.add('animate__zoomIn');
}, 1000);

// Add animation to about section
setTimeout(() => {
  aboutTitle.classList.add('animate__fadeInDown');
  aboutSubtitle.classList.add('animate__fadeInUp');
  aboutDescription.forEach(desc => {
    desc.classList.add('animate__fadeIn');
  });
}, 1500);
