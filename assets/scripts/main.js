function initMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!toggle || !nav || toggle.dataset.ready === "true") {
    return;
  }

  toggle.dataset.ready = "true";

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

function initHeaderState() {
  const header = document.querySelector(".site-header");

  if (!header || header.dataset.readyScroll === "true") {
    return;
  }

  header.dataset.readyScroll = "true";

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!items.length || typeof IntersectionObserver === "undefined") {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => {
    if (!item.classList.contains("is-visible")) {
      observer.observe(item);
    }
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");

  if (!form || form.dataset.ready === "true") {
    return;
  }

  form.dataset.ready = "true";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameField = form.elements.namedItem("name");
    const travelerName = nameField && "value" in nameField ? nameField.value.trim() : "";

    if (status) {
      status.textContent = travelerName
        ? `Gracias, ${travelerName}. Recibimos tu consulta y te responderemos con una propuesta personalizada.`
        : "Recibimos tu consulta y te responderemos con una propuesta personalizada.";
    }

    form.reset();
  });
}

function initGoogleMapsEmbeds() {
  const mapFrames = document.querySelectorAll("[data-google-map]");

  if (!mapFrames.length) {
    return;
  }

  const apiKey = document
    .querySelector('meta[name="google-maps-api-key"]')
    ?.getAttribute("content")
    ?.trim();

  mapFrames.forEach((frame) => {
    if (frame.dataset.ready === "true") {
      return;
    }

    const query = frame.dataset.mapQuery?.trim();

    if (!query) {
      return;
    }

    const src = apiKey
      ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(query)}`
      : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

    frame.dataset.ready = "true";
    frame.setAttribute("src", src);
  });
}

function initTourBookingButtons() {
  const phoneNumber = document.body?.dataset.whatsappNumber?.trim();
  const tourCards = document.querySelectorAll(".adventures-page .adventure-board-card");

  if (!tourCards.length || !phoneNumber) {
    return;
  }

  tourCards.forEach((card) => {
    const body = card.querySelector(".adventure-board-body");
    const title = body?.querySelector("h3")?.textContent?.trim();

    if (!body || !title || body.querySelector("[data-tour-booking]")) {
      return;
    }

    const message = `Hola, quiero reservar el tour ${title}. Me pueden dar informacion, por favor?`;
    const bookingLink = document.createElement("a");

    bookingLink.className = "button button-primary adventure-board-booking";
    bookingLink.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    bookingLink.target = "_blank";
    bookingLink.rel = "noreferrer";
    bookingLink.dataset.tourBooking = "true";
    bookingLink.textContent = "Reservar por WhatsApp";

    body.appendChild(bookingLink);
  });
}

function initTourFilters() {
  const controls = document.querySelector("[data-tour-filters]");
  const buttons = Array.from(document.querySelectorAll("[data-tour-filter]"));
  const sections = Array.from(document.querySelectorAll("[data-tour-category]"));

  if (!controls || !buttons.length || !sections.length || controls.dataset.ready === "true") {
    return;
  }

  controls.dataset.ready = "true";

  const syncFilter = (activeFilter) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.tourFilter === activeFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    sections.forEach((section) => {
      const shouldShow = activeFilter === "all" || section.dataset.tourCategory === activeFilter;
      section.hidden = !shouldShow;
      section.classList.toggle("is-hidden", !shouldShow);
      section.setAttribute("aria-hidden", String(!shouldShow));
    });
  };

  syncFilter("all");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      syncFilter(button.dataset.tourFilter || "all");
    });
  });
}

function initYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function initializePage() {
  initHeaderState();
  initMenu();
  initReveal();
  initContactForm();
  initGoogleMapsEmbeds();
  initTourFilters();
  initTourBookingButtons();
  initYear();
}

document.addEventListener("DOMContentLoaded", initializePage);
