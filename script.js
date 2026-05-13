// =============================================
//   SCOTT'S BARBERS — script.js
// =============================================

// --- Mobile polish + moving review strip ---
const enhancementStyles = document.createElement('style');
enhancementStyles.textContent = `
  @media (max-width: 700px) {
    .hero {
      min-height: 760px;
      height: 100svh;
      align-items: center;
      background: #0d0d0d;
    }

    .hero-slide {
      background-size: contain;
      background-position: center top;
      background-repeat: no-repeat;
      animation: none;
    }

    .hero-overlay {
      background: linear-gradient(
        to bottom,
        rgba(0,0,0,0.18) 0%,
        rgba(0,0,0,0.28) 34%,
        rgba(0,0,0,0.82) 72%,
        rgba(13,13,13,0.98) 100%
      );
    }

    .hero-content {
      padding-top: 120px;
    }

    .hero-title {
      font-size: clamp(3.3rem, 18vw, 5.2rem);
    }
  }

  .reviews-section.is-replaced {
    display: none;
  }

  .review-ticker-section {
    background: #101010;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    overflow: hidden;
    padding: 54px 0 62px;
    scroll-margin-top: 88px;
  }

  .review-ticker-head {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 26px;
    text-align: center;
  }

  .review-ticker-head h2 {
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.85rem, 4vw, 2.75rem);
    line-height: 1.1;
    margin-top: 10px;
  }

  .review-ticker-head span {
    color: var(--gold);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .review-ticker-window {
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    -webkit-mask-image: linear-gradient(to right, transparent, #000 9%, #000 91%, transparent);
    mask-image: linear-gradient(to right, transparent, #000 9%, #000 91%, transparent);
  }

  .review-ticker-track {
    display: flex;
    gap: 18px;
    width: max-content;
    animation: reviewTicker 34s linear infinite;
    will-change: transform;
  }

  .review-ticker-window.is-paused .review-ticker-track,
  .review-ticker-window:hover .review-ticker-track {
    animation-play-state: paused;
  }

  .ticker-review-card {
    width: min(82vw, 360px);
    min-height: 178px;
    flex: 0 0 auto;
    background: #1c1c1c;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 22px;
    box-shadow: 0 12px 34px rgba(0,0,0,0.28);
  }

  .ticker-review-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    margin-bottom: 14px;
  }

  .ticker-review-name {
    color: #fff;
    font-weight: 700;
  }

  .ticker-review-stars {
    color: var(--gold);
    letter-spacing: 2px;
    white-space: nowrap;
  }

  .ticker-review-card p {
    color: rgba(255,255,255,0.72);
    font-size: 0.92rem;
    font-style: italic;
    line-height: 1.65;
  }

  @keyframes reviewTicker {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-50% - 9px)); }
  }

  @media (max-width: 700px) {
    .review-ticker-section {
      padding: 44px 0 52px;
    }

    .review-ticker-track {
      animation-duration: 28s;
    }
  }
`;
document.head.appendChild(enhancementStyles);

function createMovingReviewStrip() {
  const ratingBanner = document.querySelector('.rating-banner');
  if (!ratingBanner || document.querySelector('.review-ticker-section')) return;

  const oldReviewsSection = document.querySelector('.reviews-section');
  if (oldReviewsSection) {
    oldReviewsSection.classList.add('is-replaced');
    oldReviewsSection.removeAttribute('id');
    oldReviewsSection.setAttribute('aria-hidden', 'true');
  }

  const reviews = [
    { name: 'Vladyslav Mazun', text: 'I always get my hair cut only here. A haircut at Roxy is already +100 to confidence. My best recommendations.' },
    { name: 'Maria Clohessy', text: 'Excellent barbers. Kids get fantastic haircuts and they are always so happy coming out. Very friendly business.' },
    { name: 'Charley Rutledge', text: 'I have always had a good clean haircut here. You can tell she is genuinely passionate about her work.' },
    { name: 'Howard', text: 'Staff were really friendly and professional. Great haircut and open on a Sunday. Happy days.' },
    { name: 'Jason Energycentre', text: 'First time using Scott\'s Barbers, very impressed. Will definitely be coming here in the future.' },
    { name: 'Sunday Visitor', text: 'Got a fresh cut, they knew what they were doing and took time to finish with their craft.' }
  ];

  const section = document.createElement('section');
  section.className = 'review-ticker-section';
  section.id = 'reviews';
  section.setAttribute('aria-label', 'Google customer reviews');

  const cards = [...reviews, ...reviews].map(review => `
    <article class="ticker-review-card">
      <div class="ticker-review-top">
        <div class="ticker-review-name">${review.name}</div>
        <div class="ticker-review-stars" aria-label="5 star review">★★★★★</div>
      </div>
      <p>"${review.text}"</p>
    </article>
  `).join('');

  section.innerHTML = `
    <div class="review-ticker-head">
      <span>Google Reviews</span>
      <h2>Trusted by Limerick locals</h2>
    </div>
    <div class="review-ticker-window" role="button" tabindex="0" aria-label="Tap to pause or resume review slider">
      <div class="review-ticker-track">${cards}</div>
    </div>
  `;

  ratingBanner.insertAdjacentElement('afterend', section);

  const tickerWindow = section.querySelector('.review-ticker-window');
  const toggleTicker = () => tickerWindow.classList.toggle('is-paused');
  tickerWindow.addEventListener('click', toggleTicker);
  tickerWindow.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTicker();
    }
  });
}

createMovingReviewStrip();

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
const fadeEls = document.querySelectorAll('.service-card, .review-card, .gallery-item, .cd-item, .ticker-review-card');
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
