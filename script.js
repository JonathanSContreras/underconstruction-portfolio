// wait for the entire document to load before executing the script
document.addEventListener("DOMContentLoaded", () => {  

    // get the html element with the id "jiggle-text"
    const textElement = document.getElementById("jiggle-text");  

    // store the original text content of the element
    const text = textElement.textContent;  

    // clear the original text to replace it with spans
    textElement.innerHTML = "";  

    // loop through each character in the text string
    text.split("").forEach((char, index) => {  

        // create a new span element for each character
        const span = document.createElement("span");  

        // if the character is a space, use a non-breaking space to preserve spacing
        if (char === " ") {  
            span.innerHTML = "&nbsp";  
        } else {  
            // otherwise, set the text content to the character
            span.textContent = char;  
        }  

        // add the "jiggle" class to the span for styling or animations
        span.classList.add("jiggle");  

        // apply a random animation delay between 0 and 0.5 seconds for staggered effects
        span.style.animationDelay = `${Math.random() * 0.5}s`;  

        // add the span to the text element in the document
        textElement.appendChild(span);  
    });  
});  
