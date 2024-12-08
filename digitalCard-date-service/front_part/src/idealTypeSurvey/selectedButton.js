document.addEventListener("DOMContentLoaded", () => {
    // 선택 가능한 모든 요소 가져오기
    const selectableDivs = document.querySelectorAll(".survey_section-container div[id]");
  
    selectableDivs.forEach((div) => {
      div.addEventListener("click", () => {
        // 선택된 상태를 토글 (추가/제거)
        div.classList.toggle("selected");
      });
    });
  });
  