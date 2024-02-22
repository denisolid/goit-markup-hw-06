(() => {
const rems = {
    // Додати атрибут data-menu-open на кнопку відкриття
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-menu-close на кнопку закриття
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-menu на бекдроп модалки
    menu: document.querySelector("[data-menu]"),
};

rems.openMenuBtn.addEventListener("click", toggleMenu);
rems.closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    rems.menu.classList.toggle("is-open");
}
})();