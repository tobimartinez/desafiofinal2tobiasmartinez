const productos=[
{id:1,nombre:"Pizza Muzzarella",precio:1500,imagen:"../img/pizza1nuevo.jpg"},
{id:2,nombre:"Pizza Fugazzeta",precio:1700,imagen:"../img/pizza2.jpg"},
{id:3,nombre:"Pizza Jamon Y Morron",precio:1700,imagen:"../img/pizza3.jpg"},
{id:4,nombre:"Pizza Palmito",precio:1600,imagen:"../img/pizza1nuevo.jpg"},
{id:5,nombre:"Pizza Americana",precio:2000,imagen:"../img/pizza2.jpg"},
{id:6,nombre:"Pizza Anana",precio:1600,imagen:"../img/pizza3.jpg"},
{id:7,nombre:"Pizza Macarenna",precio:2100,imagen:"../img/pizza1nuevo.jpg"},
{id:8,nombre:"Pizza Napolitana",precio:1900,imagen:"../img/pizza2.jpg"},
{id:9,nombre:"Pizza A la crema",precio:1700,imagen:"../img/pizza3.jpg"},
{id:10,nombre:"Pizza Imperial",precio:2200,imagen:"../img/pizza1nuevo.jpg"}
];


function obtenerProductosLS(){
    return JSON.parse(localStorage.getItem("productos")) || {};
}
function safeProductsLS(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
}
function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || {};
}
function safeProductsCarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}




/*function loadProducts(){
    let productos= obtenerProductosLS();
    let contenido="";
    for(let producto of productos) {
    contenido += `<div class:"col-md-3">
    <div class="card">
    <img height="200px" width="200px" src="../assets/img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
        <h5 class="card-title text-center">${producto.nombre}</h5>
        <p class="card-text text-center">${producto.precio} </p>
        <p class="card-text text-end"><a href="#" onclick="agregarCarrito(${producto.id})"class= "btn btn-primary">Agregar <a/></p>
        
    </div>
    </div>
    <div>` 
    }
    document.getElementById("productos").innerHTML = contenido;
}*/
function loadProducts(){
    let productos= obtenerProductosLS();
    for(let producto of productos) {
        
        let columna = document.createElement("div");
        columna.className = "col-md-4"
        let card = document.createElement("div");
        card.className = "card border-0"
        let imagen = document.createElement("img");
        imagen.src= `images/${producto.imagen}`;
        imagen.className= "card-img-top"
        imagen.alt=`${producto.nombre}`;
        let card_body= document.createElement("div");
        card_body.className="card-body";
        let titulo= document.createElement("h5");
        titulo.className = "card-title text-center";
        titulo.innerText = producto.nombre;
        let precio= document.createElement("p")
        precio.className= "card-title text-center";
        precio.innerText = "$" + producto.precio;
        let parrafo_boton= document.createElement("p")
        parrafo_boton.className="card-title text-center";
        parrafo_boton.innerHTML = `<a href="#" onclick="agregarCarrito(${producto.id})"class= "btn btn-primary">Agregar <a/>`;
        
        card_body.appendChild(titulo);
        card_body.appendChild(precio);
        card_body.appendChild(parrafo_boton);
        card.appendChild(imagen);
        card.appendChild(card_body);
        columna.appendChild(card);
        document.getElementById("productos").appendChild(columna);
    }
}


function updateBtnCarrito(){
    let productos= obtenerProductosCarrito();
    
    let contenido=`<button type="button" class="btn btn-primary position-relative"><img src="../img/iconobadge.png" width="24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      0 </span>
  </button>`;
    let total= 0;
    if(productos.length > 0){
        for(let producto of productos){
            total += producto.cantidad;
        }
        contenido=`<button type="button" class="btn btn-primary position-relative"><img src="../img/iconobadge.png" width="24">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          ${total} </span>
      </button>`;
    }
    document.getElementById("boton_carrito").innerHTML=contenido;
}
function buscarProducto(id){
    let productos= obtenerProductosLS();
    return productos.find(x => x.id == id);
}
function agregarCarrito(id){
    let producto= buscarProducto(id);
    let productos_carrito= obtenerProductosCarrito();
    producto_cantidad=1;
    productos_carrito.push(producto);
}
safeProductsLS(productos);
loadProducts();
updateBtnCarrito();



