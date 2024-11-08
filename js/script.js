(() => {

  const model = document.querySelector("#model"),
  hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    { title: "Noise Cancellation", text: "Premium rubber tips with a sealed fit that cancels all background noise.", img: "images/hotspot_img-01.svg" },
    { title: "Fast Charging Battery", text: "Long lasting battery that fully recharges in a single hour.", img: "images/hotspot_img-04.svg" },
    { title: "Flexible Handle", text: "Malleable and ergonomic handle designed for hours of comfortable use.", img: "images/hotspot_img-03.svg" },
    { title: "Rotating Handle", text: "Handles with up to 180 degree rotation that adapt to all ear shapes.", img: "images/hotspot_img-02.svg" }
  ];

  function loadInfo() {
    infoBoxes.forEach((box, index) => {
      let selected = document.querySelector(`#hotspot-${index+1}`);
      const title = document.createElement("h2");
      const paragraph = document.createElement("p");
      const image = document.createElement("img");

      title.classList.add('appear'), paragraph.classList.add('appear'), image.classList.add('appear');

      title.textContent = box.title;
      paragraph.textContent = box.text;
      image.src = box.img;

      selected.append(title, paragraph, image);
    });
  }

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);

    let tl = gsap.timeline();
    tl.to(selected, { duration: .3, autoAlpha: 1, scale: 1, transformOrigin: '0% 0%', ease: 'sine.inOut'})
    .to(".appear", { delay: .3, duration: .3, autoAlpha: 1, ease: 'sine.inOut' });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);

    let tl = gsap.timeline();
    tl.to(".appear", { duration: .3, autoAlpha: 0, ease: 'sine.inOut' })
    .to(selected, { delay: .3, duration: .3, autoAlpha: 0, scale: 0, ease: 'sine.out' });
  }

  model.addEventListener("load", loadInfo);

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();

