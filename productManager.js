const fs = require( 'fs' ); 

class Productmanager {

    #products;
    #path;
    static idProducto = 0;

    constructor (){
        this.#path = 'data/productos.json';
        this.#products = this.#leerProductoInFile();
    }

    #asignarIdProducto(){
        let id = 1;
        if (this.#products.length != 0) 
            id = this.#products [this.#products.length - 1].id + 1 ;
        return id;
    }


    #leerProductoInFile(){
        this.#products = [];
        try{
            if(fs.existsSync(this.#path))
                return json.parse(fs.readFileSync(this.#path,  'utf8'));
          return [];
        }catch (error) {
            console.log(`Ocurrio un erro al intentar leer el archivo : ${error}`);
        }
    }

    #almacenarArchivo(){
        try {
            fs.writeFileSync(this.#path, JSON.stringify(this.#products));
        } catch (error) {
            console.log(`Ocurrio un erro al intentar de almacenar el archivo : ${error}`);
        }
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock)
        return 'Fijese de haber ingresado correctamente los siguientes datos (title, description, price, thumbnail, code, stock)'


        const codeRepetido = this.#products.some(p => p.code == code)
     if (codeRepetido)
        return `El id ${code} ya esta ocupado, ingrese otro por favor`
        
        Productmanager.idProducto = Productmanager.idProducto +1;
        const id = this.#asignarIdProducto();
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
        this.#almacenarArchivo()
        
        return `Producto añadido con exito`
    }
    getProducts(){
        return this.#products
    }
    getProductsById(id,){
        const product = this.#products.find(p => p.id == id)
        if (product)
            return product
        else
            return `Not Found el id ${id}`
    }

    updateProduct(id, propProduc){
        let msg = `El prodcuto con el id ${id} no existe`;
        
        const index = this.#products.findIndex(p=>p.id===id);

        if  (index !== -1){
            const {id, ...rest} = propProduc;
            this.#products[index]={...this.#products[index], ...rest};
            this.#almacenarArchivo();
            msg = 'Producto Actualizado';
        } return msg;
    }

    deleteProdct(id){
        let msid = `El producto con el id ${id} no fue encontrado`;
        
        const index = this.#products.findIndex(p=> p.id ===id);
        if(index !== -1){
            this.#products = this.#products.filter(p=> p.id !== id);    
            this.#almacenarArchivo();
            msid = `Producto eliminado corectamente`;      
        }
        return msid;
    }
}



module.exports = Productmanager;