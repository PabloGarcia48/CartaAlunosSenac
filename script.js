const button = document.getElementById("animatedButton");
const flap = document.querySelector(".flap");
const message = document.querySelector(".message");

button.addEventListener("click", () => {
    flap.classList.add("open");

    message.classList.add("visible");
})