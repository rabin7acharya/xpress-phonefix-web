gsap.from("nav", {
  duration: 1,
  y: -100,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out",
});

gsap.from(".hero-section h1", {
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
  // fade in at current position
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

gsap.from(".service-section > div:first-child", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".service-section > div:nth-child(2)", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".service-section > div:nth-child(3)", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power2.out",
});

gsap.from(".service-section > div:nth-child(4)", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power2.out",
});
