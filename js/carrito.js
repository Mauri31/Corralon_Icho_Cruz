const carrito = JSON.parse(localStorage.getItem('carrito'));


const contenedorCarr = document.querySelector('#contenedorCarr')

var total = 0

if(carrito.length != 0){
    carrito.forEach(function(elemento){
        total += elemento.precio
        contenedorCarr.innerHTML += `
            <div>
                <h4>${elemento.nombre}</h4>
                <p>$${elemento.precio}</p>
            </div>
        `  
    })
}else{
   contenedorCarr.innerHTML += "<h3>Aun no agrego nada al carrito</h3>"
}

contenedorCarr.innerHTML += `
            <div>
                <h4><strong>Total</strong></h4>
                <p>$${total}</p>
            </div>
        `  

document.querySelector("#vaciarCarro").addEventListener("click", function(){
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload()
})

document.querySelector("#confirmarCompra").addEventListener("click", function(){
    alert("Compra exitosa")
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload()   
})