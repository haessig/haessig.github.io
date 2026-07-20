const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "👋 Hello! Nice to meet you.";
});