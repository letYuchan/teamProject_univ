document.addEventListener("DOMContentLoaded", () => {
    // MBTI 그룹의 모든 div 가져오기
    const mbtiGroups = document.querySelectorAll(".mbti-group");
  
    mbtiGroups.forEach((group) => {
      const mbtiOptions = group.querySelectorAll("div[id]");
  
      mbtiOptions.forEach((option) => {
        option.addEventListener("click", () => {
          // 해당 그룹에서 이미 선택된 요소 해제
          mbtiOptions.forEach((opt) => opt.classList.remove("selected"));
  
          // 현재 클릭한 요소 선택
          option.classList.add("selected");
        });
      });
    });
  
    // 나머지 요소 처리 (선택 제한 없음)
    const selectableDivs = document.querySelectorAll(".survey_section-container div[id]:not(.mbti-group div[id])");
  
    selectableDivs.forEach((div) => {
      div.addEventListener("click", () => {
        div.classList.toggle("selected");
      });
    });
  });
  