(() => {
  const slideContainer = document.querySelectorAll('.slide-up-container'),
  fadeContainer = document.querySelectorAll('.fade-container'),
  slideText = document.querySelectorAll('.side-border h2');

  slideText.forEach(container => {
    gsap.fromTo(container, {x: '-110%'},
        {x: 0, duration: .5, delay: 1, ease: 'power4.out',
            scrollTrigger: {trigger: container, start: 'center center'}
        });
  });

  fadeContainer.forEach(container => {
    gsap.fromTo(container, {opacity: 0},
        {opacity: 1, duration: 1, delay: 1, ease: 'power2.out',
            scrollTrigger: {trigger: container, start: 'top center'}
        });
  });
  
  slideContainer.forEach(container => {
    gsap.fromTo(container, {opacity: 0, y: 60},
        {opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: {trigger: container, start: 'top center'}
        });
  });

})();


(() => {
  const burger = document.querySelector('#burger'),
  menu = document.querySelector("#top-menu");

  function removeMenu() {
    menu.classList.remove('open');
    burger.classList.remove('rotate');
  }
    
  function toggleMenu() {
    if (window.innerWidth <= 768) {
        menu.classList.toggle('open');
        burger.classList.toggle('rotate');
    
        if (menu.classList.contains('open')) {
            console.log('open mobile menu');
        }

        else {
            console.log('close mobile menu');
            removeMenu(); }
    }
  }

  function resizeMenu() {
    if (window.innerWidth >= 768) {
        removeMenu();
    }
  }

  burger.addEventListener('click', toggleMenu);
  window.addEventListener('resize', resizeMenu);

})();

(() => {
  const canvas = document.querySelector(".sequence");
  const context = canvas.getContext("2d");

  canvas.width = 1200;
  canvas.height = 1080;

  const frameCount = 160;
  const images = [];
  const sequence = { frame: 0 };

  for(let i = 0; i < frameCount; i++){
      const img = new Image();
      img.src =`images/sequence/website${(i + 1).toString().padStart(3, '0')}.webp`;
      images.push(img);
  }

  gsap.to(sequence, {
      frame: 159,
      snap: "frame",
      scrollTrigger: { trigger: ".sequence", pin: true, scrub: 2, start: "top top" }, onUpdate: render
  });
  
  images[0].addEventListener("load", render);

  function render(){
      context.clearRect(0,0, canvas.width, canvas.height);
      console.log(images[sequence.frame]);
      context.drawImage(images[sequence.frame], 0, 0);
  }
})();

(() => {
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    { title: "Noise Cancellation", text: "Premium rubber tips with a sealed fit that cancels all background noise.", img: "images/hotspot1.jpg" },
    { title: "Fast-Charge Battery", text: "Long lasting battery that fully recharges in a single hour.", img: "images/hotspot2.jpg" },
    { title: "Rotating Handle", text: "Handles with up to 90 degree rotation that adapt to all ear shapes.", img: "images/hotspot4.jpg" },
    { title: "Flexible Handle", text: "Malleable and ergonomic handle designed for hours of comfortable use.", img: "images/hotspot3.jpg" }
  ];

  function loadInfo() {
    infoBoxes.forEach((box, index) => {
      let card = document.querySelector(`#mobile-card-${index+1}`);
      let hotspot = document.querySelector(`#hotspot-${index+1}`);

        card.innerHTML = `<div class="shape">
        <div class="hexagon"><p>${index+1}</p></div>
        <div class="side-line"></div></div>

        <div class="info">
        <h3 class="title">${infoBoxes[index].title}</h3>
        <p>${infoBoxes[index].text}</p>
        <img src="${infoBoxes[index].img}"></img>
        </div>`

        hotspot.innerHTML = `<h2 class="appear title">${infoBoxes[index].title}</h2>
        <p class="appear">${infoBoxes[index].text}</p>
        <img class="appear" src="${infoBoxes[index].img}"></img>`
    });
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    
    gsap.to(selected, { duration: .3, autoAlpha: 1, scale: 1, transformOrigin: '0% 0%', ease: 'sine.inOut'});
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);

    gsap.to(selected, { delay: .3, duration: .3, autoAlpha: 0, scale: 0, ease: 'sine.out' });
  }

  loadInfo();

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

(() => {
  const divisor = document.querySelector(".xray");
  const slider = document.querySelector(".inputRange")

  function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = `${slider.value}px`;
  }

  slider.addEventListener("input", moveDivisor);
})();

(() => {
  const prevColour = document.querySelector("#colours .left"),
  nextColour = document.querySelector("#colours .right"),
  prevTestimonial = document.querySelector("#testimonials .left"),
  nextTestimonial = document.querySelector("#testimonials .right"),
  colourCards = document.querySelectorAll(".colour-card"),
  testimonialCards = document.querySelectorAll(".testimonial-card");

  let colourIndex = 0;
  let testimonialIndex = 0;

  function resizeCards() {
    if (window.innerWidth >= 1200) {
      colourCards.forEach(card => {
        card.style.transform = 'translateX(0)';
      });

      testimonialCards.forEach(card => {
        card.style.transform = 'translateX(0)';
      });
    }
  }

  function moveCards(cards, index) {
    const newTranslateX = -index * 100 + '%';

    if (window.innerWidth < 1200) {
      cards.forEach(card => {
        card.style.transform = 'translateX(' + newTranslateX + ')';
      });
    }

    else {
      cards.forEach(card => {
        card.style.transform = 'translateX(0)';
      });
    }
  }

  function nextCard(container) {
    if (container === "colours") {
      colourIndex++;

      if (colourIndex >= 3) {
        colourIndex = 2;
      }

      moveCards(colourCards, colourIndex);
    }

    if (container === "testimonials") {
      testimonialIndex++;

      if (testimonialIndex >= 2) {
        testimonialIndex = 1;
      }

      moveCards(testimonialCards, testimonialIndex);
    }
  }

  function prevCard(container) {
    if (container === "colours") {
      colourIndex--;

      if (colourIndex < -1) {
        colourIndex = -1;
      }

      moveCards(colourCards, colourIndex);
    }

    if (container === "testimonials") {
      testimonialIndex--;

      if (testimonialIndex < 0) {
        testimonialIndex = 0;
      }

      moveCards(testimonialCards, testimonialIndex);
    }
  }

  prevColour.addEventListener("click", () => prevCard("colours"));
  nextColour.addEventListener("click", () => nextCard("colours"));
  
  prevTestimonial.addEventListener("click", () => prevCard("testimonials"));
  nextTestimonial.addEventListener("click", () => nextCard("testimonials"));

  window.addEventListener("resize", resizeCards);

})();

console.log('JS is working');