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

  // Hero slideshow: crossfade through showroom stills, with clickable indicators
  var slideWrap = document.getElementById("heroSlides");
  if (slideWrap) {
    var slides = slideWrap.querySelectorAll(".hero-slide");
    var dotWrap = document.getElementById("heroDots");
    var current = 0;
    var timer = null;
    var HOLD = 5200;

    function show(i) {
      slides[current].classList.remove("active");
      current = (i + slides.length) % slides.length;
      slides[current].classList.add("active");
      if (dotWrap) {
        dotWrap.querySelectorAll("button").forEach(function (b, bi) {
          b.classList.toggle("on", bi === current);
          b.setAttribute("aria-selected", bi === current ? "true" : "false");
        });
      }
    }
    function start() { timer = setInterval(function () { show(current + 1); }, HOLD); }
    function restart() { clearInterval(timer); start(); }

    if (dotWrap && slides.length > 1) {
      slides.forEach(function (s, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("role", "tab");
        b.setAttribute("aria-label", "Show slide " + (i + 1));
        if (i === 0) { b.classList.add("on"); b.setAttribute("aria-selected", "true"); }
        b.addEventListener("click", function () { show(i); restart(); });
        dotWrap.appendChild(b);
      });
    }
    if (slides.length > 1) start();
  }

  // Showroom reel: play muted vignettes only while on screen, pause off screen
  // (keeps data + battery use down; videos ship with preload="none")
  var reelVideos = document.querySelectorAll("video[data-reel]");
  if (reelVideos.length && "IntersectionObserver" in window) {
    var reelIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var v = entry.target;
          if (entry.isIntersecting) {
            var playing = v.play();
            if (playing && playing.catch) playing.catch(function () {});
            v.parentElement.classList.add("playing");
          } else {
            v.pause();
            v.parentElement.classList.remove("playing");
          }
        });
      },
      { threshold: 0.4 }
    );
    reelVideos.forEach(function (v) { reelIO.observe(v); });
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
