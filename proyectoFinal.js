const herramientas=[
    {
        tipo: "martillo",
        marca:"tramontina",
        codigo: 6965,
        precio: 900
    },
    {
        tipo: "pinza",
        marca:"metz",
        codigo: 9945,
        precio: 700
    },
    {
        tipo: "alicate",
        marca:"bahco",
        codigo: 6985,
        precio: 650
    },
    {
        tipo: "maza",
        marca:"azzurra",
        codigo: 9948,
        precio: 450
    },
    {
        tipo: "serrucho",
        marca:"santa juana",
        codigo: 6745,
        precio: 1200
    },
    {
        tipo: "cinta metrica",
        marca:"bremen",
        codigo: 6935,
        precio: 500
    },
    {
        tipo: "nivel",
        marca:"cross",
        codigo: 9942,
        precio: 450
    },
    {
        tipo: "llave ajustable",
        marca:"biassoni",
        codigo: 9923,
        precio: 1050
    },
];


let respuesta=0;
let nombre= prompt("Ingrese su nombre");

function saludar() {
    alert("Hola "+nombre.toUpperCase()+", ¡Bienvenido a Ferreteria Roca!");
}
saludar ();



let precio=0;
console.log("lista de herramientas:");
for(const herramienta of herramientas){
    console.log(herramienta.tipo);

}
let herramientaBuscar=prompt("Ingresa la herramienta a buscar");



function calcular(){
    

while(herramientaBuscar!="x" ){
    switch(herramientaBuscar.toLowerCase()){
        case "martillo":
            for(const herramienta of herramientas){
                if(herramienta.tipo==herramientaBuscar.toLowerCase()){
                    function mostrar(){
                        console.log("La herramienta solicitada es: "+herramienta.tipo.toUpperCase());
                        console.log("La marca es: "+herramienta.marca.toUpperCase());
                        console.log("Su precio es: $"+herramienta.precio);
                        }
                }
            }
            mostrar();
            pregCarrito();
            carrito();
            if (respuesta.toLowerCase()=="si"){
            precio=precio+900;
            console.log("PRODUCTO AGREGADO: Martillo $900")}
            else{
                console.log("Martillo no se agrego al carrito")
            }
            break;
        case "pinza":
            for(const herramienta of herramientas){
                if(herramienta.tipo==herramientaBuscar.toLowerCase()){
                    function mostrar(){
                        console.log("La herramienta solicitada es: "+herramienta.tipo.toUpperCase());
                        console.log("La marca es: "+herramienta.marca.toUpperCase());
                        console.log("Su precio es: $"+herramienta.precio);
                        }
                }
            }
            mostrar();
            pregCarrito();
            carrito();
            if (respuesta.toLowerCase()=="si"){
            precio=precio+700;
            console.log("PRODUCTO AGREGADO: Pinza $700")}
            else{
                console.log("Pinza no se agrego al carrito")
            }
            break;
        case "alicate":
            for(const herramienta of herramientas){
                if(herramienta.tipo==herramientaBuscar.toLowerCase()){
                    function mostrar(){
                        console.log("La herramienta solicitada es: "+herramienta.tipo.toUpperCase());
                        console.log("La marca es: "+herramienta.marca.toUpperCase());
                        console.log("Su precio es: $"+herramienta.precio);
                        }
                }
            }
            mostrar();
            pregCarrito();
            carrito();
            if (respuesta.toLowerCase()=="si"){
            precio=precio+650;
            console.log("PRODUCTO AGREGADO: Alicate $650")}
            else{
                console.log("Alicate no se agrego al carrito")
            }
            break;
        case "maza":
            for(const herramienta of herramientas){
                if(herramienta.tipo==herramientaBuscar.toLowerCase()){
                    function mostrar(){
                        console.log("La herramienta solicitada es: "+herramienta.tipo.toUpperCase());
                        console.log("La marca es: "+herramienta.marca.toUpperCase());
                        console.log("Su precio es: $"+herramienta.precio);
                        }
                }
            }
            mostrar();
            pregCarrito();
            carrito();
            if (respuesta.toLowerCase()=="si"){
            precio=precio+450;
            console.log("PRODUCTO AGREGADO: Maza $450")}
            else{
                console.log("Maza no se agrego al carrito")
            }
            break;
        case "serrucho":
            for(const herramienta of herramientas){
                if(herramienta.tipo==herramientaBuscar.toLowerCase()){
                    function mostrar(){
                        console.log("La herramienta solicitada es: "+herramienta.tipo.toUpperCase());
                        console.log("La marca es: "+herramienta.marca.toUpperCase());
                        console.log("Su precio es: $"+herramienta.precio);
                        }
                }
            }
            mostrar();
            pregCarrito();
            carrito();
            if (respuesta.toLowerCase()=="si"){
            precio=precio+1200;
            console.log("PRODUCTO AGREGADO: Serrucho $1200")}
            else{
                console.log("Serrucho no se agrego al carrito")
            }
            break;
        case "cinta metrica":
            for(const herramienta of herramientas){
                if(herramienta.tipo==herramientaBuscar.toLowerCase()){
                    function mostrar(){
                        console.log("La herramienta solicitada es: "+herramienta.tipo.toUpperCase());
                        console.log("La marca es: "+herramienta.marca.toUpperCase());
                        console.log("Su precio es: $"+herramienta.precio);
                        }
                }
            }
            mostrar();
            pregCarrito();
            carrito();
            if (respuesta.toLowerCase()=="si"){
            precio=precio+500;
            console.log("PRODUCTO AGREGADO: Cinta metrica $500")}
            else{
                console.log("Cinta metrica no se agrego al carrito")
            }
            break;
        case "nivel":
            for(const herramienta of herramientas){
                if(herramienta.tipo==herramientaBuscar.toLowerCase()){
                    function mostrar(){
                        console.log("La herramienta solicitada es: "+herramienta.tipo.toUpperCase());
                        console.log("La marca es: "+herramienta.marca.toUpperCase());
                        console.log("Su precio es: $"+herramienta.precio);
                        }
                }
            }
            mostrar();
            pregCarrito();
            carrito();
            if (respuesta.toLowerCase()=="si"){
            precio=precio+450;
            console.log("PRODUCTO AGREGADO: Nivel $450")}
            else{
                console.log("Nivel no se agrego al carrito")
            }
            break;
            case "llave ajustable":
            for(const herramienta of herramientas){
                if(herramienta.tipo==herramientaBuscar.toLowerCase()){
                    function mostrar(){
                        console.log("La herramienta solicitada es: "+herramienta.tipo.toUpperCase());
                        console.log("La marca es: "+herramienta.marca.toUpperCase());
                        console.log("Su precio es: $"+herramienta.precio);
                        }
                }
            }
            mostrar();
            pregCarrito();
            carrito();
            if (respuesta.toLowerCase()=="si"){
            precio=precio+1050;
            console.log("PRODUCTO AGREGADO: Llave ajustable $1050")}
            else{
                console.log("Llave ajustable no se agrego al carrito")
            }
            break;
        default:
            console.log("Esa herramienta no está en stock");
            break;
    }
    herramientaBuscar = prompt ("Ingresa la herramienta a buscar\nEscriba x para terminar");
    
}


alert("Total de todos los productos: $"+precio+"\nGracias por su compra!!");
}

