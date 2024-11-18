(() => {
  hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    { title: "Noise Cancellation", text: "Premium rubber tips with a sealed fit that cancels all background noise.", img: "images/poster.png" },
    { title: "Fast-Charge Battery", text: "Long lasting battery that fully recharges in a single hour.", img: "images/poster.png" },
    { title: "Flexible Handle", text: "Malleable and ergonomic handle designed for hours of comfortable use.", img: "images/poster.png" },
    { title: "Rotating Handle", text: "Handles with up to 90 degree rotation that adapt to all ear shapes.", img: "images/poster.png" }
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

