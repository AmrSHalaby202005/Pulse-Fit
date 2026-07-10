/* ==========================================================
   PulseFit | Landing Page
   Author : Amr Shalaby
========================================================== */

/* ==========================================================
   Initialize Website
========================================================== */

initMobileMenu();
initNavbar();
initHeroAnimation();
initActiveLinks();
initScrollReveal();
initProgressBar();
initParallax();
initTestimonialsSlider();
initFAQ();

/* ==========================================================
   Mobile Navigation
========================================================== */

function initMobileMenu() {
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu i");
  const links = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links a");

  if (!menu || !menuIcon || !links) return;

  menu.addEventListener("click", () => {
    links.classList.toggle("active");

    menuIcon.classList.replace(
      links.classList.contains("active") ? "bi-list" : "bi-x-lg",
      links.classList.contains("active") ? "bi-x-lg" : "bi-list",
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
      menuIcon.classList.replace("bi-x-lg", "bi-list");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      links.classList.remove("active");
      menuIcon.classList.replace("bi-x-lg", "bi-list");
    }
  });
}

/* ==========================================================
   Navbar Effect
========================================================== */

function initNavbar() {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });
}

/* ==========================================================
   Hero Animation
========================================================== */

function initHeroAnimation() {
  window.addEventListener("load", () => {
    document.querySelector(".hero-content-left")?.classList.add("show");
    document.querySelector(".hero-content-right")?.classList.add("show");
  });
}

/* ==========================================================
   Active Navigation
========================================================== */

function initActiveLinks() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".links a");

  if (!sections.length) return;

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navItems.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`,
      );
    });
  });
}

/* ======================================================
   SCROLL REVEAL
====================================================== */

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    },
  );

  revealElements.forEach((element) => observer.observe(element));
}

/* ==========================================================
   Progress Bar
========================================================== */

function initProgressBar() {
  const progressBar = document.querySelector(".progress-bar");

  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const progress =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    progressBar.style.width = progress + "%";
  });
}

/* ==========================================================
   Watch Parallax
========================================================== */

function initParallax() {
  const watch = document.querySelector(".watch-wrapper");

  if (!watch) return;

  window.addEventListener("scroll", () => {
    watch.style.transform = `translateY(${window.scrollY * 0.12}px)`;
  });
}

/* ==========================================================
   Testimonials Slider
========================================================== */

function initTestimonialsSlider() {
  const slider = document.querySelector(".testimonials-slider");
  if (!slider) return;
  new Swiper(slider, {
    loop: true,
    speed: 600,
    spaceBetween: 30,
    slidesPerView: 3,
    grabCursor: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".testimonials .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
      },
    },
  });
}

/* ==========================================================
   FAQ Accordion
========================================================== */

function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((faq) => {
        if (faq !== item) {
          faq.classList.remove("active");

          faq.querySelector("i").classList.replace("bi-dash-lg", "bi-plus-lg");
        }
      });

      item.classList.toggle("active");

      const icon = item.querySelector("i");

      if (item.classList.contains("active")) {
        icon.classList.replace("bi-plus-lg", "bi-dash-lg");
      } else {
        icon.classList.replace("bi-dash-lg", "bi-plus-lg");
      }
    });
  });
}
