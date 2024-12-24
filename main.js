function carouseReviews() {
    const previousBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const reviewImg = document.getElementById("review");
    const maxReviews = 3;
    let curReview = 0;

    const updateReviewImage = () => {
        reviewImg.src = `./assets/images/reviews/${curReview}.png`;
        previousBtn.disabled = curReview === 0;
        nextBtn.disabled = curReview === maxReviews - 1;
    };

    previousBtn.addEventListener("click", () => {
        if (curReview > 0) {
            curReview--;
            updateReviewImage();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (curReview < maxReviews - 1) {
            curReview++;
            updateReviewImage();
        }
    });

    updateReviewImage();
}

function redirect() {
    window.open("https://discord.gg/RUBwVP9B57", "_blank");
}

window.onload = carouseReviews;
