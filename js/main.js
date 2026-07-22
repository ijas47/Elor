/* Elor Lighting — shared interactions */

(function () {
  // Sticky header state
  var head = document.getElementById("siteHead");
  function onScroll() {
    if (head) head.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
      if (nav.classList.contains("open")) head.classList.add("scrolled");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  // Reveal on scroll (skipped when js/cinematic.js is driving reveals via GSAP ScrollTrigger)
  if (!document.documentElement.classList.contains("gsap-cinematic")) {
    var revealEls = document.querySelectorAll(".rv");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("in"); });
    }
  }

  // Shop filters
  var filterBar = document.getElementById("filterBar");
  var grid = document.getElementById("prodGrid");
  function applyFilter(cat) {
    if (!grid) return;
    grid.querySelectorAll(".prod-card").forEach(function (card) {
      var match = cat === "all" || card.dataset.cat === cat;
      card.classList.toggle("hide", !match);
    });
    if (filterBar) {
      filterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
        btn.classList.toggle("active", btn.dataset.filter === cat);
      });
    }
  }
  if (filterBar && grid) {
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (btn) applyFilter(btn.dataset.filter);
    });
    // Space links from the homepage map to a sensible starting filter
    var hashMap = {
      living: "pendant",
      bedroom: "wall",
      outdoor: "outdoor",
      commercial: "pendant"
    };
    var hash = window.location.hash.replace("#", "");
    if (hashMap[hash]) applyFilter(hashMap[hash]);
  }

  // Consultation form (front-end only — wire to a backend or form service later)
  var form = document.getElementById("consultForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("formSuccess");
      if (success) success.classList.add("show");
      form.reset();
      if (success) success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
})();
