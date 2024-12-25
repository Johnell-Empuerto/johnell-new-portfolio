// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


// Create a timeline for the animations
const wl = gsap.timeline({
  scrollTrigger: {
    trigger: ".head-animate", // Element to trigger the animation
    start: "top 90%", // When the top of the section reaches 70% of the viewport
    end: "bottom 10%", // Optional: End of the trigger zone
    toggleActions: "play none none none", // Play animation on scroll in
    markers: false, // Debugging markers (optional, remove in production)
  },
});

// Animate each letter of the word "Web Solutions"
wl.fromTo(".heading-animate", {
  x: "-100%", // Start from the left (off-screen)
  opacity: 0, // Start with hidden letters
}, {
  x: "0%", // Move to original position
  opacity: 1, // Fade in
  color: "#2ecc71", // Change text color to white
  duration: 0.5, // Duration of each letter's animation
  stagger: 0.1, // Stagger the animation of each letter by 0.1s
  ease: "power2.out", // Smooth easing
  delay: 7, // Add a 0.5-second delay before the animation starts
});

// Create a timeline for the animations
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4-left", // Element to trigger the animation
    start: "top 80%", // When the top of the section reaches 80% of the viewport
    end: "bottom 60%", // Optional: End of the trigger zone
    toggleActions: "play none none none", // Play animation on scroll in
    markers: false, // Debugging markers (optional, remove in production)
  },
});

// Animate "Digital" sliding in from the left
tl.to(".digital", {
  x: 0, // Move to original position
  opacity: 1, // Fade in
  duration: 1.5, // Animation duration
  ease: "power2.out", // Smooth easing
});

// Animate "Craft" fading in from the top
tl.to(".craft", {
  y: 0, // Move to original position
  opacity: 1, // Fade in
  duration: 1, // Animation duration
  ease: "power2.out",
}, "-=0.5"); // Overlap by 0.5 seconds


// Create the zoom-in animation
gsap.fromTo(".zoom-image", {
  scale: 0.5, // Initial scale (zoomed out)
  opacity: 0, // Slightly transparent
}, {
  scale: 1, // Zoom in
  opacity: 1, // Fully visible
  duration: 1, // Duration of the animation
  ease: "power2.out", // Smooth easing
  scrollTrigger: {
    trigger: ".image-container", // Element to trigger the animation
    start: "top 90%", // Trigger when the top of the container reaches 80% of the viewport
    end: "top 10%", // Optional: End of the trigger zone
    toggleActions: "play none none none", // Play animation on scroll in
    markers: false, // Debugging markers (optional, remove in production)
  },
});

// Create the zoom-in animation
gsap.fromTo(".zoom-left", {
  x: "100%", // Start from the left (off-screen)
  opacity: 0, // Slightly transparent
}, {
  x: "0%", // Move to original position
  opacity: 1, // Fully visible
  duration: 1.5, // Duration of the animation
  ease: "power2.out", // Smooth easing
  scrollTrigger: {
    trigger: ".image-container", // Element to trigger the animation
    start: "top 90%", // Trigger when the top of the container reaches 80% of the viewport
    end: "top 10%", // Optional: End of the trigger zone
    toggleActions: "play none none none", // Play animation on scroll in
    markers: false, // Debugging markers (optional, remove in production)
  },
});


// Animate the line from right to left
gsap.to(".bold-line", {
  width: "100%", // Expand to full width
  duration: 1.5, // Duration of the animation
  ease: "power2.out", // Smooth easing
  scrollTrigger: {
    trigger: ".bold-line", // Element to trigger the animation
    start: "top 50%", // When the top of the line reaches 80% of the viewport
    end: "top 60%", // Optional: End of the trigger zone
    toggleActions: "play none none none", // Play animation on scroll in
    markers: false, // Debugging markers (remove in production)
  },
});


    // Change background color of the body on scroll
    gsap.to(".main", {
      scrollTrigger: {
        trigger: ".blue", // Start when .section.two enters the viewport
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      backgroundColor: "#2ecc71", // Target color
    });


    // Create a timeline for the animations
const xl = gsap.timeline({
  scrollTrigger: {
    trigger: ".xl-sec", // Element to trigger the animation
    start: "top 60%", // When the top of the section reaches 60% of the viewport
    end: "bottom 40%", // Optional: End of the trigger zone
    toggleActions: "play none none none", // Play animation on scroll in
    markers: false, // Debugging markers (optional, remove in production)
  },
});

// Animate each letter of the word "Developer"
xl.fromTo(".show-container1", {
  x: "-100%", // Start from the left (off-screen)
  opacity: 0, // Start with hidden letters
}, {
  x: "0%", // Move to original position
  opacity: 1, // Fade in
  duration: 1.5, // Duration of each letter's animation
  stagger: 0.1, // Stagger the animation of each letter by 0.1s
  ease: "power2.out", // Smooth easing
});


// Animate each letter of the word "Developer"
xl.fromTo(".show-container2", {
  x: "-100%", // Start from the left (off-screen)
  opacity: 0, // Start with hidden letters
}, {
  x: "0%", // Move to original position
  delay: 0.5, // Add a 1-second delay before the animation starts
  opacity: 1, // Fade in
  duration: 1, // Duration of each letter's animation
  stagger: 0.1, // Stagger the animation of each letter by 0.1s
  ease: "power2.out", // Smooth easing
});

// Animate each letter of the word "Developer"
xl.fromTo(".show-container3", {
  x: "-100%", // Start from the left (off-screen)
  opacity: 0, // Start with hidden letters
}, {
  x: "0%", // Move to original position
  delay: 1, // Add a 1-second delay before the animation starts
  opacity: 1, // Fade in
  duration: 1, // Duration of each letter's animation
  stagger: 0.1, // Stagger the animation of each letter by 0.1s
  ease: "power2.out", // Smooth easing
});


// Animate each card
gsap.from(".custom-card", {
  scrollTrigger: {
      trigger: ".card-row-1",
      start: "top 80%",
      markers: false, // Debugging markers
  },
  opacity: 0,
  y: 50, // Move up from 50px
  duration: 0.6,
  stagger: 0.2, // Delay between each card animation
  ease: "power3.out", // Smooth easing
});



// Animate image on forms
gsap.from(".contact-image", {
  scrollTrigger: {
      trigger: ".card-row-2",
      start: "top 50%",
      markers: false, // Debugging markers
  },
  opacity: 0,
  y: 50, // Move up from 50px
  duration: 1.6,
  stagger: 0.2, // Delay between each card animation
  ease: "power3.out", // Smooth easing
});