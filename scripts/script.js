gsap.from("nav", {
  duration: 1,
  y: -100,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out",
});

gsap.from(".hero-section", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".hero-section p", {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".hero-ctas", {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".hero-asset-i", {
  duration: 1,
  y: 100,
  opacity: 0,
  delay: 1.5,
  ease: "power2.out",
});

const arrowBtn = document.querySelectorAll(".arrow-btn");

arrowBtn.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    gsap.to(btn, {
      duration: 0.5,
      //expand width from initial position
      width: 95,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseout", () => {
    gsap.to(btn, {
      duration: 0.5,
      width: 80,
      ease: "power2.out",
    });
  });
});

gsap.utils.toArray(".service-item").forEach((item) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top +=1000",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });

  tl.from(item, {
    duration: 1,
    x: -100,
    y: 100,
    opacity: 0,
    ease: "power2.out",
  });

  let asset = item.querySelector(".service-asset");

  if (asset) {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    tl2.from(asset, {
      duration: 8,
      x: 400,
      opacity: 0,
      // amazing ease effect
      ease: "power4.out",
      stagger: 0.5,
    });
  }
});

gsap.utils.toArray(".blog-item").forEach((item) => {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top right",
      end: "bottom bottom -=1200",
      scrub: true,
      // markers: true,
    },
  });

  tl3.from(item, {
    duration: 4,
    opacity: 0,
    scale: 0.5,
    // rotation: 1,
    skewX: -10,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".card").forEach((card) => {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      // start form 400px below top center
      start: "top +=1500",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
  });

  tl4.from(card, {
    duration: 4,
    x: -400,
    y: 200,
    scale: 0.2,
    skewX: 10,
    opacity: 0,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".contact-info").forEach((content) => {
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: content,
      // start form 400px below top center
      start: "top +=1500",
      end: "bottom +=400",
      scrub: true,
      // markers: true,
    },
  });

  t.from(content, {
    duration: 4,
    x: -400,
    scale: 0.1,
    rotate: 25,
    opacity: 0,
    ease: "power2.out",
  });
});

gsap.utils.toArray(".accordion").forEach((acc) => {
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: acc,
      // start form 400px below top center
      start: "top +=1000",
      end: "bottom +=400",
      scrub: true,
      // markers: true,
    },
  });

  t.from(acc, {
    duration: 4,
    x: -400,
    scale: 0.1,
    rotate: 25,
    opacity: 0,
    ease: "power2.out",
  });
});

// Select all the accordion elements
const accordions = document.querySelectorAll(".accordion");
const icons = document.querySelectorAll(".accordion-icon");

// Function to toggle the accordion content and rotate the icon
function toggleAccordion(index) {
  const accordion = accordions[index];
  const content = accordion.querySelector(".accordion-content");
  const icon = icons[index];

  if (content.classList.contains("hidden")) {
    content.style.maxHeight = "0";
    gsap.to(content, { maxHeight: "1000px", duration: 0.5, ease: "ease-out" });
    gsap.to(icon, { rotate: "180deg", duration: 0.5 });
    content.classList.remove("hidden");
  } else {
    gsap.to(content, {
      maxHeight: "0",
      duration: 0.5,
      ease: "ease-in",
      onComplete: hideContent,
    });
    gsap.to(icon, { rotate: "0deg", duration: 0.5 });
  }

  function hideContent() {
    content.style.maxHeight = "0";
    content.classList.add("hidden");
  }
}

// Add click event listeners to each accordion header
accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".toggle-accordion");
  header.addEventListener("click", () => {
    toggleAccordion(index);
  });
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
