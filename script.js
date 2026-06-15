const quoteSteps = [
  {
    id: "solution",
    title: "What are you looking for?",
    description: "Choose one option to personalize your quote.",
    products: true,
    options: [
      ["Solar System", "Solar panels for your property", "solar"],
      ["Heat Pump", "Efficient heating and cooling", "pump"],
      ["Solar System & Heat Pump", "A complete renewable energy setup", "combo"],
      ["Additional Battery Storage", "Store more of the energy you generate", "battery"],
    ],
  },
  {
    id: "propertyType",
    title: "What type of property is this for?",
    description: "Choose the option that best describes your solar project.",
    options: [
      ["Residential", "A house or private residence", "⌂"],
      ["Commercial", "An office, shop, or business property", "▦"],
    ],
  },
  {
    id: "relationship",
    title: "What is your relationship to the property?",
    description: "This helps us understand who will be involved in the decision.",
    options: [
      ["I own it", "I am the property owner", "✓"],
      ["I rent it", "I am a tenant exploring options", "⌂"],
      ["I manage it", "I manage the property for someone else", "◇"],
    ],
  },
  {
    id: "monthlyBill",
    title: "What is the average monthly electricity bill?",
    description: "A rough range is perfect for this demo quotation.",
    options: [
      ["Under $100", "Lower monthly energy use", "$"],
      ["$100 – $250", "Typical household energy use", "$$"],
      ["$250 – $500", "Higher home or small business use", "$$$"],
      ["Over $500", "Large home or commercial use", "$$$$"],
    ],
  },
  {
    id: "sunlight",
    title: "How much direct sunlight does the roof receive?",
    description: "Think about the roof area during the brightest part of the day.",
    options: [
      ["Full sun", "Bright for most of the day", "☀"],
      ["Partial sun", "Some shade during the day", "◐"],
      ["Mostly shaded", "Significant shade from trees or buildings", "☁"],
      ["Not sure", "A site assessment would help", "?"],
    ],
  },
  {
    id: "timeframe",
    title: "When would you like to install solar?",
    description: "There is no commitment. This simply helps qualify the lead.",
    options: [
      ["As soon as possible", "Ready to explore next steps", "→"],
      ["Within 3 months", "Planning for the near future", "3"],
      ["Within 6–12 months", "Researching options ahead of time", "6"],
      ["Just exploring", "Learning what solar could offer", "∞"],
    ],
  },
  {
    id: "contact",
    title: "Where could our solar team reach you?",
    description: "For this demo, your details stay only on this screen and are never submitted.",
    contact: true,
  },
];

const state = {
  step: 0,
  answers: { solution: "Solar System" },
  lastFocused: null,
};

const body = document.body;
const drawerLayer = document.querySelector("#drawer-layer");
const drawer = document.querySelector("#site-menu");
const menuToggle = document.querySelector(".menu-toggle");
const drawerClose = document.querySelector(".drawer__close");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const drawerLinks = [...document.querySelectorAll(".drawer__nav a")];
const quizLayer = document.querySelector("#quiz-layer");
const quizPanel = document.querySelector("#quiz-panel");
let quizTitle = document.querySelector("#quiz-title");
let quizDescription = document.querySelector("#quiz-description");
let quizAnswers = document.querySelector("#quiz-answers");
let quizError = document.querySelector("#quiz-error");
const quizBack = document.querySelector("#quiz-back");
const quizNext = document.querySelector("#quiz-next");
const quizClose = document.querySelector(".quiz__close");
const quizProgressLabel = document.querySelector("#quiz-progress-label");
const quizProgressBar = document.querySelector("#quiz-progress-bar");
const openQuoteButtons = [...document.querySelectorAll(".js-open-quote")];
const contactForm = document.querySelector("#contact-form");
const contactFormMessage = document.querySelector("#contact-form-message");

function lockPage() {
  body.classList.add("is-locked");
}

function unlockPage() {
  if (drawerLayer.hidden && quizLayer.hidden) {
    body.classList.remove("is-locked");
  }
}

