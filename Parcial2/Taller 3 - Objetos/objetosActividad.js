// Ejercicio: Gestión de Inventario con Objetos en JavaScript

// Instrucciones

// Una tienda necesita administrar su inventario de productos mediante un programa en JavaScript.
// Cada producto debe tener las propiedades nombre, precio, y cantidad. La tienda requiere las siguientes funcionalidades:
// Crear el inventario inicial: Define un objeto que contenga al menos 4 productos con las propiedades mencionadas.

const inventario = {
    producto1: {
        nombre: "carne por lb",
        precio: 3.00,
        cantidad: 10
    },
    producto2: {
        nombre: "leche",
        precio: 1.00,
        cantidad: 20
    },
    producto3: {
        nombre: "cebolla",
        precio: 0.30,
        cantidad: 25
    },
    producto4: {
        nombre: "tomate",
        precio: 0.25,
        cantidad: 12
    }
};

// Sella el objeto del inventario: Asegúrate de que no puedan agregarse ni eliminarse productos, pero que sea posible modificar las cantidades y precios.

Object.seal(inventario);

// Implementa una función para vender un producto:
// La función debe aceptar el nombre del producto y la cantidad a vender.
// Si el producto existe y tiene suficiente stock, reduce la cantidad en el inventario y muestra un mensaje confirmando la venta.
// Si el producto no existe o no tiene suficiente stock, muestra un mensaje de error.

function venderProducto(nombre, cantidad) {
    for (let clave in inventario) {
      if (inventario[clave].nombre === nombre) {
        if (inventario[clave].cantidad >= cantidad) {
          inventario[clave].cantidad -= cantidad;
          console.log(`Venta exitosa: ${cantidad} unidades de ${nombre}`);
          return;
        } else {
          console.log(`El stock es insuficiente de ${nombre}`);
          return;
        }
      }
    }
    console.log(`El producto ${nombre} no se encuentró.`);
  }


// Implementa una función para aplicar un descuento a todos los productos:
// La función debe aceptar un porcentaje de descuento y reducir el precio de todos los productos en base a este porcentaje.
// Asegúrate de que los precios no sean negativos.

function aplicarDescuento(porcentajeDesc) {
    if (porcentajeDesc < 0) {
      console.error("Error: El porcentaje de descuento no puede ser negativo.");
      return;
    }
  
    for (let clave in inventario) {
      let descuento = inventario[clave].precio * (porcentajeDesc / 100);
      let nuevoPrecio = inventario[clave].precio - descuento;
  
      if (nuevoPrecio < 0) {
        console.error(
          `El descuento hace que el precio del producto "${inventario[clave].nombre}" sea negativo.`
        );
      } else {
        inventario[clave].precio = nuevoPrecio;
      }
    }
    console.log(`El descuento es del ${porcentajeDesc}%.`);
  }
    

// Usa las funciones creadas:

// Vende algunos productos.

// Aplica un descuento del 10% a todo el inventario.

// Muestra el inventario final utilizando console.log().



// Resultados esperados



// Al vender productos: Se confirma la venta si hay stock suficiente o se muestra un mensaje de error.

// Al aplicar el descuento: Los precios se reducen correctamente sin caer en valores negativos.

// Estado final del inventario: Refleja los cambios en cantidades y precios después de las operaciones.