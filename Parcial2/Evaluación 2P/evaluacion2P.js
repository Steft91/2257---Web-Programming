/****************************************************
                      EVALUACIÓN 2P
*****************************************************/

// Gestión del Inventario:
// Clase para gestionar el inventario y operaciones relacionadas.

class Inventario {
    constructor() {
        this.productos = {};
    }

// // ▪ Agregar productos con propiedades: nombre, precio, cantidad, y categoría.

    agregarProducto(nombre, precio, cantidad, categoria) {
        this.productos[nombre] = { precio, cantidad, categoria };
    }

    // // Listar los productos ordenados por precio de forma ascendente o descendente.

    listarProductos(ascendente = true) {
        return Object.values(this.productos).sort((a, b) =>
            ascendente ? a.precio - b.precio : b.precio - a.precio
        );
    }
    
// ▪ Filtrar productos por categoría.

    filtrarPorCategoria(categoria) {
        return Object.values(this.productos).filter(producto => producto.categoria === categoria);
    }

    // Descuentos Personalizados:
// o Agregar un método aplicarDescuento(categoria, porcentaje) que aplique un descuento a
// todos los productos de una categoría específica.
    aplicarDescuento(categoria, porcentaje) {
        for (let producto in this.productos) {
            if (this.productos[producto].categoria === categoria) {
                this.productos[producto].precio *= (1 - porcentaje / 100);
            }
        }
    }
}

// Registro de Ventas:
// o Implementar una clase Venta para gestionar la compra de productos.
// o Crear un método realizarVenta(nombreProducto, cantidad) que:
// ▪ Verifique si el producto existe y si la cantidad es suficiente
// ▪ Descuente la cantidad vendida del inventario y registre la venta en una lista de
// ventas realizadas.
// Si la operación no es posible, debe mostrar un mensaje de error indicando la razón
// (producto inexistente o cantidad insuficiente).

class Venta {
    constructor(inventario) {
        this.inventario = inventario;
        this.ventasRealizadas = [];
    }

    realizarVenta(nombreProducto, cantidad) {
        const producto = this.inventario.productos[nombreProducto];
        if (producto && producto.cantidad >= cantidad) {
            producto.cantidad -= cantidad;
            const venta = {
                nombre: nombreProducto,
                cantidad,
                precio: producto.precio,
                fecha: new Date(),
            };
            this.ventasRealizadas.push(venta);
            console.log(`Venta realizada:`, venta);
        } else {
            console.log(
                `No se pudo realizar la venta. ${!producto ? "Producto no encontrado" : "Cantidad insuficiente"}`
            );
        }
    }
    // . Reportes Avanzados:
    // o Imprimir un reporte detallado que incluya:
    // ▪ Inventario actualizado.
    // ▪ Ventas realizadas con fecha y hora (utilizando objetos Date).
    // ▪ El total de ingresos generados y el producto más vendido.
    obtenerReporte() {
        let totalIngresos = 0;
        let productoMasVendido = null;

        for (let venta of this.ventasRealizadas) {
            totalIngresos += venta.cantidad * venta.precio;

            if (!productoMasVendido || venta.cantidad > productoMasVendido.cantidad) {
                productoMasVendido = venta;
            }
        }

        return { totalIngresos, productoMasVendido };
    }

}

// Inicializar inventario y agregar productos.

const inventario = new Inventario();
inventario.agregarProducto("lb de carne", 3.0, 10, "carne");
inventario.agregarProducto("leche", 1.0, 20, "lacteos");
inventario.agregarProducto("cebolla", 0.3, 25, "verduras");
inventario.agregarProducto("lb de pollo", 1.25, 12, "carne");
inventario.agregarProducto("salchicha", 0.7, 13, "embutidos");
inventario.agregarProducto("mortadela", 1.5, 6, "embutidos");
inventario.agregarProducto("tomate", 0.25, 21, "verduras");

// Productos de maneras asc. y desc.
console.log("Productos ordenados por precio de manera ascendente:", inventario.listarProductos(true));
console.log("Productos ordenados por precio de manera descendente:", inventario.listarProductos(false));

// Filtrar por categoría
console.log("Productos de la categoría verduras:", inventario.filtrarPorCategoria("verduras"));
console.log("Productos de la categoría carne:", inventario.filtrarPorCategoria("carne"));
console.log("Productos de la categoría lacteos:", inventario.filtrarPorCategoria("lacteos"));

// Aplicar descuento
inventario.aplicarDescuento("embutidos", 10);
console.log("Descuento aplicado a la categoria seleccionada:", inventario.productos);

// Venta
const ventas = new Venta(inventario);
ventas.realizarVenta("lb de carne", 5);
ventas.realizarVenta("leche", 10);
ventas.realizarVenta("cebolla", 7);
ventas.realizarVenta("lb de pollo", 2);
ventas.realizarVenta("salchicha", 3);
ventas.realizarVenta("mortadela", 1);
ventas.realizarVenta("tomate", 14);

// Reporte.
console.log("Ventas realizadas:", ventas.ventasRealizadas);

console.log("Inventario actualizado:", inventario.productos);
const reporte = ventas.obtenerReporte();
console.log("Total de ingresos generados:", reporte.totalIngresos);
console.log("Producto más vendido:", reporte.productoMasVendido);

