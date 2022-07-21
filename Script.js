console.log('hola hay alguien')

const menu = document.querySelector('.navbar-email');
const menu2 = document.querySelector('.desktop-menu');
const mobileiconmenu = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const shopping_cart = document.querySelector('.shopping_cart');
const product_detail = document.querySelector('.product-detail')
const carsContainer = document.querySelector('.cards-container')
const producto_detalle = document.querySelector('.product-details')
const buttonclose = document.querySelector('.close')



menu.addEventListener('click', vistatemporal);
mobileiconmenu.addEventListener("click", vistatemporal2);
shopping_cart.addEventListener('click', vistatemporal3);
buttonclose.addEventListener('click', closeWindows)

function vistatemporal() {
    menu2.classList.toggle('vista')
    mobilemenu.classList.add('vista')
    producto_detalle.classList.add('vista')
    product_detail.classList.add('vista')
}

function vistatemporal2(){
    mobilemenu.classList.toggle('vista')
    product_detail.classList.add('vista')
    producto_detalle.classList.add('vista')
}

function vistatemporal3(){
    product_detail.classList.toggle('vista')
    mobilemenu.classList.add('vista')
    menu2.classList.add('vista')
}
function openproducto() {
    producto_detalle.classList.remove('vista')
    menu2.classList.add('vista')
}
function closeWindows() {
    console.log('hola me escucha')
    producto_detalle.classList.add('vista')
}

const listaProductos = []
listaProductos.push({
    nombre: "Bicicleta",
    precio: 250,
    imagen: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600"
});
listaProductos.push({
    nombre: "Xbox",
    precio: '320',
    imagen: 'https://images.pexels.com/photos/2106216/pexels-photo-2106216.jpeg?auto=compress&cs=tinysrgb&w=600'
});
listaProductos.push({
    nombre: "Play station",
    precio: 400,
    imagen: "https://images.pexels.com/photos/7776885/pexels-photo-7776885.jpeg?auto=compress&cs=tinysrgb&w=600"
});
listaProductos.push({
    nombre: "Drone",
    precio: 500,
    imagen: "https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=600"
});
listaProductos.push({
    nombre: "Moto",
    precio: 2000,
    imagen: "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=600"
});


function productosPag(arr) {
    for (productos of listaProductos) {
        const imagenProductos= document.createElement('div');
        imagenProductos.classList.add('product-cards');
    
        const imgO = document.createElement('img');
        imgO.setAttribute('src', productos.imagen);
        imgO.addEventListener('click', openproducto);
    
        const infoproducto = document.createElement('div');
        infoproducto.classList.add('product-info');
    
        const divsolo =document.createElement('div');
        
        const productoprecio =document.createElement('p');
        productoprecio.innerText = '$ ' + productos.precio;
    
        const productnombre = document.createElement('p');
        productnombre.innerText = '$ ' + productos.nombre;
    
        divsolo.appendChild(productoprecio);
        divsolo.appendChild(productnombre);
    
        const figuresolo = document.createElement('figure')
    
        const imgS = document.createElement('img')
        imgS.setAttribute('src', 'icons/bt_add_to_cart.svg')
    
        figuresolo.appendChild(imgS);
    
        infoproducto.appendChild(divsolo);
        infoproducto.appendChild(figuresolo);
    
        imagenProductos.appendChild(imgO);
        imagenProductos.appendChild(infoproducto);
        
        carsContainer.appendChild(imagenProductos);
    }
}

productosPag(listaProductos)

  
