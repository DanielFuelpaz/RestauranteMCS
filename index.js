const heading1 = document.getElementById("colorful-heading-1");
const text = heading1.textContent;

const colors = [
  "red", "blue", "green", "orange", "purple", "brown",
  "teal", "maroon", "navy", "olive", "fuchsia", "aqua",
  "lime", "silver", "black", "gray", "rgb(204, 153, 102)"
]; // Colores para las letras

heading1.innerHTML = ""; // Remover el contenido original del heading1

for (let i = 0; i < text.length; i++) {
  const letter = text[i];
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.color = colors[i % colors.length]; // Asigna un color diferente a cada letra

  heading1.appendChild(span);
}


document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los elementos de navegación
  var navItems = document.querySelectorAll(".navbar-nav .nav-link");

  // Agregar el evento de clic a cada elemento de navegación
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Verificar si ya existe un elemento activo
      var activeItem = document.querySelector(".navbar-nav .nav-link.active");

      // Desactivar el elemento activo si existe
      if (activeItem) {
        activeItem.classList.remove("active");
      }

      // Activar el elemento clicado
      this.classList.add("active");
    });
  });
});
