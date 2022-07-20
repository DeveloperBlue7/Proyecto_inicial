console.log('hola hay alguien')

const menu = document.querySelector('.navbar-email');
const menu2 = document.querySelector('.desktop-menu');
const mobileiconmenu = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const shopping_cart = document.querySelector('.shopping_cart');
const product_detail = document.querySelector('.product-detail')


menu.addEventListener('click', vistatemporal);
mobileiconmenu.addEventListener("click", vistatemporal2);
shopping_cart.addEventListener('click', vistatemporal3);

function vistatemporal() {
    menu2.classList.toggle('vista')
    mobilemenu.classList.add('vista')
}

function vistatemporal2(){
    mobilemenu.classList.toggle('vista')
    product_detail.classList.add('vista')
}

function vistatemporal3(){
    product_detail.classList.toggle('vista')
    mobilemenu.classList.add('vista')

}


  
