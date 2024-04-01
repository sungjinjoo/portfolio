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

// 각 기술의 숙련도 퍼센트
const skillPercents = {
  skibox1: "80%",
  skibox2: "90%",
  skibox3: "90%",
  skibox4: "85%",
};

// 각 기술의 숙련도에 따라 너비 설정하는 함수
function setSkillWidth() {
  for (const [skill, percent] of Object.entries(skillPercents)) {
    document.querySelector("." + skill).style.width = percent;
  }
}
/* 마우스탑버튼설정 */
window.addEventListener("scroll", function () {
  var header = document.querySelector(".top");
  var scrollPosition = window.scrollY;
  var headerHeight = header.offsetHeight;
  let aboutMe = document.querySelector(".section1").offsetHeight;

  if (scrollPosition > headerHeight) {
    header.style.position = "fixed";
    header.style.top = "0";
  } else {
    header.style.position = "relative";
  }
  if (scrollPosition > aboutMe) {
    setSkillWidth();
  }
});
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}
document.getElementById("topBtn").addEventListener("click", function() {
    // 페이지의 스크롤 위치를 맨 위로 이동시킵니다.
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

/* 노티 설정 */
const ani = bodymovin.loadAnimation({
  container: document.querySelector(".logo"),
  renderer: "svg" /* 어떤형식인지 */,
  loop: true /* 무한반복 */,
  autoplay: true /* 자동재생 */,
  path: "./json/logo.json",
});
/* 스크린스크롤 */
