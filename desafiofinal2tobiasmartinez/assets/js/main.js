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
function safeProductsLS(){
    localStorage.setItem("productos", JSON.stringify(productos));
}
function obtenerProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || {};
}
function safeProductsCarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}




function loadProducts(){
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
}


function updateBtnCarrito(){
    let productos= obtenerProductosLS();
    
    let contenido=`<button type="button" class="btn btn-primary position-relative"><img src="../img/iconobadge.png" width="24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      0 </span>
  </button>`;
    let total= 0;
    if(productos.length > 0){
        for(let producto of productos){
            total += producto.cantidad;
        }
        contenido = `<button type="button" class="btn btn-warning position-relative">     <img src="../img/iconobadge.png" width="24">     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">       ${total} <span class="visually-hidden"></span>     </span></button>;`;
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
    producto.cantida= 1;
    productos_carrito.push(producto);
    safeProductsCarrito(productos_carrito);
    updateBtnCarrito();
}
safeProductsLS();
updateBtnCarrito();
loadProducts();