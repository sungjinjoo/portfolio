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

    // 각 기술의 숙련도에 따라 너비 설정하는 함수
    function setSkillWidth() {
        for (const [skill, percent] of Object.entries(skillPercents)) {
            document.querySelector('.' + skill).style.width = percent;
        }
    }

    // 페이지 로드시와 스크롤 이벤트가 발생할 때마다 실행
    setSkillWidth();
    window.addEventListener('scroll', setSkillWidth);
}
)
window.addEventListener('scroll', function() {
  var header = document.querySelector('.top');
  var scrollPosition = window.scrollY;
  var headerHeight = header.offsetHeight;

  if (scrollPosition > headerHeight) {
      header.style.position = 'fixed';
      header.style.top = '0';
  } else {
      header.style.position = 'relative';
  }
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}