function carouseReviews() {
    let curReview = 0;
    function changeReview() {
        if (curReview === 4) curReview = 0;

        document.getElementById(
            "carousell"
        ).innerHTML = `<img class="review" src="./images/reviews/${curReview}.png" alt="Review #${curReview}"/>`;

        curReview = ++curReview;
    }

    changeReview();
    setInterval(changeReview, 5000);
}

function redirect() {
    location.href = "https://discord.gg/jm9HBEbupm";
}


function main() {
    carouseReviews();
}

window.onload = main;
