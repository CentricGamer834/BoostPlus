function carouseReviews() {
    const previousBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const reviewImg = document.getElementById("review");
    let curReview = 0;

    previousBtn.addEventListener("click", () => {
        curReview = --curReview;
        reviewImg.src = `./assets/images/reviews/${curReview}.png`;
    });

    nextBtn.addEventListener("click", () => {
        curReview = ++curReview;
        reviewImg.src = `./assets/images/reviews/${curReview}.png`;
    });
}

function redirect() {
    location.href = "https://discord.gg/RUBwVP9B57";
}

function main() {
    carouseReviews();
}

window.onload = main;
