var productos = require("./productsDataBase");


//console.log(productos);


var producto = productos.filter(function (m) {
         return m.id === 1;
        })[0];


 console.log(producto.name); 
 console.log(producto.price);
 