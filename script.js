const shared = {
  name: "Scott's Barbers",
  phone: "+353 85 224 0444",
  phoneHref: "tel:+353852240444",
  address: "Unit 2, Ashdown Centre, Courtbrack Ave, Courtbrack, Limerick, V94 90P0",
  maps: "https://maps.app.goo.gl/tKbK5or1xYr1maKD9",
  hours: "Mon-Sat 9:00am-7:00pm. Sunday closed.",
  rating: "4.6",
  logo: "assets/logo.png",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.371173469717!2d-8.649729699999998!3d52.6532698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b5de0404fcc31%3A0xeaeafc18dbd40633!2sScott's%20Barbers!5e0!3m2!1sen!2sie!4v1715000000000!5m2!1sen!2sie"
};

const reviews = [
  ["Vladyslav Mazun", "I always get my hair cut only here. A haircut at Scott's is already +100 to confidence. My best recommendations.", "12 reviews - 4 months ago"],
  ["Maria Clohessy", "Excellent barbers. Kids get fantastic haircuts and they are always so happy coming out. Very friendly business.", "5 reviews - 5 months ago"],
  ["Charley Rutledge", "I have always had a good clean haircut here. You can tell they are genuinely passionate about the work.", "Local Guide - 10 months ago"],
  ["Howard", "Staff were really friendly and professional. Great haircut and open when I needed it. Happy days.", "Local Guide"],
  ["Jason Energycentre", "First time using Scott's Barbers, very impressed. Will definitely be coming here in the future.", "1 review"],
  ["Sunday Visitor", "Got a fresh cut, they knew what they were doing and took time to finish with their craft.", "5 years ago"]
];

const gallery = [
  ["assets/shop-day.jpg", "Scott's Barbers exterior"],
  ["assets/shop-night.jpg", "Evening shop front"],
  ["assets/shop3.jpg", "Barbershop view"],
  ["assets/customer1.jpg", "Fresh client haircut"],
  ["assets/customer2.jpg", "Sharp client finish"]
];

