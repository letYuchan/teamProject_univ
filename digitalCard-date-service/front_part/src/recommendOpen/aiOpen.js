'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const randomizeButton = document.getElementById('randomizeButton');
    const confirmButton = document.getElementById('confirmButton');
    const cardBack = document.querySelector('.card-back'); 
    const animalImage = document.querySelector('.card-image img'); 
    const infoRows = document.querySelectorAll('.info-row.hidden'); 

    const cardInfo = {
        gender: document.querySelector('.gender'),
        name: document.querySelector('.name'),
        major: document.querySelector('.major'),
        studentID_age: document.querySelector('.studentID_age'),
        mbti: document.querySelector('.mbti'),
        hobbies: document.querySelector('.hobbies'),
        contact: document.querySelector('.contact'),
    };

    let isRecommendationOpened = false; 

    async function fetchRecommendedCard() {
        try {
            const response = await fetch('https://example.com/api/recommended-card'); 
            if (!response.ok) {
                throw new Error('Failed to fetch recommended card');
            }
            alert("명함을 가져왔습니다 카드를 클릭해주세요.");
            return await response.json();
        } catch (error) {
            alert('명함을 가져오는데 실패했습니다.');
        }
    }

    function updateCardUI(data) {
        if (!data) return;

        cardBack.style.backgroundImage = `url(${data.backgroundImage})`; 
        animalImage.src = data.image; 
        cardInfo.gender.textContent = data.gender;
        cardInfo.name.textContent = data.name;
        cardInfo.major.textContent = data.department;
        cardInfo.studentID_age.textContent = data.yearAge;
        cardInfo.mbti.textContent = data.mbti;
        cardInfo.hobbies.textContent = data.hobbies;
        cardInfo.contact.textContent = data.contact;
    }

    randomizeButton.addEventListener('click', async () => {
        if (isRecommendationOpened) {
            alert("더 이상 카드오픈을 누를 수 없습니다."); 
            return;
        }

        const recommendedCardData = await fetchRecommendedCard(); 
        if (recommendedCardData) {
            updateCardUI(recommendedCardData);
            randomizeButton.disabled = true; 
            confirmButton.disabled = false; 
            isRecommendationOpened = true; 
        }
    });

    confirmButton.addEventListener('click', () => {
        const confirmAction = confirm("해당 카드를 확정하시겠습니까?");
        if (confirmAction) {
            infoRows.forEach(row => row.querySelector('.value').style.visibility = 'visible'); 
            confirmButton.disabled = true; 
        }
    });
});
