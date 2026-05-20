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
  },
  "5": {
    label: "Golden Scissors barber concept",
    business: {
      name: "Golden Scissors",
      phone: "+44 1904 463409",
      phoneHref: "tel:+441904463409",
      address: "45 Crichton Ave, Clifton, York YO30 6EF, United Kingdom",
      maps: "https://www.google.com/maps/search/?api=1&query=Golden%20Scissors%2045%20Crichton%20Ave%20Clifton%20York%20YO30%206EF",
      hours: "Mon-Sat 9AM-7PM. Sunday 10AM-4PM.",
      rating: "4.9",
      logo: "assets/golden-scissors/logo-1.png",
      email: "hello@goldenscissorsyork.co.uk"
    },
    title: "Classic cuts. Sharp fades. Golden standard.",
    eyebrow: "Premium barber shop - York",
    intro: "A polished barber experience in Clifton, York, built around clean fades, classic cuts, beard care, and friendly local service.",
    primary: "Book Your Cut",
    secondary: "Call the Shop",
    video: "https://cdn.coverr.co/videos/coverr-cutting-hair-in-the-barbershop-6113/1080p.mp4",
    heroImage: "assets/golden-scissors/shop-image-1.webp",
    secondaryImage: "assets/golden-scissors/shop-image-2.webp",
    facts: ["4.9 Google rating", "372 Google reviews", "York, England", "Open 7 days"],
    trust: [
      ["4.9", "Google Rating", "Trusted by hundreds of local clients."],
      ["372", "Google Reviews", "A strong reputation for friendly, consistent cuts."],
      ["7", "Days Open", "Easy appointments and walk-ins through the week."],
      ["York", "Clifton Shop", "Located on Crichton Avenue in York."]
    ],
    storyTitle: "About Golden Scissors",
    story: "Golden Scissors is a York barber shop for clients who want a sharp result without the fuss. The look is classic and confident: clean tools, calm service, strong finishes, and a shop atmosphere that feels premium from the first step inside.",
    localSeo: "For anyone searching for a barber near me, barbershop near me, or a barber close to me in Clifton and York, Golden Scissors offers sharp cuts, clean fades, beard trims, and friendly service at 45 Crichton Avenue.",
    servicesTitle: "Barbering for every style",
    servicesCopy: "Clean everyday cuts, detailed fades, beard shaping, kids cuts, and finishing work for a polished look.",
    services: [
      ["Classic Haircut", "A clean tailored cut finished with styling and careful neckline detail.", "From GBP 18"],
      ["Skin Fade", "Modern fade work with smooth blending, sharp edges, and a fresh finish.", "From GBP 22"],
      ["Haircut & Beard", "Full cut, beard shaping, line-up, and styling for a complete look.", "From GBP 30"],
      ["Hot Towel Shave", "Traditional shave service with warm towel prep and a close finish.", "From GBP 20"],
      ["Kids Haircut", "Friendly, patient cuts for younger clients.", "From GBP 14"],
      ["Beard Trim", "Shape, tidy, and refine your beard with clean lines.", "From GBP 10"]
    ],
    branches: [
      ["Golden Scissors York", "45 Crichton Ave, Clifton, York YO30 6EF, United Kingdom", "Mon-Sat 9AM-7PM. Sunday 10AM-4PM."],
      ["Walk-ins & Bookings", "Call the shop for availability or visit during opening hours.", "+44 1904 463409"]
    ],
    why: [
      ["Classic Barber Feel", "A black-and-white premium direction with confident type, strong contrast, and real shop photography."],
      ["Sharp Detail", "Every fade, neckline, beard edge, and finish is handled with care."],
      ["Trusted Locally", "4.9 rating with hundreds of Google reviews from York customers."],
      ["Easy to Visit", "Located in Clifton, York, with long opening hours across the week."],
      ["Built for Mobile", "Clear call, direction, booking, services, and gallery sections for phone users."],
      ["Real Client Assets", "The concept uses the client logo, shop images, and gallery photos from the provided folder."]
    ],
    reviews: [
      ["Erop Союзмом", "Excellent place! Very cozy and welcoming atmosphere. After moving to York, I needed to find a new barbershop and luckily did not have to search for long. The barbers are true professionals. I was given a haircut quickly and exactly the way I wanted. I am absolutely delighted with my new hairstyle.", "2 reviews - 2 months ago"],
      ["Holly Neilson", "Always great service; kind and respectful. My little brother hated getting his hair cut until he went there, now he cannot wait.", "1 review - 2 months ago"],
      ["Dana Mustafa", "Great barbershop! The staff are very friendly and welcoming, and they really take their time to make sure you get the perfect haircut. The place is clean and comfortable, and the prices are very reasonable for the quality of service.", "3 reviews - 7 months ago"],
      ["Timothy Dimatulac", "Very friendly barbers. We keep coming back and the price is reasonable, perfect for our budget. Thank you for the free lollipops.", "1 review - 3 months ago"],
      ["Camile Mason", "Been a regular for a few years now. Best set of lads I have met. Great prices and always happy.", "6 reviews - 5 months ago"],
      ["Patrick O'Donovan", "Found this place by mistake when my usual barber was shut. Been coming here for over a year now with my son and would not change. All the lads are brilliant and keep up the good work.", "2 reviews - 5 months ago"]
    ],
    faq: [
      ["Where is Golden Scissors?", "45 Crichton Ave, Clifton, York YO30 6EF, United Kingdom."],
      ["What are the opening hours?", "Monday to Saturday 9AM-7PM and Sunday 10AM-4PM."],
      ["Can customers call directly?", "Yes. The phone number is +44 1904 463409."],
      ["What services are shown?", "Haircuts, skin fades, haircut and beard packages, hot towel shaves, kids cuts, and beard trims."]
    ],
    reviewMode: "grid"
  }
};

