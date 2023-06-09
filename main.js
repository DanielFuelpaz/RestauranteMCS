const heading1 = document.getElementById("colorful-heading-1");
const heading2 = document.getElementById("colorful-heading-2");

const words1 = heading1.textContent.split(" ");
const words2 = heading2.textContent.split(" ");

const colors = [
  "red", "blue", "green", "orange", "purple", "brown",
  "teal", "maroon", "navy", "olive", "fuchsia", "aqua",
  "lime", "silver", "black", "gray", "rgb(204, 153, 102)"
]; // Colores para las palabras

heading1.innerHTML = ""; // Remover el contenido original del heading1
heading2.innerHTML = ""; // Remover el contenido original del heading2

words1.forEach((word, index) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.color = colors[index % colors.length]; // Asigna un color diferente a cada palabra

  heading1.appendChild(span);

  if (index !== words1.length - 1) {
    const space = document.createTextNode(" ");
    heading1.appendChild(space);
  }
});

words2.forEach((word, index) => {
  const span = document.createElement("span");
  span.textContent = word;
  span.style.color = colors[index % colors.length]; // Asigna un color diferente a cada palabra

  heading2.appendChild(span);

  if (index !== words2.length - 1) {
    const space = document.createTextNode(" ");
    heading2.appendChild(space);
  }
});