const sites = {
  "1": {
    label: "Barberhood-style",
    title: "Premium Haircuts in Limerick",
    eyebrow: "Highly rated barbershop in Limerick",
    intro: "Professional barbers delivering sharp fades, classic cuts, beard trims, and a relaxed local shop experience.",
    primary: "Book Your Cut",
    secondary: "Call Now",
    facts: ["4.6 Google rating", "Experienced barbers", "Walk-ins welcome", "Courtbrack location"],
    trust: [
      ["4.6", "Google Rating", "Trusted by local customers."],
      ["260+", "Happy Visits", "Built around friendly, consistent service."],
      ["9-7", "Open Mon-Sat", "Easy to visit after work."],
      ["Local", "Limerick Shop", "Simple directions and walk-ins welcome."]
    ],
    servicesTitle: "Quality cuts at honest prices",
    servicesCopy: "A clean, modern service menu for everyday grooming.",
    services: [
      ["Gents Haircut", "Classic cuts, textured crops, and tidy finishes.", "From EUR 18"],
      ["Skin Fade", "Sharp fade work with clean edges and styling.", "From EUR 20"],
      ["Kids Cut", "Patient, friendly cuts for younger clients.", "From EUR 15"],
      ["Haircut & Beard", "Full cut plus beard shaping for a complete finish.", "From EUR 30"],
      ["Hot Towel Beard", "Beard care with hot towel comfort.", "From EUR 20"],
      ["Line Up", "Clean outlines and quick tidy-ups.", "From EUR 10"]
    ],
    why: [
      ["Experienced Barbers", "Skilled hands with care on every detail."],
      ["Relaxed Atmosphere", "A friendly shop where regulars feel at home."],
      ["Consistent Quality", "The same sharp standard every visit."],
      ["Central Local Reach", "Easy to find in Courtbrack, Limerick."],
      ["Walk-ins Welcome", "Drop in when your schedule opens up."],
      ["Fast Booking", "Call or send a quick request online."]
    ],
    reviewMode: "ticker"
  },
  "2": {
    label: "Box Turkish-style",
    title: "Authentic Barbering, Modern Finish",
    eyebrow: "Traditional barber care with a sharp modern edge",
    intro: "A heritage-inspired Scott's Barbers concept built around craft, hygiene, comfort, and a proper grooming experience.",
    primary: "Book Online Now",
    secondary: "Get Directions",
    facts: ["Traditional shave care", "Modern fades", "Clean tools", "Walk-ins always welcome"],
    storyTitle: "Our Story",
    story: "Scott's Barbers brings together trusted local barbering, careful technique, and a welcoming shop atmosphere. Every visit is built around quality, comfort, and making customers leave confident.",
    servicesTitle: "Turkish-inspired grooming menu",
    servicesCopy: "Haircuts, fades, beard care, hot towel work, and full grooming packages.",
    services: [
      ["Signature Haircut", "A precise cut shaped to your style and face shape.", "From EUR 18"],
      ["Skin Fade", "Smooth fade blending with a clean neckline.", "From EUR 20"],
      ["Hot Towel Shave", "Classic towel prep and close shave finish.", "From EUR 20"],
      ["Beard Shape", "Line-up, trim, and shaping for a balanced beard.", "From EUR 10"],
      ["Haircut & Beard", "Complete grooming package for a sharp look.", "From EUR 30"],
      ["Kids Cut", "Clean cuts for younger clients.", "From EUR 15"]
    ],
    branches: [
      ["Scott's Barbers", shared.address, shared.hours],
      ["Walk-in Barber", "A dedicated walk-in experience for quick visits.", "Available Monday to Saturday"]
    ],
    why: [
      ["Hygiene First", "Clean tools, tidy stations, and careful service."],
      ["Comfortable Visit", "A warm, welcoming atmosphere from start to finish."],
      ["Traditional Detail", "Hot towel style, beard care, and careful finishing."],
      ["Modern Trends", "Fresh fades, textured cuts, and current styles."],
      ["Customer Care", "Every client gets time and attention."],
      ["Easy Access", "Call, book, or get directions in one tap."]
    ],
    reviewMode: "grid"
  },
  "3": {
    label: "Men With Class-style",
    title: "Top-quality grooming in Limerick",
    eyebrow: "Simple, classy, and built for quick booking",
    intro: "A practical Scott's Barbers concept where prices, opening hours, services, reviews, and directions are easy to find fast.",
    primary: "Book an Appointment",
    secondary: "View Pricing",
    facts: ["Clear pricing", "Simple booking", "Google reviews", "Limerick location"],
    notice: "Price and service information can be updated quickly before showing the client.",
    servicesTitle: "Pricing",
    servicesCopy: "A straightforward list customers can scan on mobile.",
    prices: [
      ["Dry Haircut", "EUR 18"],
      ["Cut & Wash", "EUR 22"],
      ["Skin Fade", "EUR 20"],
      ["Kids Cut", "EUR 15"],
      ["Beard Trim", "EUR 10"],
      ["Shave Only", "EUR 12"],
      ["Line Up", "EUR 8"],
      ["Haircut & Beard", "EUR 30"]
    ],
    services: [
      ["Haircuts", "Classic and modern haircut services."],
      ["Shaves", "Clean shave and hot towel options."],
      ["Beard Trim", "Shape, tidy, and line-up."],
      ["Kids Cuts", "Friendly cuts for children."]
    ],
    why: [
      ["About Scott's", "A local Limerick barbershop focused on clean haircuts, friendly service, and a professional grooming experience."],
      ["Opening Hours", shared.hours],
      ["Contact", `${shared.phone} - ${shared.address}`]
    ],
    reviewMode: "grid"
  },
  "4": {
    label: "Nelson-style video",
    title: "We know your style better",
    eyebrow: "Est'd 2007",
    intro: "A cinematic barbershop concept with a stock video hero, editorial typography, premium service blocks, prices, reviews, and appointment flow.",
    primary: "Make an Appointment",
    secondary: "View Prices",
    secondaryHref: "#services",
    video: "https://cdn.coverr.co/videos/coverr-cutting-hair-in-the-barbershop-6113/1080p.mp4",
    facts: ["Premium cuts", "Hot towel shaves", "Courtbrack, Limerick", "Mon-Sat 9am-7pm"],
    trust: [
      ["Location", "Courtbrack, Limerick", "Unit 2, Ashdown Centre, Courtbrack Ave."],
      ["Phone", shared.phone, "Call the shop directly for quick availability."],
      ["Hours", "Mon-Sat 9am-7pm", "Walk-ins welcome during opening hours."],
      ["Rating", "4.6 Google", "Trusted by local clients."]
    ],
    storyTitle: "Service beyond expectation",
    story: "Scott's Barbers is built for men who appreciate quality, time, and a sharp finish. From straight styling to beard care, every visit is handled with calm attention and confident craft.",
    servicesTitle: "Our Prices",
    servicesCopy: "A focused menu covering the essentials of modern barbering.",
    prices: [
      ["Haircut", "EUR 18"],
      ["Shave", "EUR 12"],
      ["Haircut + Shave", "EUR 30"],
      ["Beard Trim", "EUR 10"]
    ],
    services: [
      ["Classic Haircut", "Sharp scissor work, clean clipper detail, and natural styling.", "From EUR 18"],
      ["Straight Shave", "A clean traditional shave with careful prep and finish.", "From EUR 12"],
      ["Haircut + Beard", "Complete grooming for a polished everyday look.", "From EUR 30"]
    ],
    why: [
      ["Sharp Detail", "Every neckline, blend, and beard edge is finished with care."],
      ["Premium Atmosphere", "A darker, cinematic layout designed to feel confident and refined."],
      ["Easy Booking", "Appointment CTA stays clear from hero to footer."]
    ],
    team: [
      ["Adam Groover", "Professional barber ready to shape your perfect style.", "assets/customer1.jpg"],
      ["David Hammer", "Expert stylist focused on clean, confident finishing.", "assets/shop3.jpg"],
      ["Jay Adams", "Experienced barber across cuts, fades, and wet shaving.", "assets/customer2.jpg"]
    ],
    reviewMode: "grid"
  }
};

