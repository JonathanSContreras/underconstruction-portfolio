document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("jiggle-text");
    const text = textElement.textContent;
    textElement.innerHTML = ""; // Clear original text

    text.split("").forEach((char, index) => {
        const span = document.createElement("span");

        if (char === " "){
            span.innerHTML = "&nbsp";
        } else{
            span.textContent = char;
        }

        span.classList.add("jiggle");

        span.style.animationDelay = `${Math.random() * 0.5}s`;

        textElement.appendChild(span);
    });
});