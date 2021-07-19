// *********** Fade in Animations ****************

const fadeIn = document.querySelectorAll(".fade-in");

const fadeInOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const fadeInOnScroll = new IntersectionObserver((entries,fadeInOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear");
      fadeInOnScroll.unobserve(entry.target);
    }
  })
  
},fadeInOptions);

fadeIn.forEach(fade => {
  fadeInOnScroll.observe(fade);
  
})