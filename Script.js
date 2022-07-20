console.log('hola hay alguien')

const menu = document.querySelector('.navbar-email');
const menu2 = document.querySelector('.desktop-menu');
const mobileiconmenu = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu')

menu.addEventListener('click', vistatemporal);
mobileiconmenu.addEventListener("click", vistatemporal2)

function vistatemporal() {
    menu2.classList.toggle('vista')
}

function vistatemporal2(){
    mobilemenu.classList.toggle('vista')
}



  
