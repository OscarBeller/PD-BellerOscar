class Productmanager {

    #products;
    static idProducto = 0;
    constructor (){
        this.#products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock)
        return 'Fijese de haber ingresado correctamente los siguientes datos (title, description, price, thumbnail, code, stock)'


     const codeRep = this.#products.some(p => p.code == code)
     if (codeRep)
        return `El id ${code} ya esta ocupado, ingrese otro por favor`
        
        Productmanager.idProducto = Productmanager.idProducto +1;
        const id = Productmanager.idProducto
        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.#products.push(newProduct)
        
        return'Producto añaido con exito'
    }
    getProducts(){
        return this.#products
    }
    getProductsById(id){
        const product = this.#products.find(p => p.id == id)
        if (product)
            return product
        else
            return `Not Found el id ${id}`
    }
}



module.exports = Productmanager