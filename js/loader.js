// Wait for the page to load
window.addEventListener("load", () => {
    // GSAP Timeline for loader animations
    const tl = gsap.timeline();

    // Animate clip-top and clip-bottom elements
    tl.from(".clip-top, .clip-bottom", {
        duration: 2,
        height: "50vh",
        ease: "power4.inOut",
    })
    .to(".marquee", {
        duration: 3,
        top: "50%",
        ease: "power4.inOut",
    }, "-=1.5") // Overlap marquee animation
    .from(".clip-top .marquee, .clip-bottom .marquee", {
        duration: 5,
        left: "100%",
        ease: "power3.inOut",
    }, "-=2") // Overlap marquee slide-in animation
    .from(".clip-center .marquee", {
        duration: 5,
        left: "-50%",
        ease: "power3.inOut",
    }, "-=4") // Overlap center marquee animation
    .to(".clip-top", {
        duration: 2,
        clipPath: "inset(0 0 100% 0)",
        ease: "power4.inOut",
    }, "-=2") // Overlap clip-top clipPath animation
    .to(".clip-bottom", {
        duration: 2,
        clipPath: "inset(100% 0 0 0)",
        ease: "power4.inOut",
    }, "-=2") // Overlap clip-bottom clipPath animation
    .to(".loader", {
        duration: 1,
        opacity: 0,
        ease: "power2.out",
    }, "-=1") // Fade out loader
    .call(() => {
        // Hide the loader after animation
        const loader = document.querySelector(".loader");
        loader.style.zIndex = "-1"; // Lower z-index so it no longer blocks content
        loader.style.display = "none"; // Optionally remove it from the flow
    });
});
