(() => {
const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-modal-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-modal-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
}



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