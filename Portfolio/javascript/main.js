// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Highlight active navigation link
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.top-list li a');
  const currentPage = window.location.pathname.split('/').pop();
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.parentElement.classList.add('active');
    }
  });
});

// Simple fade-in animation for sections on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);