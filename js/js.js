const links = gsap.utils.toArray("nav li a");
//링크마다 부드러운 섹션이동
links.forEach((el) => {
  const anc = document.querySelector(el.getAttribute("href"));
  const linkST = ScrollTrigger.create({
    trigger: anc,
    start: "top top",
  });
  ScrollTrigger.create({
    trigger: anc,
    start: "top center",
    end: "bottom center",
    onToggle: () => {
      setActive(el);
    },
  });
  el.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: linkST.start });
  });
});

//링크활성화표시
function setActive(link) {
  links.forEach((el) => {
    el.classList.remove("active");
  });
  link.classList.add("active");
}

ScrollTrigger.create({
  start: "top-80",
  end: 999999,
  markers: true,
  toggleClass: {
    className: "active",
    targets: "nav",
  },
});
