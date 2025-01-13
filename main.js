function carouseReviews() {
    const previousBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const reviewImg = document.getElementById("review");
    const maxReviews = 4;
    let curReview = 1;

    const updateReviewImage = () => {
        reviewImg.src = `./assets/images/reviews/${curReview}.png`;
        previousBtn.disabled = curReview === 1;
        nextBtn.disabled = curReview === maxReviews;
    };

    previousBtn.addEventListener("click", () => {
        if (curReview > 0) {
            curReview--;
            updateReviewImage();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (curReview < maxReviews) {
            curReview++;
            updateReviewImage();
        }
    });

    updateReviewImage();
}

function redirect() {
    window.open("https://discord.gg/RUBwVP9B57", "_blank");
}

document.querySelectorAll(".purchase-btn,.discord").forEach(function (btn) {
    btn.addEventListener("click", redirect);
});

window.onload = carouseReviews;
