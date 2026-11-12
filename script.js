(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1050) closeMenu();
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const accordionButtons = document.querySelectorAll("[data-accordion] button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("aria-controls");
      const target = targetId ? document.getElementById(targetId) : null;
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      accordionButtons.forEach((otherButton) => {
        if (otherButton === button) return;
        const otherTargetId = otherButton.getAttribute("aria-controls");
        const otherTarget = otherTargetId ? document.getElementById(otherTargetId) : null;
        otherButton.setAttribute("aria-expanded", "false");
        if (otherTarget) otherTarget.hidden = true;
      });

      button.setAttribute("aria-expanded", String(!isExpanded));
      if (target) target.hidden = isExpanded;
    });
  });

  const form = document.getElementById("callback-form");
  const formStatus = document.getElementById("form-status");

  if (form && formStatus) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = form.querySelector("#nombre");
      const phoneInput = form.querySelector("#telefono");
      const name = nameInput?.value.trim() || "";
      const phone = phoneInput?.value.trim() || "";
      const phonePattern = /^[+()\d\s-]{8,20}$/;

      [nameInput, phoneInput].forEach((input) => {
        if (input) input.removeAttribute("aria-invalid");
      });

      if (name.length < 3) {
        if (nameInput) {
          nameInput.setAttribute("aria-invalid", "true");
          nameInput.focus();
        }
        formStatus.textContent = "Ingresa tu nombre y apellido.";
        return;
      }

      if (!phonePattern.test(phone)) {
        if (phoneInput) {
          phoneInput.setAttribute("aria-invalid", "true");
          phoneInput.focus();
        }
        formStatus.textContent = "Ingresa un número celular válido.";
        return;
      }

      formStatus.textContent = "Formulario validado. Conecta Formspree, HubSpot u otro proveedor para recibir las solicitudes.";
      form.reset();
    });
  }
})();
