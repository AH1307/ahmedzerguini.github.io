// Initialisation de ScrollReveal
ScrollReveal({
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false
});

// Animation des sections
ScrollReveal().reveal('.section-title', { origin: 'top' });
ScrollReveal().reveal('.about-content p', { delay: 300 });
ScrollReveal().reveal('.project-card', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.skill-box', { interval: 150, origin: 'bottom' });
ScrollReveal().reveal('.contact-text, .contact-info', { delay: 300 });

// Effet de scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});