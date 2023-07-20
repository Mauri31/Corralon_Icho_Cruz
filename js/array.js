let materialesDeCosntruccion = [
   {
      id: 0,
      nombre: "Cal Hidratada",
      descripcion: "Cal hidrat extra x 25kg",
      precio: 900,
      imagen: "multimedia/cal.jpg"
   },
   
   {
      id: 1,
      nombre: "Cemento Avellaneda",
      descripcion: "Cemento avellaneda x 50kg",
      precio: 2000,
      imagen: "multimedia/cemento.jpg"
   },
   
   {
      id: 2,
      nombre: "Hidralit Avellaneda",
      descripcion: "Hidralit avelladneda x 40kg",
      precio: 1520,
      imagen: "multimedia/hidralit.jpg"
   },

   {
      id: 3,
      nombre: "Pegamento Ceramico",
      descripcion: "Pegamento ceramico x 25kg",
      precio: 1980,
      imagen: "multimedia/perfecto.jpg"
   },

   {
      id: 4,
      nombre: "Block x 13",
      descripcion: "Block x 13x19x40",
      precio: 50,
      imagen: "multimedia/blockx13.jpg"
   },
   
   {
      id: 5,
      nombre: "Block x 20",
      descripcion: "Block x 20x19x40",
      precio: 75,
      imagen: "multimedia/blockx20.jpg"
   },
   
   {
      id: 6,
      nombre: "Alambre de Atar",
      descripcion: "Alambre de Atar x kg n°17",
      precio: 1200,
      imagen: "multimedia/alambre.jpg"
   },
   
   {
      id: 7,
      nombre: "Clavos PP",
      descripcion: "Clavos Punta Paris 2 pulgadas",
      precio: 1200,
      imagen: "multimedia/clavos.jpg"
   },
 ];

const contenedorPro = document.querySelector('#contenedorPro')

materialesDeCosntruccion.forEach(function(elemento){
   contenedorPro.innerHTML += `
      <div class="producto">
         <img src=${elemento.imagen} alt="producto">
         <h3>${elemento.nombre}</h3>
         <p>${elemento.descripcion}</p>
         <p>$${elemento.precio}</p>
         <button class="btn" id='${elemento.id}' >Añadir al carrito</button>
      </div>
   `  
})


let botones= document.querySelectorAll('.btn')
agregarAlCarrito(botones)

const carrito = []

function agregarAlCarrito(botones){
   botones.forEach(function(boton){
      boton.addEventListener('click', function(){
         boton.innerHTML = "Agregado al carrito";
         boton.disabled = true
         carrito.push(materialesDeCosntruccion[boton.id])
         localStorage.setItem('carrito', JSON.stringify(carrito));
      })
   })
}