const params = new URLSearchParams(window.location.search);
const requestedSite = params.get("site");
const activeSite = sites[requestedSite] ? requestedSite : (sites[window.SCOTTS_ACTIVE_SITE] ? window.SCOTTS_ACTIVE_SITE : "1");
const data = sites[activeSite];
document.body.dataset.site = activeSite;

function card(title, copy, extra = "") {
  return `<article class="card ${extra}"><h3>${title}</h3><p>${copy}</p></article>`;
}

function renderHeader() {
  return `
    <nav class="navbar">
      <div class="nav-inner">
        <a class="brand" href="#home">
          <img src="${shared.logo}" alt="${shared.name} logo" />
          <span class="brand-text">
            <span class="brand-name">${shared.name}</span>
            <span class="brand-sub">${data.label}</span>
          </span>
        </a>
        <ul class="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <a class="btn btn-ghost" href="${shared.phoneHref}">Call</a>
          <button class="btn btn-red" type="button" data-open-modal>Book</button>
        </div>
      </div>
    </nav>
  `;
}

function renderHero() {
  const video = data.video ? `
    <video class="hero-video" autoplay muted loop playsinline poster="assets/shop-day.jpg">
      <source src="${data.video}" type="video/mp4" />
    </video>
  ` : "";
  const secondaryHref = data.secondaryHref || (activeSite === "2" ? shared.maps : shared.phoneHref);
  const secondaryTarget = secondaryHref.startsWith("http") ? "_blank" : "_self";

  return `
    <section class="hero" id="home">
      ${video}
      <div class="hero-blur" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">${data.eyebrow}</span>
          <h1>${data.title}</h1>
          <p>${data.intro}</p>
          <div class="hero-ctas">
            <button class="btn btn-gold" type="button" data-open-modal>${data.primary}</button>
            <a class="btn ${activeSite === "2" || activeSite === "4" ? "btn-dark" : "btn-red"}" href="${secondaryHref}" target="${secondaryTarget}">${data.secondary}</a>
          </div>
        </div>
        <div class="hero-facts">
          ${data.facts.map(item => `<span class="fact">${item}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTrust() {
  if (!data.trust) return "";
  return `
    <section class="section alt">
      <div class="container trust-grid">
        ${data.trust.map(([metric, title, copy]) => `
          <article class="card">
            <div class="metric">${metric}</div>
            <h3>${title}</h3>
            <p>${copy}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderStory() {
  if (!data.story) return "";
  return `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">${data.storyTitle}</span>
          <h2>Built on care, tradition, and sharp detail</h2>
          <p>${data.story}</p>
        </div>
      </div>
    </section>
  `;
}

function renderNotice() {
  if (!data.notice) return "";
  return `
    <section class="booking-band">
      <div class="container">
        <div>
          <h2>Client review notice</h2>
          <p>${data.notice}</p>
        </div>
        <button class="btn btn-gold" type="button" data-open-modal>Book an Appointment</button>
      </div>
    </section>
  `;
}

function renderServices() {
  const priceTable = data.prices ? `
    <div class="card service-list">
      ${data.prices.map(([service, price]) => `<div class="price-row"><strong>${service}</strong><strong>${price}</strong></div>`).join("")}
    </div>
  ` : "";

  const serviceCards = data.services.map((service, index) => {
    const [title, copy, price] = service;
    return `
      <article class="card service-card ${index === 1 ? "featured" : ""}">
        <h3>${title}</h3>
        <p>${copy}</p>
        ${price ? `<div class="price">${price}</div>` : ""}
      </article>
    `;
  }).join("");

  return `
    <section class="section price-section" id="services">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">Services</span>
          <h2>${data.servicesTitle}</h2>
          <p>${data.servicesCopy}</p>
        </div>
        ${priceTable}
        <div class="services-grid" style="${priceTable ? "margin-top:18px" : ""}">${serviceCards}</div>
      </div>
    </section>
  `;
}

function renderBranches() {
  if (!data.branches) return "";
  return `
    <section class="section alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Find Us</span>
          <h2>Opening hours and walk-ins</h2>
        </div>
        <div class="branch-grid">
          ${data.branches.map(([title, address, hours]) => card(title, `${address}<br>${hours}`)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderWhy() {
  return `
    <section class="section alt">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">Why Choose Us</span>
          <h2>${activeSite === "3" ? "Everything customers need quickly" : "A better barbershop visit"}</h2>
        </div>
        <div class="why-grid">
          ${data.why.map(([title, copy]) => card(title, copy)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTeam() {
  if (!data.team) return "";
  return `
    <section class="section team-section">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">Meet The Team</span>
          <h2>Masters of the chair</h2>
          <p>A Nelson-inspired team section using the client's current image set as placeholders.</p>
        </div>
        <div class="team-grid">
          ${data.team.map(([name, role, image]) => `
            <article class="team-card">
              <img src="${image}" alt="${name}" loading="lazy" />
              <div>
                <h3>${name}</h3>
                <p>${role}</p>
                <a href="javascript:void(0)" data-open-modal>Read more</a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderGallery() {
  return `
    <section class="section" id="gallery">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Gallery</span>
          <h2>Using the existing client assets</h2>
          <p>Shop photos, exterior images, and client haircut images are reused across each concept.</p>
        </div>
        <div class="gallery-grid">
          ${gallery.map(([src, label]) => `<figure class="gallery-item"><img src="${src}" alt="${label}" loading="lazy" /><span>${label}</span></figure>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderReviews() {
  const reviewCards = reviews.map(([name, quote, meta]) => `
    <article class="card review-card">
      <div class="stars">★★★★★</div>
      <blockquote>"${quote}"</blockquote>
      <div class="reviewer">${name}</div>
      <div class="review-meta">${meta}</div>
    </article>
  `);
  const content = data.reviewMode === "ticker"
    ? `<div class="ticker-window" tabindex="0" role="button" aria-label="Tap to pause reviews"><div class="ticker-track">${[...reviewCards, ...reviewCards].join("")}</div></div>`
    : `<div class="review-grid">${reviewCards.slice(0, 6).join("")}</div>`;

  return `
    <section class="section alt" id="reviews">
      <div class="container">
        <div class="section-head center">
          <span class="eyebrow">Google Reviews</span>
          <h2>${shared.rating} rating from local customers</h2>
        </div>
        ${content}
      </div>
    </section>
  `;
}

function renderBookingBand() {
  return `
    <section class="booking-band">
      <div class="container">
        <div>
          <h2>Ready for a fresh cut?</h2>
          <p>Call now, send a booking request, or get directions to Scott's Barbers.</p>
        </div>
        <div class="hero-ctas">
          <a class="btn btn-dark" href="${shared.phoneHref}">${shared.phone}</a>
          <button class="btn btn-gold" type="button" data-open-modal>Book Appointment</button>
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="section" id="contact">
      <div class="container contact-grid">
        <div class="card">
          <span class="eyebrow">Contact</span>
          <h2 style="margin-top:14px">Visit ${shared.name}</h2>
          <div class="contact-list">
            <div class="contact-item"><strong>Address</strong><span>${shared.address}</span></div>
            <div class="contact-item"><strong>Phone</strong><a href="${shared.phoneHref}">${shared.phone}</a></div>
            <div class="contact-item"><strong>Opening Hours</strong><span>${shared.hours}</span></div>
          </div>
          <div class="hero-ctas">
            <a class="btn btn-red" href="${shared.phoneHref}">Call Now</a>
            <a class="btn btn-ghost" href="${shared.maps}" target="_blank" rel="noopener">Get Directions</a>
          </div>
        </div>
        <iframe class="map-frame" src="${shared.mapEmbed}" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" title="Scott's Barbers location"></iframe>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-brand">
          <img src="${shared.logo}" alt="${shared.name} logo" />
          <span>${shared.name}</span>
        </div>
        <p>Concept ${activeSite}: ${data.label}. © 2026 Scott's Barbers.</p>
      </div>
    </footer>
    <div class="floating-actions" aria-label="Quick actions">
      <a class="float-btn call" href="${shared.phoneHref}" aria-label="Call Scott's Barbers">Call</a>
      <button class="float-btn book" type="button" data-open-modal aria-label="Book Scott's Barbers">Book</button>
    </div>
  `;
}

function renderSite() {
  document.title = `${shared.name} - ${data.label}`;
  document.getElementById("site-root").innerHTML = `
    <main class="site-shell">
      ${renderHeader()}
      ${renderHero()}
      ${renderTrust()}
      ${renderStory()}
      ${renderNotice()}
      ${renderServices()}
      ${renderBranches()}
      ${renderWhy()}
      ${renderGallery()}
      ${renderReviews()}
      ${renderTeam()}
      ${renderBookingBand()}
      ${renderContact()}
      ${renderFooter()}
    </main>
  `;
}

function setupInteractions() {
  const modal = document.getElementById("bookingModal");
  const form = document.getElementById("bookingForm");
  const success = document.getElementById("bookingSuccess");
  const openModal = () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };
  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  document.querySelectorAll("[data-open-modal]").forEach(button => button.addEventListener("click", openModal));
  document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    form.style.display = "none";
    success.style.display = "block";
  });

  document.querySelectorAll(".ticker-window").forEach(ticker => {
    const toggle = () => ticker.classList.toggle("paused");
    ticker.addEventListener("click", toggle);
    ticker.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
}

renderSite();
setupInteractions();
