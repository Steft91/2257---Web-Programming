/****************************************************
                      FUNCIONES
*****************************************************/

//funciones declaradas

function myFunction(a, b){
    console.log("La suma es: " + (a + b))
}

myFunction(3, 4)

//utilizar return para funciones

function returnValue(a, b){
    return a + b
}

let resultado = returnValue(2, 4)
console.log(resultado)

//Funciones de tipo expresión 
//Declaración de una funcion de tipo expresión 

let sumar = function(a, b) {return a + b}
resultado1 = sumar(1, 2);
console.log(resultado1);

//Funciones de tipo self-invoking
//Funciones que se llaman así mismos
//Funciones anónimas
//Nota: se pueden utilizar estas funciones cuando se carga un programa
//no es muy comun pero se puede utilizar en ciertos casos

(function(a, b){
    console.log("Ejecutando la función: " + (a + b));
}) (3, 4)

function total(x, y, z){
    console.log(arguments.length);
    return x + y + z;
};

total(1, 2, 3)

//Functions tipo flecha en Javascript (arrow function)

const multiplicar = (x, y) => x * y;
console.log(multiplicar(2, 3))

const cuadrado = x => x * x;
console.log(cuadrado(4))

//Funcion anónima
//Es una funcion sin nombre, comunmente usada como argumento para otras funciones

setTimeout(function(){
    console.log("Función anónima")
}, 1000)

//Operaciones dentro de funciones flecha

const operaciones = { sumar : (a, b) => a + b};
console.log(operaciones.sumar?.(1, 2));
console.log(operaciones.restar?.(3, 2)); //undefined


/******************************************************/
//Crea una función declarada llamada calcularPromedio, que reciba 3 números y calcule el promedio
function calcularPromedio(a, b, c) {
    if (!esNumero(a) || !esNumero(b) || !esNumero(c)) {
        throw new Error("Todos los parámetros deben ser números.");
    }
    return (a + b + c) / 3;
}
 
// Crear funcion determinarMayor, que reciba 2 numeros y retorne el mayor

function determinarMayor(x, y) {
    if (!esNumero(x) || !esNumero(y)) {
        throw new Error("Ambos parámetros deben ser números.");
    }
    return x > y ? x : y;
}

//Crear funcion flecha llamada esPar que reciba número y retorne true si es par, false si es impar

const esPar = (num) => {
    if (!esNumero(num)) {
        throw new Error("El parámetro debe ser un número.");
    }
    return num % 2 === 0;
}; 


//Funcion anónima autoejecutable que 
// llame a las funciones anteriores, usea vlores de ejem, y muestre resultado en consola

(function () {
    try {
        const a = 14, b = 16, c = 15;
        const num1 = 7, num2 = 14;
        
        console.log(" El Promedio es:", calcularPromedio(a, b, c));
        console.log("El número mayor entre", num1, "y", num2, "es", determinarMayor(num1, num2));
        console.log("Es", num1, "par =>", esPar(num1));
        console.log("Es", num2, "par =>", esPar(num2));
    } catch (error) {
        console.error("Error:", error.message);
    }
})();

//Con validaciones y si algun parametro no es un número, q lance un error

function esNumero(valor) {
    return !isNaN(valor) && valor !== null && valor !== true && valor !== false && valor !== '';
}