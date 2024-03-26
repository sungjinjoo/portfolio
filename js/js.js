
const el = document.querySelector(".followAnimation");
//마우스 좌표
let mouseX = 0;
let mouseY = 0;
//요소좌표
let currentX = 0;
let currentY = 0;
//브라우저의 마우스 좌표값얻기
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  console.log(mouseX, mouseY);
});
tick();
function tick() {
  requestAnimationFrame(tick);
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  //console.log(currentX);

  //el.style.left = currentX+'px';
  //el.style.top = currentY+'px';
  el.style.transform = `translate(${currentX}px,${currentY}px )`;
}
//퍼센트바
document.addEventListener('DOMContentLoaded', function() {
  // 각 기술의 숙련도 퍼센트
  const skillPercents = {
      'skibox1': '80%',
      'skibox2': '90%',
      'skibox3': '90%',
      'skibox4': '85%'
  };

  // 각 기술의 숙련도에 따라 너비 설정
  for (const [skill, percent] of Object.entries(skillPercents)) {
      document.querySelector('.' + skill).style.width = percent;
  }
});







/* transform:translate(-50%,-50%) */

/* const links = gsap.utils.toArray("nav li a"); */
//링크마다 부드러운 섹션이동
 /* links.forEach((el) => {
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
});  */

