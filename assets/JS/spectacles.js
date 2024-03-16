let heartCount = 0;

function changeHeart(event) {
    var heart = event.target;
    if (heart.src.match(/heart_empty/)) {
        heart.src = "/assets/img/heart_full.png";
        heartCount++;
    } else {
        heart.src = "/assets/img/heart_empty.png";
        heartCount--;
    }
    document.querySelector(".spectacles__aimes").textContent = `Nombre de spectacles aimés → ${heartCount}`;
}