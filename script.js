// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
// Sticky nav (for mobile scrolling)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
// Dynamic year in footer
const yearSpan = document.getElementById('year');
if(yearSpan) yearSpan.textContent = new Date().getFullYear();
// Resume download button (About/Home and Resume section)
document.querySelectorAll('.main-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    if(this.getAttribute('href').endsWith('.pdf')) {
      // Download resume
      // Let browser handle download
    } else {
      // Scroll to resume section
      e.preventDefault();
      document.getElementById('resume').scrollIntoView({behavior:'smooth'});
    }
  });
});

// --- Animation: Scroll-triggered entrance ---
function animateOnScroll() {
  const animatedEls = document.querySelectorAll('.animated-fadein, .project-card, .skill');
  const triggerBottom = window.innerHeight * 0.92;
  animatedEls.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// --- Button ripple effect ---
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});
