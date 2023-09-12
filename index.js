// Write your code here!
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";

document.body.appendChild(newHeader);

const mainElement = document.getElementById("main");
mainElement.remove();

const elementStep2 = document.createElement("div");
document.body.appendChild(elementStep2);

const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.appendChild(li);
}

document.getElementById("step3").appendChild(ul);

const main = document.getElementById("step4");
main.innerHTML = `
  <h1>Poodles!</h1>
  <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
  <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>`;
main.style.backgroundColor = "#27647B";

const elementToChange = document.getElementById("step5");
elementToChange.style.height = "300px";
elementToChange.style.backgroundColor = "#27647B";
elementToChange.textContent = "You've changed what's on the screen!";
elementToChange.style.fontSize = "24px";
elementToChange.style.marginLeft = "30px";
elementToChange.style.lineHeight = "2";
elementToChange.className = "pet-listing dog";

const ulToRemove = document.getElementById("step6");
const secondChild = ulToRemove.querySelector("li:nth-child(2)");
ulToRemove.removeChild(secondChild);
ulToRemove.remove();
