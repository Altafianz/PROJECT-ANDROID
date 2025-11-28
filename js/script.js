// aktif navbar, shoppingcart
const navbarNav = document.querySelector('.navbar-nav');
const shoppingcart = document.querySelector('.shopping-cart');

// menu di klik
document.querySelector('#cart-icon').onclick = () => {
    shoppingcart.classList.toggle('active');
}
document.querySelector('#menu-icon').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik di luar sidebar untuk menghilangkan navbarnya
const menu = document.querySelector('#menu-icon');
const cart = document.querySelector('#cart-icon');
const trash = document.querySelector(".add-cart")

document.addEventListener('click', function(e) {
    if (e.target.closest('.remove-item')) {
        return;
    }
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!cart.contains(e.target) && !shoppingcart.contains(e.target)) {
        shoppingcart.classList.remove('active');
    }
});

// ====== Fitur Keranjang =========

