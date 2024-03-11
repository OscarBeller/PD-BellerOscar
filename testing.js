const ProductManager = require("./productManager")

const  producto = new ProductManager();

console.log(producto.addProduct('Camionero','mate',12500,'https://mate1.com','mateCamionero',15))
console.log(producto.addProduct('Imperial','mate',13500,'https://portatamate.com','mateImperial',5))

console.log(producto.getProducts())