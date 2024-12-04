'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const cardData = document.addEventListener("")
    const card = document.querySelector(".card");  
    let isFlipped = false;

    card.addEventListener("click", () => {
        if(window.card)
        isFlipped = !isFlipped; 
        card.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
    });
});
