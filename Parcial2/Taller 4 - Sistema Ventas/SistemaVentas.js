/****************************************************
            SISTEMA DE VENTAS EN JS
*****************************************************/
//Clase Producto
class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.setPrecio(precio); 
        this.categoria = categoria;
        this.setStock(stock); 
    }

    getIdProducto() {
        return this.idProducto;
    }

    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        if (precio < 0) {
            console.log("El precio no puede ser negativo. Se asignará 0.");
            this.precio = 0;
        } else {
            this.precio = precio;
        }
    }

    getStock() {
        return this.stock;
    }

    setStock(stock) {
        if (stock < 0) {
            console.log("El stock no puede ser negativo. Se asignará 0.");
            this.stock = 0;
        } else {
            this.stock = stock;
        }
    }

    toString() {
        return `ID: ${this.idProducto}, Nombre: ${this.nombre}, Precio: $${this.precio}, Categoría: ${this.categoria}, Stock: ${this.stock}`;
    }
}

// Clase Orden
class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.descuentos = {}; 
    }

    getIdOrden() {
        return this.idOrden;
    }

    agregarProducto(producto) {
        if (this.productos.length >= Orden.MAX_PRODUCTOS) {
            console.log("No se pueden agregar más productos a la orden");
            return;
        }
        if (producto.stock <= 0) {
            console.log("No hay stock del producto");
            return;
        }
        producto.stock--;
        this.productos.push(producto);
    }

    establecerDescuento(categoria, porcentaje) {
        if (porcentaje < 0 || porcentaje > 100) {
            console.log("El porcentaje de descuento debe estar entre 0 y 100.");
            return;
        }
        this.descuentos[categoria] = porcentaje / 100;
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this.productos) {
            let precioFinal = producto.precio;
            const descuento = this.descuentos[producto.categoria] || 0;
            precioFinal *= (1 - descuento);
            totalVenta += precioFinal;
        }
        return totalVenta;
    }

    calcularImpuestos() {
        return this.calcularTotal() * 0.15;
    }

    mostrarOrden() {
        console.log(`\n=== Orden #${this.idOrden} ===`);
        console.log(`Total sin IVA: $${this.calcularTotal()}`);
        console.log(`IVA: $${this.calcularImpuestos()}`);
        console.log(`Total con IVA: $${(this.calcularTotal() + this.calcularImpuestos())}`);
        console.log("\nProductos en la orden:");
        for (const producto of this.productos) {
            let precioFinal = producto.precio;
            const descuento = this.descuentos[producto.categoria] || 0;
            precioFinal *= (1 - descuento);
            console.log(`${producto.toString()} - Precio con descuento: $${precioFinal}\n`);
        }
        console.log("=========================\n");
    }

    listarProductosPorPrecio() {
        return [...this.productos].sort((a, b) => b.precio - a.precio);
    }
}

let producto1 = new Producto("Pantalon", 200, "Ropa", 10);
let producto2 = new Producto("Telefono", 300, "Electronica", 5);
let producto3 = new Producto("Zapatos", 60, "Calzado", 3);

// Prueba de la clase Orden
let orden1 = new Orden();
orden1.establecerDescuento("Electronica", 10); 
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

console.log("Productos por precio descendente:");
let productosOrdenados = orden1.listarProductosPorPrecio();
productosOrdenados.forEach((producto) => console.log(producto.toString()));


//Stock debe disminuirse con la venta 
//Descuentos por categoría
//Crear una propiedad categoria en la clase Producto
//Los productos de la categoria electronica debe tener un descuento del 10% al calcular el total de su venta
//Implementar un método calcularImpuestos() que calcule el 15% de impuestos sobre el total de la venta
//Listar productos por precio descendente
//Asegurarse que los precios no pueden ser negativos al establecerlos en la clase producto.








// //************************************************
// class Calculadora{
//     //Método estático
//     static sumar(a, b){
//         return a + b;
//     }
// }

// //Acceso al método estático directamente desde la clase
// console.log(Calculadora.sumar(2, 3));

// //No se puede acceder directamente desde la instancia
// const calc = new Calculadora();
// //console.log(calc.sumar()); //Undefined


// class Contador{
//     static totalInstancias = 0;
//     constructor(){
//         Contador.totalInstancias++;

//     }
//     static mostrarInstancias(){
//         return `Se ha creado ${Contador.totalInstancias} instancias`;
//     }
// }

// const contador1 = new Contador();
// const contador2 = new Contador();
// console.log(Contador.mostrarInstancias()); //Se ha creado 2 instancias