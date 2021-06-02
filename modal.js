const modal = document.getElementById('modal');
const btn = document.getElementById("button");
const span = document.getElementsByClassName("modal-close is-large")[0];

btn.addEventListener("click", function () {
    console.log("I've been clicked!");
    modal.style.display = "block";
})

span.addEventListener("click", function () {
    modal.style.display = "none";
}
);

window.addEventListener("click", function (event) {
    if (event.target == modal) { modal.style.display = "none"; }
}
);

window.addEventListener("keydown", function (e) {
    if (e.keyCode == 27 && modal.style.display == "block") {
        modal.style.display = "none";
    }
});