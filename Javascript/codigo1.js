document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item > a");

    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = item.parentElement;

            // Cierra todos los submenús antes de abrir el seleccionado
            const allSubmenus = document.querySelectorAll('.submenu');
            allSubmenus.forEach(submenu => submenu.style.display = 'none');

            // Abre el submenu
            parent.querySelector('.submenu').style.display = 'block';

        });
    });
});