calcular();

function pregCarrito(){
  respuesta=   prompt("Quieres agregarlo al carrito?\n-Si\n-No")}

function carrito(){
    if (respuesta.toLowerCase()=="si"){
        alert("Agregado al carrito")

    }else{
        alert("No se agrego al carrito")
    }
}

function inOf(){
    let buscarHerramienta=prompt("Ingresa la herramienta a buscar, te dire su posicion y la mostrare por consola");
    for(const herramienta of herramientas){
        if(herramienta.tipo==buscarHerramienta){
            let posicion=herramientas.indexOf(herramienta);
            console.log("La herramienta "+buscarHerramienta+ " se encuentra en la posicion "+posicion);
            console.table(herramienta);
        }
    }
}
inOf();
herramientas.forEach((herramienta)=>console.log(herramienta.tipo));
function stock(){
    let pregHerram=prompt("Ingrese el nombre de la herramienta para saber si se encuentra en stock?");
    let encontrado=herramientas.find((herramienta)=>herramienta.tipo==pregHerram.toLowerCase());
    if(encontrado != undefined){
        console.log("La herramienta "+pregHerram+ " se encuentra en stock");
        console.table(encontrado);
    }else{
        console.log(pregHerram.toUpperCase()+" no se encuentra en stock !");
        stock();
    }
};
stock();
let margenPrecio=parseFloat(prompt("Ingrese un precio y mostrare todos los productos por debajo de ese rango de precio"))
const caro=herramientas.filter((herramienta)=>herramienta.precio<margenPrecio);
if (caro.length!=0){
    console.log("Herramientas con precio menor de $"+margenPrecio+" :");
    console.table(caro);

}else{
    console.log("No hay Herramientas con esas propiedades")
};
function listaIva(){

    let mostrarIva=prompt("Quieres ver la lista de precios con Iva incluido? \n-Si\n-No");
    if (mostrarIva.toLowerCase()=="si"){
    
        console.log("Herramientas con Iva incluido:");
        const preciosConIva=herramientas.map((herramienta)=>{
            return {
                codigo:herramienta.codigo,
                tipo:herramienta.tipo,
                marca:herramienta.marca,
                precio:herramienta.precio * 1.21
            }
        });
        
        console.table( preciosConIva);
        const totalPrecios=preciosConIva.reduce((acumulador,herramienta)=>acumulador+herramienta.precio,0);
        console.log("El total de todos las herramientas con Iva es: $"+totalPrecios);
    }else if(mostrarIva.toLowerCase()=="no"){
        console.log("No se muestra la lista de precios con Iva");
    }else{
        console.log("Ingrese una respuesta valida");
        listaIva();
    }
};
listaIva();


function ordenar(){

    let ordenarPrecio=prompt("Ingrese el numero correspondiente:\n1-Ordenar de mayor a menor precio\n2-Ordenar de menor a mayor precio");
    if(ordenarPrecio=="1"){
        herramientas.sort((a,b)=>b.precio - a.precio);
    console.table(herramientas);
    }else if(ordenarPrecio=="2"){
        herramientas.sort((a,b)=>a.precio - b.precio);
        console.table(herramientas); 
    }else{
        console.log("Ingrese un numero valido");
        ordenar();
    };
};
ordenar();