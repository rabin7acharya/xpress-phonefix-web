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

// gsap.utils.toArray(".service-item").forEach((item) => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: item,
//       start: "top center",
//       end: "bottom center",
//       // markers: true,
//     },
//   });

//   tl.from(item, {
//     duration: 1,
//     y: -100,
//     opacity: 0,
//     ease: "power2.out",
//     stagger: 0.5,
//   });

//   let tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: item.querySelector(".service-asset"),
//       start: "top center",
//       end: "bottom center",
//       scrub: true,
//       markers: true,
//     },
//   });

//   tl2.to(item.querySelector(".service-asset"), {
//     duration: 1,
//     y: 0,
//     ease: "power2.out",
//   });
// });

gsap.utils.toArray(".service-item").forEach((item) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top center",
      end: "bottom center",
      // scrub: true,
      // markers: true,
    },
  });

  tl.from(item, {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.5,
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
      duration: 2,
      y: -400,
      opacity: 0,
      // amazing ease effect
      ease: "power4.out",
      stagger: 0.5,
    });
  }
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