const params = new URLSearchParams(window.location.search);
const requestedSite = params.get("site");
const activeSite = sites[requestedSite] ? requestedSite : (sites[window.SCOTTS_ACTIVE_SITE] ? window.SCOTTS_ACTIVE_SITE : "1");
const data = sites[activeSite];
const business = { ...shared, ...(data.business || {}) };
document.body.dataset.site = activeSite;

function card(title, copy, extra = "") {
  return `<article class="card ${extra}"><h3>${title}</h3><p>${copy}</p></article>`;
}

function renderHeader() {
  const brandMark = business.logoText
    ? `<span class="brand-mark">${business.logoText}</span>`
    : `<img src="${business.logo || shared.logo}" alt="${business.name} logo" />`;
  return `
    <nav class="navbar">
      <div class="nav-inner">
        <a class="brand" href="#home">
          ${brandMark}
          <span class="brand-text">
            <span class="brand-name">${business.name}</span>
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
          <a class="btn btn-ghost" href="${business.phoneHref}">Call</a>
          <button class="btn btn-red" type="button" data-open-modal>${activeSite === "5" ? "Quote" : "Book"}</button>
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
  const secondaryHref = data.secondaryHref || (activeSite === "2" ? business.maps : business.phoneHref);
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
  if (activeSite === "5") {
    return `
      <section class="section work-section" id="gallery">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow">Gallery</span>
            <h2>Classic barber shop style.</h2>
            <p>Use this area for real shop photos, haircut finishes, and interior details when the client provides assets.</p>
          </div>
          <div class="work-grid">
            ${["Classic Haircuts", "Skin Fades", "Beard Trims", "Hot Towel Shaves", "Kids Cuts", "Shop Details"].map(item => `<article class="card work-card"><span>${item}</span></article>`).join("")}
          </div>
        </div>
      </section>
    `;
  }

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
  const localReviews = data.reviews || reviews;
  const reviewCards = localReviews.map(([name, quote, meta]) => `
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
          <h2>${business.rating} rating from local customers</h2>
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
          <h2>${activeSite === "5" ? "Get a quote in 24 hours." : "Ready for a fresh cut?"}</h2>
          <p>${activeSite === "5" ? "Tell us about your commercial facility and schedule a walkthrough." : "Call now, send a booking request, or get directions to Scott's Barbers."}</p>
        </div>
        <div class="hero-ctas">
          <a class="btn btn-dark" href="${business.phoneHref}">${business.phone}</a>
          <button class="btn btn-gold" type="button" data-open-modal>${activeSite === "5" ? "Request Quote" : "Book Appointment"}</button>
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
          <h2 style="margin-top:14px">${activeSite === "5" ? "Call, email, or send the form" : `Visit ${business.name}`}</h2>
          <div class="contact-list">
            <div class="contact-item"><strong>Address</strong><span>${business.address}</span></div>
            <div class="contact-item"><strong>Phone</strong><a href="${business.phoneHref}">${business.phone}</a></div>
            ${business.email ? `<div class="contact-item"><strong>Email</strong><span>${business.email}</span></div>` : ""}
            <div class="contact-item"><strong>Opening Hours</strong><span>${business.hours}</span></div>
          </div>
          <div class="hero-ctas">
            <a class="btn btn-red" href="${business.phoneHref}">Call Now</a>
            <a class="btn btn-ghost" href="${business.maps}" target="_blank" rel="noopener">${activeSite === "5" ? "Request Quote" : "Get Directions"}</a>
          </div>
        </div>
        ${activeSite === "5" ? renderQuoteForm() : `<iframe class="map-frame" src="${shared.mapEmbed}" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" title="${business.name} location"></iframe>`}
      </div>
    </section>
  `;
}

function renderQuoteForm() {
  return `
    <form class="card quote-form">
      <label>Full Name<input type="text" placeholder="Your name" /></label>
      <label>Company / Facility<input type="text" placeholder="Company name" /></label>
      <label>Email<input type="email" placeholder="you@company.com" /></label>
      <label>Phone<input type="tel" placeholder="Phone number" /></label>
      <label>Service Needed
        <select>
          <option>Classic Haircut</option>
          <option>Skin Fade</option>
          <option>Haircut & Beard</option>
          <option>Hot Towel Shave</option>
          <option>Kids Haircut</option>
        </select>
      </label>
      <label>Appointment Notes<textarea placeholder="Preferred date, time, and any style details"></textarea></label>
      <button class="btn btn-gold full" type="button">Send Request</button>
    </form>
  `;
}

function renderFooter() {
  const footerMark = business.logoText
    ? `<span class="brand-mark small">${business.logoText}</span>`
    : `<img src="${business.logo || shared.logo}" alt="${business.name} logo" />`;
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-brand">
          ${footerMark}
          <span>${business.name}</span>
        </div>
        <p>Concept ${activeSite}: ${data.label}. © 2026 ${business.name}.</p>
      </div>
    </footer>
    <div class="floating-actions" aria-label="Quick actions">
      <a class="float-btn call" href="${business.phoneHref}" aria-label="Call ${business.name}">Call</a>
      <button class="float-btn book" type="button" data-open-modal aria-label="Book ${business.name}">Book</button>
    </div>
  `;
}

