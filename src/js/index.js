const hamburger = document.querySelector("#hamburger");
const navMobile = document.querySelector(".nav-part-2");
let isClosed = true

hamburger.addEventListener("click", function (e) {
    navMobile.style.display = isClosed ? "block" : "none";
    isClosed = !isClosed
})