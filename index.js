// Write your code here!
// Define a variable
const greeting = "hi";

// Remove the existing 'main' element
const mainElement = document.querySelector("main#main");
mainElement.remove();

// Create a new 'h1' element and configure it
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
