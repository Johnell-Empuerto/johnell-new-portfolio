window.addEventListener("load", () => {
    // GSAP Timeline for loader animations
    const tl = gsap.timeline();

    // Animate loader elements
    tl.from(".clip-top, .clip-bottom", {
        duration: 2,
        height: "50vh",
        ease: "power4.inOut",
    })
    .to(".marquee", {
        duration: 3,
        top: "50%",
        ease: "power4.inOut",
    }, "-=1.5")
    .from(".clip-top .marquee, .clip-bottom .marquee", {
        duration: 5,
        left: "100%",
        ease: "power3.inOut",
    }, "-=2")
    .from(".clip-center .marquee", {
        duration: 5,
        left: "-50%",
        ease: "power3.inOut",
    }, "-=4")
    .to(".clip-top", {
        duration: 2,
        clipPath: "inset(0 0 100% 0)",
        ease: "power4.inOut",
    }, "-=2")
    .to(".clip-bottom", {
        duration: 2,
        clipPath: "inset(100% 0 0 0)",
        ease: "power4.inOut",
    }, "-=2")
    .to(".loader", {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
    }, "-=1")
    .call(() => {
        // Hide the loader and show content
        document.querySelector(".loader").style.display = "none";
        document.body.classList.add("loaded");
    });
});
