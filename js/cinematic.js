/* Elor Lighting — cinematic scroll layer
   Lenis (smooth scroll) + GSAP ScrollTrigger (pin + section reveals) + Splitting.js (letter-in title).
   Everything here is additive: if a CDN fails to load, or the visitor asked for
   reduced motion, this script quietly does nothing and js/main.js's plain
   IntersectionObserver reveal keeps working exactly as before. */

(function () {
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var heroVideo = document.querySelector(".hero-video");

  if (reduceMotion && heroVideo) {
    heroVideo.removeAttribute("autoplay");
    heroVideo.pause();
  }

  var hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  if (reduceMotion || !hasGSAP) return;

  document.documentElement.classList.add("gsap-cinematic");
  gsap.registerPlugin(ScrollTrigger);

  // Buttery smooth scroll, wired into GSAP's own ticker so ScrollTrigger stays in sync
  if (typeof window.Lenis !== "undefined") {
    var lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  // Hero pins in place while the next section scrolls up over it
  if (document.querySelector(".hero")) {
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "+=60%",
      pin: true,
      pinSpacing: true
    });
  }

  // Title arrives letter by letter on load
  var heroTitle = document.querySelector(".hero-title");
  if (heroTitle && typeof window.Splitting !== "undefined") {
    Splitting({ target: heroTitle, by: "chars" });
    gsap.from(heroTitle.querySelectorAll(".char"), {
      yPercent: 110,
      opacity: 0,
      duration: 0.9,
      stagger: 0.018,
      ease: "power3.out",
      delay: 0.15
    });
  }

  // Every other section animates in as it enters, in staggered batches
  ScrollTrigger.batch(".rv", {
    start: "top 85%",
    once: true,
    onEnter: function (batch) {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        overwrite: true
      });
    }
  });
})();
