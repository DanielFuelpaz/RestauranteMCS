
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
