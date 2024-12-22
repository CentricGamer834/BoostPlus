function carouseReviews() {
    let curReview = 0;
    function changeReview() {
        if (curReview === 2) curReview = 0;

        document.getElementById(
            "carousell"
        ).innerHTML = `<img class="review" src="./assets/images/reviews/${curReview}.png" alt="Review #${curReview}"/>`;

        curReview = ++curReview;
    }

    changeReview();
    setInterval(changeReview, 5000);
}

function redirect() {
    location.href = "https://discord.gg/RUBwVP9B57";
}

function main() {
    carouseReviews();
}

window.onload = main;