function getFocusable(container) {
  return [...container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter((element) => !element.hidden && element.offsetParent !== null);
}

function trapFocus(event, container) {
  if (event.key !== "Tab") return;
  const focusable = getFocusable(container);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openDrawer() {
  state.lastFocused = document.activeElement;
  drawerLayer.hidden = false;
  drawer.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => drawerLayer.classList.add("is-open"));
  lockPage();
  drawerClose.focus();
}

function closeDrawer({ restoreFocus = true } = {}) {
  drawerLayer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  window.setTimeout(() => {
    drawerLayer.hidden = true;
    unlockPage();
  }, 260);
  if (restoreFocus) state.lastFocused?.focus();
}

function createOption(option, step) {
  const [label, detail, icon] = option;
  const button = document.createElement("button");
  button.type = "button";
  button.className = step.products ? "quiz-option quiz-option--product" : "quiz-option";
  button.dataset.value = label;
  button.setAttribute("aria-pressed", String(state.answers[step.id] === label));
  if (state.answers[step.id] === label) button.classList.add("is-selected");
  button.innerHTML = step.products
    ? `
      ${productArt(icon)}
      <span class="quiz-option__copy"><strong>${label}</strong><small>${detail}</small></span>
      <span class="quiz-option__check" aria-hidden="true">✓</span>
    `
    : `
      <span class="quiz-option__icon" aria-hidden="true">${icon}</span>
      <span class="quiz-option__copy"><strong>${label}</strong><small>${detail}</small></span>
      <span class="quiz-option__check" aria-hidden="true">✓</span>
    `;
  button.addEventListener("click", () => selectOption(button, step));
  return button;
}

function productArt(type) {
  if (type === "solar") {
    return `
      <span class="product-art product-art--solar" aria-hidden="true">
        <span class="product-art__glow"></span>
        <span class="product-art__panel"></span>
        <span class="product-art__panel product-art__panel--rear"></span>
      </span>
    `;
  }
  if (type === "pump") {
    return `
      <span class="product-art product-art--pump" aria-hidden="true">
        <span class="product-art__glow"></span>
        <span class="product-art__unit"><span class="product-art__fan"></span></span>
      </span>
    `;
  }
  if (type === "combo") {
    return `
      <span class="product-art product-art--combo" aria-hidden="true">
        <span class="product-art__glow"></span>
        <span class="product-art__unit"><span class="product-art__fan"></span></span>
        <span class="product-art__panel"></span>
      </span>
    `;
  }
  return `
    <span class="product-art product-art--battery" aria-hidden="true">
      <span class="product-art__glow"></span>
      <span class="product-art__battery"><i></i></span>
    </span>
  `;
}

function selectOption(button, step) {
  state.answers[step.id] = button.dataset.value;
  quizAnswers.querySelectorAll(".quiz-option").forEach((option) => {
    const selected = option === button;
    option.classList.toggle("is-selected", selected);
    option.setAttribute("aria-pressed", String(selected));
  });
  quizError.textContent = "";
  quizNext.disabled = false;
  window.setTimeout(() => {
    if (state.step < quoteSteps.length - 1) goToStep(state.step + 1);
  }, 240);
}

function contactMarkup() {
  const saved = state.answers.contact || {};
  return `
    <div class="quiz-contact">
      <label>
        <span>Full name</span>
        <input id="lead-name" type="text" autocomplete="name" value="${escapeHtml(saved.name || "")}" placeholder="Your name">
      </label>
      <label>
        <span>Email address</span>
        <input id="lead-email" type="email" autocomplete="email" value="${escapeHtml(saved.email || "")}" placeholder="you@example.com">
      </label>
      <label>
        <span>Phone number</span>
        <input id="lead-phone" type="tel" autocomplete="tel" value="${escapeHtml(saved.phone || "")}" placeholder="Your phone number">
      </label>
      <div class="quiz-contact__notice">
        <span aria-hidden="true">i</span>
        Demo privacy note: these details are not transmitted, logged, or stored.
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}

function renderStep(direction = "forward") {
  const step = quoteSteps[state.step];
  let productStage = quizPanel.querySelector(".product-stage");
  if (!productStage) {
    productStage = document.createElement("div");
    productStage.className = "product-stage";
    productStage.setAttribute("aria-label", "Quotation stage 1 of 3");
    productStage.innerHTML = `
      <span class="is-current">1</span><i></i><span>2</span><i></i><span>3</span>
    `;
    quizPanel.insertBefore(productStage, quizPanel.firstChild);
  }
  productStage.hidden = !step.products;
  quizPanel.classList.remove("is-forward", "is-backward");
  quizPanel.classList.add(direction === "back" ? "is-backward" : "is-forward");
  quizPanel.classList.toggle("quiz__panel--wide", Boolean(step.products));
  quizTitle.textContent = step.title;
  quizDescription.textContent = step.description;
  quizAnswers.innerHTML = "";
  quizAnswers.className = step.contact
    ? "quiz__answers quiz__answers--contact"
    : step.products
      ? "quiz__answers quiz__answers--products"
      : "quiz__answers";
  quizError.textContent = "";

  if (step.contact) {
    quizAnswers.innerHTML = contactMarkup();
    quizAnswers.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", () => {
        input.removeAttribute("aria-invalid");
        quizError.textContent = "";
      });
    });
    quizNext.textContent = "Finish";
    quizNext.disabled = false;
  } else {
    step.options.forEach((option) => quizAnswers.appendChild(createOption(option, step)));
    quizNext.textContent = "Continue";
    quizNext.disabled = !state.answers[step.id];
  }

  quizBack.hidden = state.step === 0;
  quizProgressLabel.textContent = `Question ${state.step + 1} of ${quoteSteps.length}`;
  quizProgressBar.style.width = `${((state.step + 1) / quoteSteps.length) * 100}%`;
  window.setTimeout(() => quizTitle.focus({ preventScroll: true }), 20);
  quizTitle.tabIndex = -1;
}

function goToStep(nextStep) {
  const direction = nextStep < state.step ? "back" : "forward";
  state.step = Math.max(0, Math.min(nextStep, quoteSteps.length - 1));
  renderStep(direction);
}

function validateContactStep() {
  const name = document.querySelector("#lead-name").value.trim();
  const email = document.querySelector("#lead-email").value.trim();
  const phone = document.querySelector("#lead-phone").value.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneValid = phone.replace(/\D/g, "").length >= 7;

  document.querySelectorAll(".quiz-contact input").forEach((input) => input.removeAttribute("aria-invalid"));
  if (!name) {
    document.querySelector("#lead-name").setAttribute("aria-invalid", "true");
    quizError.textContent = "Please enter your name.";
    document.querySelector("#lead-name").focus();
    return false;
  }
  if (!emailValid) {
    document.querySelector("#lead-email").setAttribute("aria-invalid", "true");
    quizError.textContent = "Please enter a valid email address.";
    document.querySelector("#lead-email").focus();
    return false;
  }
  if (!phoneValid) {
    document.querySelector("#lead-phone").setAttribute("aria-invalid", "true");
    quizError.textContent = "Please enter a valid phone number.";
    document.querySelector("#lead-phone").focus();
    return false;
  }

  state.answers.contact = { name, email, phone };
  return true;
}

function showThankYou() {
  const name = state.answers.contact.name.split(/\s+/)[0];
  document.querySelector(".quiz__progress-wrap").hidden = true;
  document.querySelector(".quiz__footer").hidden = true;
  quizPanel.className = "quiz__panel quiz__panel--thanks is-forward";
  quizPanel.innerHTML = `
    <div class="thanks__icon" aria-hidden="true">✓</div>
    <p class="quiz__kicker">Quotation complete</p>
    <h2 id="quiz-title" tabindex="-1">Thank you, ${escapeHtml(name)}.</h2>
    <p class="quiz__description" id="quiz-description">
      Your demo solar request is complete. In a live experience, the JK Energy
      team would review your answers and get in touch with the next steps.
    </p>
    <div class="thanks__summary">
      <span>${escapeHtml(state.answers.solution)}</span>
      <span>${escapeHtml(state.answers.propertyType)}</span>
      <span>${escapeHtml(state.answers.monthlyBill)}</span>
      <span>${escapeHtml(state.answers.timeframe)}</span>
    </div>
    <p class="thanks__privacy">No information from this demo was sent or stored.</p>
    <div class="thanks__actions">
      <button class="button button--primary" id="quiz-home" type="button">Back to Home</button>
      <button class="button button--ghost-dark" id="quiz-restart" type="button">Start Again</button>
    </div>
  `;
  document.querySelector("#quiz-home").addEventListener("click", () => closeQuiz({ goHome: true }));
  document.querySelector("#quiz-restart").addEventListener("click", resetQuiz);
  quizPanel.querySelector("h2").focus();
}

function resetQuiz() {
  state.step = 0;
  state.answers = { solution: "Solar System" };
  quizPanel.className = "quiz__panel";
  document.querySelector(".quiz__progress-wrap").hidden = false;
  document.querySelector(".quiz__footer").hidden = false;
  quizPanel.innerHTML = `
    <p class="quiz__kicker">Your free solar quotation</p>
    <h2 id="quiz-title"></h2>
    <p class="quiz__description" id="quiz-description"></p>
    <div class="quiz__answers" id="quiz-answers"></div>
    <p class="quiz__error" id="quiz-error" role="alert"></p>
  `;
  refreshQuizElements();
  renderStep();
}

function refreshQuizElements() {
  quizTitle = document.querySelector("#quiz-title");
  quizDescription = document.querySelector("#quiz-description");
  quizAnswers = document.querySelector("#quiz-answers");
  quizError = document.querySelector("#quiz-error");
}

function openQuiz(event) {
  state.lastFocused = event?.currentTarget?.closest(".drawer")
    ? menuToggle
    : event?.currentTarget || document.activeElement;
  if (!drawerLayer.hidden) closeDrawer({ restoreFocus: false });
  resetQuiz();
  quizLayer.hidden = false;
  requestAnimationFrame(() => quizLayer.classList.add("is-open"));
  lockPage();
  quizClose.focus();
}

function closeQuiz({ goHome = false } = {}) {
  quizLayer.classList.remove("is-open");
  window.setTimeout(() => {
    quizLayer.hidden = true;
    unlockPage();
    if (goHome) {
      document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
    }
  }, 260);
  state.lastFocused?.focus();
}

function handleNext() {
  const step = quoteSteps[state.step];
  if (step.contact) {
    if (validateContactStep()) showThankYou();
    return;
  }
  if (!state.answers[step.id]) {
    quizError.textContent = "Please choose an option to continue.";
    quizAnswers.querySelector("button")?.focus();
    return;
  }
  goToStep(state.step + 1);
}

menuToggle.addEventListener("click", openDrawer);
drawerClose.addEventListener("click", () => closeDrawer());
drawerBackdrop.addEventListener("click", () => closeDrawer());
drawerLinks.forEach((link) => {
  link.addEventListener("click", () => closeDrawer({ restoreFocus: false }));
});
openQuoteButtons.forEach((button) => button.addEventListener("click", openQuiz));
quizClose.addEventListener("click", closeQuiz);
quizBack.addEventListener("click", () => goToStep(state.step - 1));
quizNext.addEventListener("click", handleNext);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!quizLayer.hidden) closeQuiz();
    else if (!drawerLayer.hidden) closeDrawer();
  }
  if (!quizLayer.hidden) trapFocus(event, document.querySelector("#quote-quiz"));
  else if (!drawerLayer.hidden) trapFocus(event, drawer);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    contactFormMessage.textContent = "Please complete all three fields with a valid email.";
    contactFormMessage.className = "form-message is-error";
    contactForm.reportValidity();
    return;
  }
  contactFormMessage.textContent = "Thanks! Your demo message was not sent or stored.";
  contactFormMessage.className = "form-message is-success";
  contactForm.reset();
});
