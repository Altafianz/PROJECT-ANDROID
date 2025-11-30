// aktif navbar, shoppingcart
const navbarNav = document.querySelector('.navbar-nav');
const shoppingcart = document.querySelector('.shopping-cart');
const menu = document.querySelector('#menu-icon ');
const cart = document.querySelector('#cart-icon');

// menu di klik
if (menu) {
    menu.onclick = () => {
        navbarNav.classList.toggle('active');
        if(shoppingcart)  shoppingcart.classList.remove('active');
    }
}

if (cart) {
    cart.onclick = () => {
        shoppingcart.classList.toggle('active');
        navbarNav.classList.remove('active');
    }
}

// klik di luar sidebar untuk menghilangkan navbarnya
document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!cart.contains(e.target) && !shoppingcart.contains(e.target)) {
        shoppingcart.classList.remove('active');
    }
});

// ====== Fitur Keranjang =========

