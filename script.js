// =============================================
//   SCOTT'S BARBERS — script.js
// =============================================

// --- Booking Modal (global functions for onclick attributes) ---
window.openBookingModal = function() {
  document.getElementById('bookingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeBookingModal = function() {
  document.getElementById('bookingModal').classList.remove('open');
  document.body.style.overflow = '';
};
window.closeBookingModalOutside = function(e) {
  if (e.target === document.getElementById('bookingModal')) window.closeBookingModal();
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeBookingModal();
});

// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// --- Mobile hamburger ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Hero slide rotation ---
const slides = document.querySelectorAll('.hero-slide');
let current = 0;
if (slides.length > 1) {
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 7000);
}

// --- Scroll-reveal ---
const fadeEls = document.querySelectorAll('.service-card, .review-card, .gallery-item, .cd-item');
fadeEls.forEach(el => el.classList.add('fade-in-up'));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => revealObserver.observe(el));

// --- Floating CTA ---
const floatingCta = document.getElementById('floatingCta');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) floatingCta.classList.add('visible');
  else floatingCta.classList.remove('visible');
});

// --- Booking form submit ---
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');
const dateInput = document.getElementById('date');
if (dateInput) {
  dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
}
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = bookingForm.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    bookingForm.style.display = 'none';
    bookingSuccess.style.display = 'block';
  }, 1200);
});

// --- Smooth scroll ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// --- Active nav highlight ---
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const offset = section.offsetTop - 100;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY >= offset && scrollY < offset + section.offsetHeight) ? 'var(--gold)' : '';
    }
  });
});