function renderFaq() {
  if (!data.faq) return "";
  return `
    <section class="section faq-section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Frequently Asked</span>
          <h2>Questions, answered.</h2>
        </div>
        <div class="faq-grid">
          ${data.faq.map(([question, answer]) => `
            <article class="card faq-card">
              <h3>${question}</h3>
              <p>${answer}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCleaningHeader() {
  return `
    <nav class="cleaning-nav barber5-nav">
      <div class="cleaning-nav-inner">
        <a class="cleaning-logo barber5-logo" href="#home" aria-label="${business.name}">
          <img src="${business.logo}" alt="${business.name} logo" />
        </a>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a class="cleaning-phone" href="${business.phoneHref}">${business.phone} <span>Call</span></a>
      </div>
    </nav>
  `;
}

function renderCleaningHero() {
  return `
    <section class="cleaning-hero barber5-hero" id="home">
      <div class="barber5-hero-photo" aria-hidden="true"></div>
      <video class="barber5-hero-video" autoplay muted loop playsinline poster="${data.heroImage}">
        <source src="${data.video}" type="video/mp4" />
      </video>
      <div class="cleaning-hero-shade"></div>
      <div class="cleaning-hero-center">
        <div class="barber5-hero-content">
          <span class="barber5-kicker">${data.eyebrow}</span>
          <img src="${business.logo}" alt="${business.name}" class="barber5-hero-logo-img" />
          <h1>${data.title}</h1>
          <p>${data.intro}</p>
          <div class="barber5-hero-actions">
            <button class="cleaning-outline-btn barber5-primary" type="button" data-open-modal>${data.primary}</button>
            <a class="cleaning-outline-btn barber5-secondary" href="${business.phoneHref}">${data.secondary}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCleaningClients() {
  return `
    <section class="client-strip barber5-trust barber5-reveal" data-bg-word="GOLDEN">
      <div class="container">
        <p>Golden Scissors in numbers</p>
        <div class="client-logos" aria-label="Golden Scissors trust points">
          ${data.trust.map(([metric, title, copy]) => `
            <span>
              <strong>${metric}</strong>
              <small>${title}</small>
              <em>${copy}</em>
            </span>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCleaningAbout() {
  return `
    <section class="cleaning-about barber5-about barber5-reveal" id="about" data-bg-word="BARBERCROP">
      <div class="container cleaning-split">
        <div>
          <span class="cleaning-kicker">${data.storyTitle}</span>
          <h2>York barbering. <em>Golden standard.</em></h2>
          <p>${data.story}</p>
          <p class="barber5-local-seo">${data.localSeo}</p>
          <div class="barber5-info-list">
            <div><strong>Address</strong><span>${business.address}</span></div>
            <div><strong>Hours</strong><span>${business.hours}</span></div>
            <div><strong>Rating</strong><span>${business.rating} stars from 372 Google reviews</span></div>
          </div>
        </div>
        <div class="about-photo barber5-about-photo"></div>
      </div>
    </section>
  `;
}

function renderCleaningServices() {
  const serviceImages = [
    "assets/golden-scissors/gallery/gallery-1.jpg",
    "assets/golden-scissors/gallery/gallery-2.jpg",
    "assets/golden-scissors/gallery/gallery-3.jpg",
    "assets/golden-scissors/gallery/gallery-4.jpg"
  ];
  return `
    <section class="cleaning-services barber5-services barber5-reveal" id="services" data-bg-word="SERVICE">
      <div class="container">
        <div class="cleaning-section-head center">
          <span class="cleaning-kicker">Services</span>
          <h2>${data.servicesTitle}</h2>
          <p>${data.servicesCopy}</p>
        </div>
        <div class="cleaning-service-grid">
          ${data.services.slice(0, 4).map(([title, copy, price], index) => `
            <article class="cleaning-service-card">
              <img src="${serviceImages[index]}" alt="${title}" loading="lazy" />
              <h3>${title}</h3>
              <p>${copy}</p>
              <a href="#contact">${price} -></a>
            </article>
          `).join("")}
        </div>
        <div class="all-services-wrap">
          <button class="all-services-btn" type="button" data-open-modal>Book Appointment</button>
        </div>
      </div>
    </section>
  `;
}

function renderCleaningCtaVideo() {
  return `
    <section class="cleaning-video-cta barber5-video barber5-reveal" id="video" data-bg-word="CRAFT">
      <video autoplay muted loop playsinline poster="${data.secondaryImage}">
        <source src="${data.video}" type="video/mp4" />
      </video>
      <div class="cleaning-hero-shade"></div>
      <div class="container">
        <h2><span>Classic barber craft.</span><em>Modern York finish.</em></h2>
        <button class="cleaning-outline-btn" type="button" data-open-modal>Reserve Your Chair</button>
      </div>
    </section>
  `;
}

function renderCleaningArea() {
  const galleryImages = [
    ["assets/golden-scissors/shop-image-1.webp", "Golden Scissors shop front"],
    ["assets/golden-scissors/shop-image-2.webp", "Golden Scissors shop interior"],
    ["assets/golden-scissors/gallery/gallery-5.webp", "Barber shop gallery"],
    ["assets/golden-scissors/gallery/gallery-6.jpg", "Client haircut gallery"],
    ["assets/golden-scissors/gallery/gallery-7.jpg", "Golden Scissors gallery"],
    ["assets/golden-scissors/gallery/gallery-4.jpg", "Shop detail gallery"]
  ];
  return `
    <section class="cleaning-area barber5-gallery barber5-reveal" id="gallery" data-bg-word="GALLERY">
      <div class="container">
        <div class="cleaning-section-head center">
          <span class="cleaning-kicker">Gallery</span>
          <h2>Inside the <em>Golden Scissors.</em></h2>
        </div>
        <div class="barber5-gallery-grid">
          ${galleryImages.map(([src, label]) => `
            <figure>
              <img src="${src}" alt="${label}" loading="lazy" />
            </figure>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCleaningReviews() {
  const reviewCards = data.reviews.map(([name, quote, meta]) => `
    <article class="barber5-review-card">
      <div class="stars">★★★★★</div>
      <blockquote>"${quote}"</blockquote>
      <div class="reviewer">${name}</div>
      <div class="review-meta">${meta}</div>
    </article>
  `);

  return `
    <section class="cleaning-reviews barber5-reviews barber5-reveal" id="reviews" data-bg-word="REVIEWS">
      <div class="container">
        <div class="cleaning-section-head center">
          <span class="cleaning-kicker">Reviews</span>
          <h2>Real Google reviews</h2>
          <p>Premium barbering, friendly service, and a local reputation built one haircut at a time.</p>
        </div>
        <div class="barber5-review-window" tabindex="0" aria-label="Golden Scissors Google reviews">
          <div class="barber5-review-track">
            ${[...reviewCards, ...reviewCards].join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCleaningContact() {
  return `
    <section class="cleaning-contact barber5-contact barber5-reveal" id="contact" data-bg-word="YORK">
      <div class="container contact-grid">
        <div>
          <span class="cleaning-kicker">Contact</span>
          <h2>Visit the shop or book ahead.</h2>
          <p>Golden Scissors is based in Clifton, York. Call the shop for availability, directions, and appointment requests.</p>
          <div class="contact-list">
            <div class="contact-item"><strong>Address</strong><span>${business.address}</span></div>
            <div class="contact-item"><strong>Phone</strong><a href="${business.phoneHref}">${business.phone}</a></div>
            <div class="contact-item"><strong>Hours</strong><span>${business.hours}</span></div>
          </div>
        </div>
        <div class="barber5-contact-card">
          <img src="${data.secondaryImage}" alt="${business.name} shop" loading="lazy" />
          <div>
            <a class="all-services-btn" href="${business.maps}" target="_blank" rel="noopener">Directions</a>
            <button class="all-services-btn light" type="button" data-open-modal>Book Now</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCleaningSite() {
  document.title = `${business.name} - Premium Barber Shop York`;
  document.getElementById("site-root").innerHTML = `
    <main class="site-shell cleaning-site barber5-site">
      ${renderCleaningHeader()}
      ${renderCleaningHero()}
      ${renderCleaningClients()}
      ${renderCleaningReviews()}
      ${renderCleaningAbout()}
      ${renderCleaningServices()}
      ${renderCleaningCtaVideo()}
      ${renderCleaningArea()}
      ${renderFaq()}
      ${renderCleaningContact()}
      ${renderFooter()}
    </main>
  `;
}

function renderSite() {
  if (activeSite === "5") {
    renderCleaningSite();
    return;
  }

  document.title = `${business.name} - ${data.label}`;
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
      ${renderFaq()}
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
  document.getElementById("bookingTitle").textContent = `Book ${business.name}`;
  document.querySelector(".modal-copy").textContent = activeSite === "5" ? "Send your preferred time and the shop will confirm your appointment by phone." : "Send your preferred time and the shop will confirm your slot by phone.";
  const modalLogo = document.querySelector(".modal-logo");
  modalLogo.src = business.logo || shared.logo;
  modalLogo.alt = `${business.name} logo`;
  if (activeSite === "5") {
    const serviceSelect = form.querySelector('select[name="service"]');
    serviceSelect.innerHTML = `
      <option value="">Choose a service</option>
      <option>Classic Haircut</option>
      <option>Skin Fade</option>
      <option>Haircut & Beard</option>
      <option>Hot Towel Shave</option>
      <option>Kids Haircut</option>
      <option>Beard Trim</option>
    `;
  }
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

  document.querySelectorAll(".barber5-review-window").forEach(slider => {
    const pause = () => slider.classList.add("paused");
    const resume = () => slider.classList.remove("paused");
    slider.addEventListener("pointerdown", pause);
    slider.addEventListener("pointerup", resume);
    slider.addEventListener("pointercancel", resume);
    slider.addEventListener("mouseleave", resume);
    slider.addEventListener("touchstart", pause, { passive: true });
    slider.addEventListener("touchend", resume);
  });

  if (activeSite === "5") {
    const revealItems = document.querySelectorAll(".barber5-reveal");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    revealItems.forEach(item => revealObserver.observe(item));

    const cleaningNav = document.querySelector(".cleaning-nav");
    const updateCleaningNav = () => {
      cleaningNav.classList.toggle("is-light", window.scrollY > window.innerHeight - 120);
    };
    updateCleaningNav();
    window.addEventListener("scroll", updateCleaningNav);
  }
}

renderSite();
setupInteractions();
