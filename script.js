// Nav shrink on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
});
navUl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navUl.classList.remove('open'));
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.work-panel-image, .service-card, .contact-text, .contact-form'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
