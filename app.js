var tl = gsap.timeline();

tl.from("#nav", 2, { autoAlpha: 0, ease: "power2.in" })
    .staggerFrom(".ani-intro", 1, { autoAlpha: 0, y: 10, ease: "power2.in" }, 0.4, "-=1")
    .staggerTo(".underline", 1, { textDecoration: "underline", ease: "power2.in", delay: .5 }, 0.2)



